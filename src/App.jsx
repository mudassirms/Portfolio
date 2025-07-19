import Sidebar from "./components/Sidebar/Sidebar";
import ChatInterface from "./components/Chat/ChatInterface";

export default function App() {
  return (
    <div className="h-screen w-screen flex flex-col bg-gray-900 text-white overflow-hidden">
      {/* Header */}
      <header className="w-full flex items-center justify-between px-6 py-4 bg-[#0f172a] border-b border-gray-700">
        <div className="text-xl font-bold tracking-wide">
          <span className="text-indigo-400">MaverikAI</span>{" "}
          <span className="text-gray-300">SupportSense</span>
        </div>
        <img src="src/assets/MaverickIgnite3.png" alt="Logo" className="w-30 h-10" />
      </header>

      {/* Main Body */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <Sidebar />

        {/* Chat Area */}
        <main className="flex-1 flex flex-col bg-gray-900 overflow-hidden">
          <ChatInterface />
        </main>
      </div>
    </div>
  );
}
