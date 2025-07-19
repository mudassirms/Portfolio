import { useState, useRef, useEffect } from "react";
import { askQuestion } from "../../api";
import ImageGallery from "./ImageGallary";
import { Mic, Copy, Volume2, Volume1, Check, } from "lucide-react";

export default function ChatInterface() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [listening, setListening] = useState(false);
  const [speakingId, setSpeakingId] = useState(null);
  const [copiedIndex, setCopiedIndex] = useState(null);


  const chatRef = useRef(null);
  const inputRef = useRef(null);
  const recognitionRef = useRef(null);

  useEffect(() => {
    if ("webkitSpeechRecognition" in window || "SpeechRecognition" in window) {
      const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      recognition.lang = "en-US";
      recognition.interimResults = false;
      recognition.continuous = false;

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setInput(transcript);
        setListening(false);
      };

      recognition.onerror = () => setListening(false);
      recognition.onend = () => setListening(false);

      recognitionRef.current = recognition;
    }
  }, []);

  const handleVoiceInput = () => {
    if (recognitionRef.current) {
      if (!listening) {
        recognitionRef.current.start();
        setListening(true);
      } else {
        recognitionRef.current.stop();
        setListening(false);
      }
    }
  };

  const handleCopy = (text, index) => {
  navigator.clipboard.writeText(text);
  setCopiedIndex(index);
  setTimeout(() => setCopiedIndex(null), 2000); // reset after 2 seconds
};


  const handleSpeakToggle = (text, id) => {
    const cleanText = text.replace(/<[^>]*>?/gm, "");

    if (speakingId === id) {
      speechSynthesis.cancel();
      setSpeakingId(null);
    } else {
      speechSynthesis.cancel(); // Cancel other speech
      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.onend = () => setSpeakingId(null);
      setSpeakingId(id);
      speechSynthesis.speak(utterance);
    }
  };

  const handleSend = async () => {
    if (!input.trim()) return;
    const userInput = input;
    setInput("");
    setErrorMessage("");
    setLoading(true);

    setMessages((prev) => [
      ...prev,
      { role: "user", text: userInput, time: new Date() },
    ]);

    setMessages((prev) => [
      ...prev,
      { role: "typing", text: "...", time: new Date() },
    ]);

    try {
      const data = await askQuestion(userInput);

      setMessages((prev) => {
        const updated = [...prev];
        updated.pop(); // remove typing
        return [
          ...updated,
          {
            role: "bot",
            text: data.response,
            images: data.images || [],
            time: new Date(),
          },
        ];
      });
    } catch (err) {
      setMessages((prev) => prev.filter((msg) => msg.role !== "typing"));
      setErrorMessage(
        "Hmm... I couldn't process that. Try rephrasing your question."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="flex flex-col h-full w-full bg-white">
      {/* Chat Messages */}
      <div
        ref={chatRef}
        className="flex-1 overflow-y-auto px-6 py-10 bg-white text-gray-800"
      >
        {messages.length === 0 ? (
          <div className="text-center mt-10">
            <h1 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900">
              Welcome to SupportSense
            </h1>
            <p className="text-gray-600 mb-10">How can I assist you today?</p>
          </div>
        ) : (
          <div className="w-full space-y-6">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`relative max-w-[85%] px-8 py-4 rounded-lg shadow-md transition-all duration-300 ${
                    msg.role === "user"
                      ? "bg-blue-600 text-white self-end text-right"
                      : "bg-gray-100 text-gray-900 self-start text-left"
                  }`}
                >
                  <div className="text-sm leading-relaxed space-y-2">
                    {msg.role === "bot" || msg.role === "typing" ? (
                      <>
                        {msg.text === "..." ? (
      <div className="flex gap-1 items-center">
        <span className="w-2 h-2 bg-gray-600 rounded-full animate-bounce [animation-delay:0ms]"></span>
        <span className="w-2 h-2 bg-gray-600 rounded-full animate-bounce [animation-delay:150ms]"></span>
        <span className="w-2 h-2 bg-gray-600 rounded-full animate-bounce [animation-delay:300ms]"></span>
      </div>
    ) : (
      <div dangerouslySetInnerHTML={{ __html: msg.text }} />
    )}
                        {msg.images && msg.images.length > 0 && (
                          <div className="mt-3">
                            <ImageGallery images={msg.images} />
                          </div>
                        )}
                      </>
                    ) : (
                      <div>{msg.text}</div>
                    )}
                  </div>

                  {/* Icons for bot messages */}
                  {msg.role === "bot" && (
                    <div className="absolute top-2 right-3 flex gap-2">
                      {/* Copy Button */}
                      <button
  onClick={() => handleCopy(msg.text, index)}
  title={copiedIndex === index ? "Copied!" : "Copy"}
  className="p-1 rounded hover:bg-gray-300 transition-all"
>
  {copiedIndex === index ? (
    <Check className="w-4 h-4 text-green-500" />
  ) : (
    <Copy className="w-4 h-4 text-gray-700" />
  )}
</button>

                      {/* Speak Button */}
                      <button
                        onClick={() => handleSpeakToggle(msg.text, index)}
                        title={speakingId === index ? "Stop" : "Speak"}
                        className={`p-1 rounded hover:bg-gray-200 transition-all duration-300 ${
                          speakingId === index ? "animate-pulse text-blue-600" : ""
                        }`}
                      >
                        {speakingId === index ? (
                          <Volume2 className="w-4 h-4" />
                        ) : (
                          <Volume1 className="w-4 h-4 text-gray-700" />
                        )}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
        {errorMessage && (
          <div className="text-center text-red-600 mt-4">{errorMessage}</div>
        )}
      </div>

      {/* Input Field */}
      <div className="border-t border-gray-300 bg-white px-4 sm:px-6 py-4 sm:py-6">
        <div className="w-full max-w-full sm:max-w-3xl mx-auto flex items-center gap-2 sm:gap-4">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Type your message..."
            className="flex-1 px-4 py-6 sm:px-6 sm:py-7 rounded-xl bg-gray-100 text-gray-800 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            onClick={handleSend}
            disabled={loading}
            className={`px-4 py-3 rounded-lg text-white ${
              loading
                ? "bg-blue-300 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {loading ? "Thinking..." : "Send"}
          </button>

          {/* Voice Button */}
          <button
            onClick={handleVoiceInput}
            className={`relative p-3 sm:p-4 rounded-xl bg-gray-200 text-gray-800 hover:bg-gray-300 transition-all ${
              listening ? "ring-4 ring-blue-400 animate-pulse" : ""
            }`}
            title="Voice Input"
          >
            <Mic className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
