import React from "react";

import ProjectThumbnail from "./ProjectThumbnail";
import ProjectDescription from "./ProjectDescription";
import ProjectTags from "./ProjectTags";

import { ProjectLink } from "../../lib/styling";

const Project = ({ projectsData }) => {
  return (
    <>
      {projectsData.map(project => {
        return (
          <ProjectLink
            key={project.href}
            href={project.href}
            aria-labelledby={project.title}
            target="_blank"
            rel="noopener noreferrer"
            // href="https://smhi-killer.netlify.app/" // to be mapped
            // aria-labelledby="proj-title" // to be mapped
          >
            {project.featured &&
              <ProjectThumbnail
                title={project.title}
                images={project.image_urls}
              />
            }
            <ProjectDescription
              shortDescription={project.short_description}
              longDescription={project.long_description}
            />
            <ProjectTags tags={project.tags}/>
          </ProjectLink>
        )
      })}
    </>
  );
};

export default Project;