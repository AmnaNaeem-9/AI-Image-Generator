import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import PromptInput from "./components/PromptInput";
import GenerateButton from "./components/GenerateButton";
import ImageDisplay from "./components/ImageDisplay";
import HistoryDisplay from "./components/HistoryDisplay";

function App() {
  const [prompt, setPrompt] = useState<string>("");
  const [image, setImage] = useState<string | null>(null);
  const [history, setHistory] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;

    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate image");
      }

      const data = await response.json();

      // Use image from backend response
      setImage(data.image);
      setHistory((prev) => [data.image, ...prev]);

    } catch (error) {
      console.error("Error:", error);
      // fallback image if API fails
      const fallbackImage = `https://via.placeholder.com/300?text=${encodeURIComponent(prompt)}`;
      setImage(fallbackImage);
      setHistory((prev) => [fallbackImage, ...prev]);
    }

    setLoading(false);
  };

  return (
    <Router>
      <Navbar />

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 flex flex-col items-center justify-center px-4">
              <h1 className="text-4xl md:text-5xl text-white font-bold mb-8 text-center animate-fadeIn">
                AI Image Generator
              </h1>

              <div className="w-full max-w-md space-y-4">
                <PromptInput prompt={prompt} setPrompt={setPrompt} />
                <GenerateButton loading={loading} onClick={handleGenerate} />
                <ImageDisplay image={image} />
              </div>
            </div>
          }
        />

        {/* History Page */}
        <Route
          path="/history"
          element={
            <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 flex flex-col items-center px-4 py-8">
              <h1 className="text-4xl md:text-5xl text-white font-bold mb-8 text-center animate-fadeIn">
                History
              </h1>

              <HistoryDisplay history={history} />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;