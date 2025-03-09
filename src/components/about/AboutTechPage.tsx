import React from "react";
import { motion } from "framer-motion";
import {
  RocketIcon,
  HeartIcon,
  LeafIcon,
  Cog,
  Shield,
  Zap,
  Monitor,
} from "lucide-react";

const AboutTechPage = () => {
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
            About RoboCream Technology
          </h1>
          <p className="text-xl text-[#B0B0B0] max-w-3xl mx-auto">
            We combine cutting-edge robotics with delicious ice cream to create
            an unforgettable experience for families and ice cream lovers.
          </p>
        </motion.div>

        {/* Product Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-[#1A1A1A] p-8 rounded-lg shadow-lg mb-16"
        >
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-white">
                About RoboCream
              </h2>
              <p className="text-[#B0B0B0] mb-6">
                RoboCream is a multi-functional intelligent cabinet-type ice
                cream machine designed for shopping malls, restaurants,
                communities, scenic spots, playgrounds, KTV and other indoor
                locations. Our innovative system allows customers to order and
                pay through the touchscreen or by scanning a QR code, after
                which our robot prepares a delicious ice cream right before your
                eyes.
              </p>
              <p className="text-[#B0B0B0]">
                The robot picks up the cup, adds the ice cream base, sprinkles
                fruit toppings, pours jam, and delivers a freshly made treat in
                a mesmerizing process that's as entertaining as it is delicious.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img
                src="/robocream-machine.png"
                alt="RoboCream Machine"
                className="max-w-full h-auto max-h-[300px] w-auto object-contain rounded-lg shadow-lg"
              />
            </div>
          </div>
        </motion.div>

        {/* Key Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
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
            transition={{ delay: 0.5 }}
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

        {/* Key Technologies */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-[#1A1A1A] p-6 rounded-lg shadow-lg"
          >
            <Cog className="h-12 w-12 text-[#59D1C5] mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-white">
              Automated Production
            </h3>
            <p className="text-[#B0B0B0]">
              Fully automated system that prepares fresh, customizable ice cream
              with precise portion control and consistent quality.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-[#1A1A1A] p-6 rounded-lg shadow-lg"
          >
            <Shield className="h-12 w-12 text-[#59D1C5] mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-white">
              Advanced Hygiene
            </h3>
            <p className="text-[#B0B0B0]">
              UV sterilization system and automated cleaning process ensure the
              highest standards of food safety and hygiene.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-[#1A1A1A] p-6 rounded-lg shadow-lg"
          >
            <Monitor className="h-12 w-12 text-[#59D1C5] mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-white">
              Interactive Interface
            </h3>
            <p className="text-[#B0B0B0]">
              22-inch touch screen provides an intuitive ordering experience
              with real-time customization options.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="bg-[#1A1A1A] p-6 rounded-lg shadow-lg"
          >
            <Zap className="h-12 w-12 text-[#59D1C5] mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-white">
              Smart Operations
            </h3>
            <p className="text-[#B0B0B0]">
              Intelligent system monitoring and predictive maintenance ensure
              optimal performance and minimal downtime.
            </p>
          </motion.div>
        </div>

        {/* Process Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="bg-[#1A1A1A] p-8 rounded-lg shadow-lg mb-16"
        >
          <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-white">
                How It Works
              </h2>
              <p className="text-[#B0B0B0] mb-4">
                Our robotic ice cream system combines precision engineering with
                a delightful user experience. Watch as our robot prepares your
                custom ice cream creation right before your eyes!
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img
                src="/robocream-process.png"
                alt="RoboCream Process"
                className="max-w-full h-auto max-h-[250px] w-auto object-contain rounded-lg shadow-lg"
              />
            </div>
          </div>
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-[#59D1C5]/20 rounded-full p-3">
                <span className="text-[#59D1C5] font-bold">1</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  Order & Payment
                </h3>
                <p className="text-[#B0B0B0]">
                  Customers order and pay through our 22-inch touch screen or by
                  scanning a QR code, selecting from various flavor
                  combinations.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-[#59D1C5]/20 rounded-full p-3">
                <span className="text-[#59D1C5] font-bold">2</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  Robotic Preparation
                </h3>
                <p className="text-[#B0B0B0]">
                  The robot picks up a cup, adds the ice cream base, and
                  prepares your custom creation with precision and care.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-[#59D1C5]/20 rounded-full p-3">
                <span className="text-[#59D1C5] font-bold">3</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  Adding Toppings
                </h3>
                <p className="text-[#B0B0B0]">
                  The system adds your choice of fruit pieces and pours
                  delicious jam toppings to create a perfect combination of
                  flavors.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-[#59D1C5]/20 rounded-full p-3">
                <span className="text-[#59D1C5] font-bold">4</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  Delivery
                </h3>
                <p className="text-[#B0B0B0]">
                  Your freshly prepared ice cream is delivered to you in as
                  little as 30 seconds, ready to enjoy!
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Technical Specifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="bg-[#1A1A1A] p-8 rounded-lg shadow-lg mb-16"
        >
          <h2 className="text-3xl font-bold mb-6 text-white">
            Technical Specifications
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-white">
                Machine Specifications
              </h3>
              <ul className="space-y-2 text-[#B0B0B0]">
                <li>Size: 203.5 × 80 × 127cm</li>
                <li>Weight: 185kg (Machine), 385kg (Packed)</li>
                <li>Rated Power: 3.0kW</li>
                <li>Rated Voltage: AC220V 50HZ</li>
                <li>Rated Current: 14A</li>
                <li>Production Speed: As fast as 30 seconds per serving</li>
                <li>Operating Environment: 50°F - 100.4°F, &lt;80%RH</li>
                <li>Storage Environment: 41°F - 86°F, &lt;80%RH</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-white">
                Features & Capabilities
              </h3>
              <ul className="space-y-2 text-[#B0B0B0]">
                <li>1 kind of milk syrup base</li>
                <li>2 kinds of fruit pieces as toppings</li>
                <li>3 kinds of jam for flavor combinations</li>
                <li>Capacity: 20-150 pieces</li>
                <li>Approximately 45 servings per filling</li>
                <li>22-inch touch screen interface</li>
                <li>Multiple payment options (Coin, Bill, Credit Card)</li>
                <li>Children's viewing window for full process visibility</li>
                <li>CE and ISO9001 certified</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutTechPage;
