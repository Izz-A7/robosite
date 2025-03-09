import React from "react";
import { motion } from "framer-motion";
import { RocketIcon, HeartIcon, LeafIcon } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Revolutionizing Ice Cream Experience
          </h1>
          <p className="text-xl text-[#B0B0B0] max-w-3xl mx-auto">
            We combine cutting-edge robotics with delicious ice cream to create
            an unforgettable experience for families and ice cream lovers.
          </p>
        </motion.div>

        {/* Key Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-[#1A1A1A] p-6 rounded-lg shadow-lg"
          >
            <RocketIcon className="h-12 w-12 text-[#59D1C5] mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-white">
              Interactive Entertainment
            </h3>
            <p className="text-[#B0B0B0]">
              Watch our robots in action as they craft your perfect ice cream,
              creating an educational and fun experience for all ages.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-[#1A1A1A] p-6 rounded-lg shadow-lg"
          >
            <HeartIcon className="h-12 w-12 text-[#59D1C5] mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-white">
              Quality First
            </h3>
            <p className="text-[#B0B0B0]">
              Our advanced UV sterilization and one-click cleaning ensure the
              highest standards of hygiene and food safety.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-[#1A1A1A] p-6 rounded-lg shadow-lg"
          >
            <LeafIcon className="h-12 w-12 text-[#59D1C5] mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-white">
              Eco-Friendly
            </h3>
            <p className="text-[#B0B0B0]">
              We're committed to sustainability with biodegradable packaging and
              energy-efficient operations.
            </p>
          </motion.div>
        </div>

        {/* Specifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-[#1A1A1A] p-8 rounded-lg shadow-lg mb-16"
        >
          <h2 className="text-3xl font-bold mb-6 text-white">
            Compact & Efficient
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-white">
                Dimensions & Specifications
              </h3>
              <ul className="space-y-2 text-[#B0B0B0]">
                <li>Size: 203.5 × 80 × 127cm</li>
                <li>Weight: 185kg</li>
                <li>Capacity: 20-150 pieces</li>
                <li>Power: 500w-3000w</li>
                <li>Voltage: 220-240V, 50Hz/60Hz</li>
                <li>Floor Space: About 1 square meter</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-white">
                Features & Certifications
              </h3>
              <ul className="space-y-2 text-[#B0B0B0]">
                <li>22-inch Interactive Touch Screen</li>
                <li>Multiple Payment Options (Coin, Bill, Credit Card)</li>
                <li>CE and ISO9001 Certified</li>
                <li>Compressor Cooling System</li>
                <li>1 Year Warranty</li>
                <li>Online Technical Support</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Product Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="bg-[#1A1A1A] p-8 rounded-lg shadow-lg mb-16"
        >
          <h2 className="text-3xl font-bold mb-6 text-white">
            About RoboCream
          </h2>
          <p className="text-[#B0B0B0] mb-6">
            RoboCream is a multi-functional intelligent cabinet-type ice cream
            machine designed for shopping malls, restaurants, communities,
            scenic spots, playgrounds, KTV and other indoor locations. Our
            innovative system allows customers to order and pay through the
            touchscreen or by scanning a QR code, after which our robot prepares
            a delicious ice cream right before your eyes.
          </p>
          <p className="text-[#B0B0B0]">
            The robot picks up the cup, adds the ice cream base, sprinkles fruit
            toppings, pours jam, and delivers a freshly made treat in a
            mesmerizing process that's as entertaining as it is delicious.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
