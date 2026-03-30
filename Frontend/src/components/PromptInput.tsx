import React from "react";

interface PromptInputProps {
    prompt: string;
    setPrompt: (value: string) => void;
}

const PromptInput: React.FC<PromptInputProps> = ({ prompt, setPrompt }) => {
    return (
        <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Enter your image prompt..."
            className="
        w-full 
        px-4 py-3 
        rounded-lg 
        focus:outline-none 
        focus:ring-2 
        focus:ring-blue-500 
        transition 
        duration-300 
        bg-slate-700 
        text-white 
        placeholder-gray-400
        hover:shadow-lg
      "
        />
    );
};

export default PromptInput;