import { useState } from "react";
import { Loader } from "../components/Loader.tsx";

export const HomePage = () => {
    const [isLoading, setIsLoading] = useState(true);

    // Trigger when the iframe content is fully loaded
    const handleIframeLoad = () => {
        setIsLoading(false);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
            <h1 className="text-4xl font-bold mb-10">Welcome to the Rick & Morty Portal!</h1>

            <div className="relative w-[480px] h-[480px] flex items-center justify-center">
                {/* Loader in the center */}
                {isLoading && (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <Loader />
                    </div>
                )}

                {/* GIF inside iframe with onLoad */}
                <iframe
                    src="https://tenor.com/embed/23525460"
                    width="480"
                    height="480"
                    allowFullScreen
                    onLoad={handleIframeLoad}  // Detects when iframe finishes loading
                    className={`rounded-lg shadow-lg ${isLoading ? "hidden" : "block"}`}
                    title="Rick Roll"
                ></iframe>
            </div>
        </div>
    );
};
