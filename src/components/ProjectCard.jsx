import { useState, useRef } from "react";
import { motion } from "framer-motion";

export const ProjectCard = ({ project, isHovered, isDragging, idx, onCardClick }) => {
  const imageRef = useRef(null);
  const transition = { duration: 0.6, ease: [0.6, 0.01, -0.05, 0.9] };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (!isDragging && project.githubUrl) {
        window.open(project.githubUrl, "_blank");
      }
    }
  };

  return (
    <motion.div
      className="relative md:w-[260px] md:h-[350px] w-[210px] h-[260px] cursor-pointer"
      onClick={() => {
        if (!isDragging && project.githubUrl) {
          window.open(project.githubUrl, "_blank");
        }
      }}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={`View details for ${project.title}`}
      style={{
        borderRadius: "2.5rem",
        overflow: "hidden",
      }}
      animate={
        isHovered
          ? { borderRadius: "0rem" }
          : { borderRadius: "2.5rem" }
      }
      transition={{ type: "spring", stiffness: 300, damping: 35, mass: 8 }}
    >
      <motion.div
        ref={imageRef}
        className="absolute inset-0 bg-cover bg-center"
        animate={
          isHovered
            ? { scale: 1.03 }
            : { scale: 1.03 }
        }
        transition={{
          default: transition,
        }}
        style={{
          borderRadius: "inherit",
          backgroundImage: project.imageUrl ? `url(${project.imageUrl})` : "linear-gradient(135deg, #1e3a8a, #3b82f6)",
        }}
      />

      <motion.div
        className="relative z-10 flex items-center h-full pl-2 md:pl-2"
        animate={
          isHovered
            ? { y: -20 }
            : { y: 0 }
        }
        transition={{ type: "spring", stiffness: 300, damping: 25, mass: 0.5 }}
      >
        <motion.h2
          className="md:text-[30px] text-[24px] font-bold text-white font-kanit pointer-events-none drop-shadow-md text-center w-full px-4"
        >
          {project.title}
        </motion.h2>
        {project.iconUrl && (
          <img
            src={project.iconUrl}
            alt={`${project.title} icon`}
            className="md:ml-2 ml-1 md:h-[44px] md:w-[44px] h-[28px] w-[28px] pointer-events-none"
          />
        )}
      </motion.div>
    </motion.div>
  );
};
