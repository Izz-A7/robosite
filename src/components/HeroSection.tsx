import React from "react";
import VideoBackground from "./VideoBackground";
import HeroContent from "./HeroContent";
import NavigationBar from "./NavigationBar";
import { motion } from "framer-motion";

interface HeroSectionProps {
  videoUrl?: string;
  title?: string;
  subtitle?: string;
  ctaButtons?: Array<{
    label: string;
    href: string;
    variant: "primary" | "secondary";
    icon?: React.ReactNode;
  }>;
}

const HeroSection = ({
  videoUrl,
  title,
  subtitle,
  ctaButtons,
}: HeroSectionProps) => {
  return (
    <section className="relative h-screen w-full bg-[#0D0D0D] overflow-hidden">
      {/* Main Content Container with 70/30 Split */}
      <div className="relative h-full w-full flex flex-col md:flex-row pt-20">
        {/* Video Section (70%) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative w-full md:w-[50%] h-full"
        >
          <VideoBackground />
        </motion.div>

        {/* Content Section (30%) */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative w-full md:w-[50%] h-full bg-[#0D0D0D] flex items-center justify-center"
        >
          <HeroContent />
        </motion.div>
      </div>

      {/* Particle Effect using CSS */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#E3F2FD]/10 to-transparent animate-pulse" />
      </div>

      {/* Robot Mascot - Positioned absolutely */}
      {/* Removed bottom right robot mascot */}

      {/* Hover Glow Effect Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-transparent to-[#A5D6F7] opacity-10" />
    </section>
  );
};

export default HeroSection;
