import React from "react";

interface HistoryDisplayProps {
    history: string[];
}

const HistoryDisplay: React.FC<HistoryDisplayProps> = ({ history }) => {
    if (history.length === 0) {
        return <p className="text-gray-400">No images generated yet.</p>;
    }

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-4xl">
            {history.map((imgUrl, index) => (
                <div key={index} className="overflow-hidden rounded-lg shadow-md">
                    <img
                        src={imgUrl}
                        alt={`Generated ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                </div>
            ))}
        </div>
    );
};

export default HistoryDisplay;