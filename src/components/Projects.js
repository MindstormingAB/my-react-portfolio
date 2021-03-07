import React from "react";
import { StyledSection, StyledTitle, StyledSubTitle, ProjectsContainer } from "../lib/styling";
import FeaturedProject from "./projects/FeaturedProject";
import OtherProject from "./projects/OtherProject";

const Projects = () => {
  return (
    <StyledSection>
      <StyledTitle>Featured projects</StyledTitle>
      <ProjectsContainer>
        <FeaturedProject />
      </ProjectsContainer>
      <StyledSubTitle>Other projects</StyledSubTitle>
      <ProjectsContainer>
        <OtherProject />
      </ProjectsContainer>
    </StyledSection>
  );
};

export default Projects;