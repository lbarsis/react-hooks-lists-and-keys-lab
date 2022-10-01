import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  
  const userProjects = projects.map(project => {
    return <ProjectItem key={project.id} about={project.about} name={project.name} technologies={project.technologies} />
  })

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{userProjects}</div>
    </div>
  );
}

export default ProjectList;
