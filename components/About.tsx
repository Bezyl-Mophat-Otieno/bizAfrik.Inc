"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code2, Globe, Users } from "lucide-react";

const features = [
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Pan-African Reach",
    description: "Serving businesses across the African continent with local expertise and global standards."
  },
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "Tech Innovation",
    description: "Leveraging cutting-edge technology to solve uniquely African challenges."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Local Talent",
    description: "Empowering African tech talent to build solutions for African businesses."
  }
];

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="about" className="py-24 bg-secondary/50 section-scroll">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            About <span className="text-primary">BizAfric</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-foreground/80 max-w-2xl mx-auto"
          >
            We are a leading African technology firm dedicated to transforming businesses
            through innovative digital solutions. Our deep understanding of the African
            market sets us apart.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-background rounded-xl p-6 shadow-lg border border-primary/10 hover:border-primary/30 transition-colors"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-foreground/70">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}