import React from "react";
import { Button } from "./ui/button";
import { MapPin, Info } from "lucide-react";

const HeroContent = () => {
  return (
    <div className="relative z-10 flex flex-col items-start justify-center text-left text-white p-10 h-full">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
        Meet Your Ice Cream
        <br />
        Robot Barista!
      </h1>
      <p className="text-lg mb-8 max-w-md text-[#B0B0B0]">
        Experience the future of ice cream with our robot-powered vending
        machines.
      </p>
      <Button
        size="lg"
        className="bg-[#59D1C5] text-white hover:bg-[#59D1C5]/90 rounded-full px-8"
        onClick={() => (window.location.href = "/technology")}
      >
        <Info className="mr-2 h-5 w-5" />
        Our Technology
      </Button>
    </div>
  );
};

export default HeroContent;
