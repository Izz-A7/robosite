import React from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const LocationsPage = () => {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white pt-24 pb-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-2xl mx-auto py-16"
        >
          <MapPin className="h-16 w-16 text-[#59D1C5] mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Locations Coming Soon
          </h1>
          <p className="text-xl text-[#B0B0B0]">
            We're working hard to bring our innovative ice cream experience to
            locations near you. Stay tuned for updates on our upcoming
            locations!
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default LocationsPage;
