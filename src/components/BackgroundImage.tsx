import React from "react";

const BackgroundImage = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1587563974073-6dabdbbadac1"
        alt="Colorful Ice Cream Background"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/40 to-pink-500/40" />
    </div>
  );
};

export default BackgroundImage;
