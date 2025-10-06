import React from "react";
import Carousel from "../layout/Carousel";
// import projectImg from "@/public/assets/projects.png";

const Projects = () => {
  return (
    <div className="auto-card bg-foreground text-background md:p-9 p-5">
      <h1 className="text-3xl font-medium">Project</h1>
      <div className="flex justify-center">
        <Carousel
        />
      </div>
    </div>
  );
};

export default Projects;
