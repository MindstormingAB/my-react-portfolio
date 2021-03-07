import React from "react";
import { StyledSection, StyledTitle, StyledSubTitle, ProjectsContainer } from "../lib/styling";
import Project from "./projects/Project";
// import OtherProject from "./projects/ProjectThumbnail";

const Projects = ({ projectsData }) => {
  const featuredProjects = projectsData.filter(item => item.featured);
  const otherProjects = projectsData.filter(item => !item.featured);
  console.log(featuredProjects);
  console.log(otherProjects);

  return (
    <StyledSection>
      <StyledTitle>Featured projects</StyledTitle>
      <ProjectsContainer>
        <Project projectsData={featuredProjects}/>
      </ProjectsContainer>
      <StyledSubTitle>Other projects</StyledSubTitle>
      <ProjectsContainer>
        <Project projectsData={otherProjects}/>
      </ProjectsContainer>
    </StyledSection>
  );
};

export default Projects;