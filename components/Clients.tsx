"use client";

import { motion, useMotionValue, animate } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Building2, Users2, Globe2, Award } from "lucide-react";
import { useEffect, useState } from "react";

const stats = [
  {
    icon: <Building2 className="w-8 h-8" />,
    value: "200+",
    label: "Clients Served",
    duration: 2
  },
  {
    icon: <Users2 className="w-8 h-8" />,
    value: "50+",
    label: "Team Members",
    duration: 1.5
  },
  {
    icon: <Globe2 className="w-8 h-8" />,
    value: "15+",
    label: "African Countries",
    duration: 1.8
  },
  {
    icon: <Award className="w-8 h-8" />,
    value: "25+",
    label: "Awards Won",
    duration: 1.6
  }
];

const CountingNumber = ({ value, duration }: { value: string; duration: number }) => {
  const numericValue = parseInt(value);
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  useEffect(() => {
    if (inView) {
      const controls = animate(0, numericValue, {
        duration,
        onUpdate: (latest) => setCount(Math.round(latest)),
      });

      return controls.stop;
    }
  }, [inView, numericValue, duration]);

  return (
    <motion.span
      ref={ref}
      className="text-4xl md:text-5xl font-bold text-primary"
    >
      {count}
      {value.includes("+") && "+"}
    </motion.span>
  );
};

export default function Clients() {
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
    <section id="clients" className="py-24 bg-secondary/50 section-scroll">
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
            Our <span className="text-primary">Impact</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-foreground/80 max-w-2xl mx-auto"
          >
            Making a difference across Africa through innovative technology solutions
            and dedicated service.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-background rounded-xl p-6 shadow-lg border border-primary/10 hover:border-primary/30 transition-colors text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                {stat.icon}
              </div>
              <CountingNumber value={stat.value} duration={stat.duration} />
              <p className="text-foreground/70 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}