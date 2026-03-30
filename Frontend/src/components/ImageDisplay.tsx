import React from "react";

interface ImageDisplayProps {
    image: string | null;
}

const ImageDisplay: React.FC<ImageDisplayProps> = ({ image }) => {
    if (!image) return null; // Don't render anything if no image

    return (
        <div className="mt-6 flex justify-center">
            <img
                src={image}
                alt="Generated AI"
                className="
          w-full 
          max-w-sm 
          rounded-lg 
          shadow-lg 
          animate-fadeIn 
          transition-transform 
          hover:scale-105
        "
            />
        </div>
    );
};

export default ImageDisplay;