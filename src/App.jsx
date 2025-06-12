import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      {/* Global toast notifications */}
      <Toaster
  position="top-center"
  reverseOrder={false}
  toastOptions={{
    style: {
      background: "#0f0f0f",
      color: "#00fff7",
      border: "1px solid #00fff7",
      boxShadow: "0 0 12px #00fff7",
      fontFamily: "monospace",
      fontSize: "14px",
      zIndex: 9999,
    },
  }}
/>

      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
