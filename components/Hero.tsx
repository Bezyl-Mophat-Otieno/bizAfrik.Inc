"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-scroll">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-primary">Innovative Solutions</span>
              <br />
              for the African Economy
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-8">
              Empowering businesses across Africa with cutting-edge technology solutions
              that drive growth and innovation.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium shadow-lg hover:bg-primary/90 transition-colors"
            >
              Get Started
              <ArrowRight className="ml-2" size={20} />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="w-full h-[400px] bg-gradient-to-br from-primary/20 to-primary/40 rounded-2xl overflow-hidden relative">
              <motion.div
                animate={{
                  background: [
                    "linear-gradient(0deg, rgba(255,125,0,0.2) 0%, rgba(255,125,0,0) 100%)",
                    "linear-gradient(180deg, rgba(255,125,0,0.2) 0%, rgba(255,125,0,0) 100%)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                className="absolute inset-0"
              />
              
              {/* African Tech Vector Illustration */}
              <svg
                viewBox="0 0 500 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 w-full h-full p-8"
              >
                {/* African Continent Outline */}
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  d="M200,50 C240,45 280,55 300,80 C320,105 350,110 370,130 C390,150 400,180 390,210 C380,240 375,270 350,290 C325,310 300,320 270,315 C240,310 220,300 200,280 C180,260 150,250 130,230 C110,210 100,180 110,150 C120,120 140,100 160,80 C180,60 160,55 200,50"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-primary"
                  fill="none"
                />

                {/* Tech Elements */}
                <motion.g
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5, duration: 1 }}
                >
                  {/* Circuit Lines */}
                  <path
                    d="M150,150 L250,150 M200,100 L200,200 M300,200 L350,200"
                    stroke="currentColor"
                    strokeWidth="1"
                    className="text-primary/60"
                  />
                  
                  {/* Connection Nodes */}
                  <circle cx="150" cy="150" r="4" className="fill-primary" />
                  <circle cx="250" cy="150" r="4" className="fill-primary" />
                  <circle cx="200" cy="100" r="4" className="fill-primary" />
                  <circle cx="200" cy="200" r="4" className="fill-primary" />
                  <circle cx="300" cy="200" r="4" className="fill-primary" />
                </motion.g>

                {/* Animated Pulse Elements */}
                <motion.circle
                  cx="200"
                  cy="150"
                  r="8"
                  className="fill-primary/20"
                  initial={{ scale: 0 }}
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </svg>

              {/* Decorative Elements */}
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-background/10 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}