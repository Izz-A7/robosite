import React from "react";

const VideoBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="w-full h-full bg-[#0D0D0D] flex items-center justify-center">
        <img
          src="/robocream-mascot.svg"
          alt="Robot Mascot"
          className="h-[60%] object-contain animate-float"
        />
      </div>
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 20 + 10}px`,
              height: `${Math.random() * 20 + 10}px`,
              backgroundColor: i % 2 === 0 ? "#59D1C5" : "#FF88BB",
              animationDelay: `${Math.random() * 5}s`,
              opacity: 0.6,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default VideoBackground;
