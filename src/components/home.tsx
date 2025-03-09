import React from "react";
import { motion } from "framer-motion";
import HeroSection from "./HeroSection";

const RobotMascot = () => (
  <img
    src="/robocream-mascot.svg"
    alt="Robot Mascot"
    className="w-[120px] h-[120px] object-contain"
  />
);

const ParticleBackground = () => (
  <div className="absolute inset-0 opacity-20">
    <div className="absolute inset-0 bg-gradient-to-r from-[#E3F2FD] to-[#A5D6F7]" />
  </div>
);

const HomePage = () => {
  return (
    <div className="relative min-h-screen bg-[#0D0D0D]">
      {/* Dark background */}

      {/* Main Content */}
      <main className="relative pt-20">
        {/* Hero Section */}
        <HeroSection />
      </main>

      {/* Robot Mascot */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="fixed bottom-8 right-8 z-40"
      >
        <RobotMascot />
      </motion.div>

      {/* Glacial Glow Effect Overlay */}
      <div className="pointer-events-none fixed inset-0 bg-gradient-to-b from-transparent to-[#A5D6F7] opacity-10" />
    </div>
  );
};

export default HomePage;
