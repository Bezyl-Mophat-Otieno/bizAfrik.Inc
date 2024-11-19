"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  Smartphone, 
  Cloud, 
  Database,
  LineChart,
  Cpu,
  Globe
} from "lucide-react";

const services = [
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Web and System Development",
    description: "  Web and System development to streamline your business operations."
  },
  {
    icon: <Cloud className="w-8 h-8" />,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure optimized for African business needs."
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Mobile App Development",
    description: "Mobile app development tailored to solve African business challenges."
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Data Analytics",
    description: "Insights-driven solutions for better business decisions."
  },
  {
    icon: <LineChart className="w-8 h-8" />,
    title: "Digital Transformation",
    description: "End-to-end digital transformation strategies and implementation."
  },
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "AI Solutions",
    description: "AI-powered solutions adapted for African business contexts."
  }
];

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="services" className="py-24 section-scroll">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-primary">Services</span>
            </h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              Comprehensive technology solutions designed to empower African businesses
              and drive digital transformation across the continent.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-background rounded-xl p-8 shadow-lg border border-primary/10 hover:border-primary/30 transition-all"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-foreground/70">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}