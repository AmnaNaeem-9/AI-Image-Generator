import React from "react";

interface GenerateButtonProps {
    loading: boolean;
    onClick: () => void;
}

const GenerateButton: React.FC<GenerateButtonProps> = ({ loading, onClick }) => {
    return (
        <button
            onClick={onClick}
            disabled={loading}
            className={`
        w-full 
        py-3 
        rounded-lg 
        bg-blue-500 
        text-white 
        font-semibold 
        hover:bg-blue-600 
        transition 
        duration-300 
        transform 
        hover:scale-105
        flex 
        justify-center 
        items-center
        disabled:opacity-50
        disabled:cursor-not-allowed
      `}
        >
            {loading ? (
                <svg
                    className="animate-spin h-5 w-5 mr-2 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                    ></circle>
                    <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    ></path>
                </svg>
            ) : null}
            {loading ? "Generating..." : "Generate Image"}
        </button>
    );
};

export default GenerateButton;