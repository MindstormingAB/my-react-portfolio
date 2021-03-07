import React from "react";

import { ProjectLink, ProjectThumbnail } from "../../lib/styling";

const FeaturedProject = () => {
  return (
    <ProjectLink
      href="https://smhi-killer.netlify.app/"
      target="_blank"
      rel="noopener noreferrer"
      aria-labelledby="weather-app"
    >
      <ProjectThumbnail
        // imgUrl={process.env.PUBLIC_URL + './images/weather-app-303.png'}
        // imgUrl={process.env.PUBLIC_URL + './images/weather-app'}
        imgUrl="weather-app"
      >
        <p id="weather-app">SMHI Killer</p>
      </ProjectThumbnail>
    </ProjectLink>
  );
};

export default FeaturedProject;