"use client";
import React from 'react'
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Calendar, Link as LinkIcon, Play, Pause } from "lucide-react";

// Sample project data - replace with actual projects
const projects = [
  {
    id: 1,
    title: "M-Pesa Integration Platform",
    description: "We did support Product Trace Limited with a M-Pesa integration platform. This platform was developed using the M-Pesa API and integrated with the M-Pesa mobile app. The platform provided a seamless experience for users to manage their M-Pesa accounts, track their transactions, and receive notifications for their account balance.",
    date: "December 2023",
    videoUrl: "https://youtu.be/1y7bv8FN5Wo?si=xr-za3mkuLBappEx",
    thumbnail: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=400",
    projectUrl: "https://www.product-traceltd.com/",
  },
  {
    id: 2,
    title: "AgriTech Management System",
    description: "IoT-based agricultural monitoring system deployed across 500+ farms in Western Africa.",
    date: "October 2023",
    videoUrl: "https://youtu.be/C-wowZSZIgM?si=XJHw0sslfYAM1CYI",
    thumbnail: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&q=80&w=400",
    projectUrl: "https://project2.example.com",
  },
    {
    id: 3,
    title: "Computer Clinic 254",
    description: "Computer Clinic 254 is a computer repair and maintenance company that provides services to individuals and businesses in Western Africa. The company has a team of highly skilled technicians who are dedicated to providing high-quality repairs and maintenance services to its clients. The company has a strong focus on customer satisfaction and has won several awards for its services.",
    date: "October 2024",
    videoUrl: "https://youtu.be/C-wowZSZIgM?si=XJHw0sslfYAM1CYI",
    thumbnail: "https://img.freepik.com/free-photo/people-repairing-computer-chips_23-2150880951.jpg?t=st=1732077038~exp=1732080638~hmac=46447cf3f721f757473255d6bd1deb54f295bf50bbcadf7c1519b6a7bbb783ac&w=826",
    projectUrl: "computer-clinic254.vercel.app",
  },
    {
    id: 4,
    title: "Rico Technologies Limited",
    description: "Rico Technologies is an Ecommerce Company specialized in selling electronics and gadgets. The company has a wide range of products, including smartphones, laptops, and other electronic devices. Rico Technologies has a strong focus on customer satisfaction and has won several awards for its services.",
    date: "September 2024",
    videoUrl: "https://youtu.be/C-wowZSZIgM?si=XJHw0sslfYAM1CYI",
    thumbnail: "https://img.freepik.com/free-photo/industrial-designers-working-3d-model_23-2149370123.jpg?t=st=1732077103~exp=1732080703~hmac=162cef3f7e99ef0aec04bb6f559dc2f2ac8c24b70ce7d4de731978e5c4b65c3a&w=826",
    projectUrl: "rico-technologies-ltd.vercel.app",
  },
  {
    id: 5,
    title: "EduTech Learning Platform",
    description: "Mobile-first educational platform serving 200K+ students across African universities.",
    date: "September 2023",
    videoUrl: "https://youtu.be/U9tR3ytxL-o?si=AI0aRCwWYN4SKbvo",
    thumbnail: "https://images.unsplash.com/photo-1610484826967-09c5720778c7?auto=format&fit=crop&q=80&w=400",
    projectUrl: "https://teach2give.com/",
  },
];

interface ProjectCardProps {
  project: typeof projects[0];
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-background rounded-xl overflow-hidden shadow-lg border border-primary/10 hover:border-primary/30 transition-all"
    >
      <div className="relative group">
        {/* Video/Thumbnail Container */}
        <div className="aspect-video relative overflow-hidden bg-black">
          <video
            ref={videoRef}
            poster={project.thumbnail}
            className="w-full h-full object-cover"
            onEnded={() => setIsPlaying(false)}
          >
            <source src={project.videoUrl} type="video/mp4" />
          </video>
          
          {/* Play/Pause Overlay */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={togglePlay}
            className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center">
              {isPlaying ? (
                <Pause className="w-8 h-8 text-white" />
              ) : (
                <Play className="w-8 h-8 text-white" />
              )}
            </div>
          </motion.button>
        </div>

        {/* Project Details */}
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          <div className="flex items-center text-sm text-foreground/60 mb-3">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{project.date}</span>
          </div>
          <p className="text-foreground/80 mb-4">{project.description}</p>
          <a
            href={project.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
          >
            <LinkIcon className="w-4 h-4 mr-2" />
            View Project
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default function Portfolio() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="portfolio" className="py-24 bg-secondary/50 section-scroll">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-primary">Portfolio</span>
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Explore our successful projects that have transformed businesses across Africa.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}