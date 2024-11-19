"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Calendar, Link as LinkIcon, Play, Pause, Eye } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  date: string;
  videoUrl: string;
  thumbnail: string;
  projectUrl: string;
  views: string;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

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
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="bg-background rounded-xl overflow-hidden shadow-lg border border-primary/10 hover:border-primary/30 transition-all"
    >
      {/* Thumbnail/Video Container */}
      <div className="relative group aspect-video">
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
          <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center">
            {isPlaying ? (
              <Pause className="w-6 h-6 text-white" />
            ) : (
              <Play className="w-6 h-6 text-white" />
            )}
          </div>
        </motion.button>
      </div>

      {/* Project Details */}
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 line-clamp-2">{project.title}</h3>
        
        <div className="flex items-center text-sm text-foreground/60 mb-2 space-x-4">
          <div className="flex items-center">
            <Eye className="w-4 h-4 mr-1" />
            <span>{project.views}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            <span>{project.date}</span>
          </div>
        </div>
        
        <p className="text-foreground/80 text-sm mb-3 line-clamp-2">
          {project.description}
        </p>
        
        <a
          href={project.projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors"
        >
          <LinkIcon className="w-4 h-4 mr-1" />
          View Project
        </a>
      </div>
    </motion.div>
  );
}