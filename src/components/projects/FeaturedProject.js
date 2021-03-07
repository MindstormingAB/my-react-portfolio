import React from "react";

import { Arrows, Emphasized, ProjectDescription, ProjectLink, ProjectTag, ProjectThumbnail, TagsContainer } from "../../lib/styling";

const FeaturedProject = () => {
  return (
    <ProjectLink
      href="https://smhi-killer.netlify.app/" // to be mapped
      target="_blank"
      rel="noopener noreferrer"
      aria-labelledby="proj-title" // to be mapped
    >
      <ProjectThumbnail
        // imgUrl={process.env.PUBLIC_URL + './images/weather-app-303.png'}
        // imgUrl={process.env.PUBLIC_URL + './images/weather-app'}
        // imgUrl="weather-app"
      >
        {/* <img
          src={process.env.PUBLIC_URL + './images/weather-app-303.png'}
          alt="test"
        /> */}
        <img
          src={process.env.PUBLIC_URL + './images/weather-app-303.png'} // to be mapped
          srcSet={`${process.env.PUBLIC_URL + './images/weather-app-303.png'} 303w, ${process.env.PUBLIC_URL + './images/weather-app-522.png'} 522w`} // to be mapped
          alt="test" // to be mapped
        />
        <p id="proj-title">SMHI Killer</p>
      </ProjectThumbnail>
      <ProjectDescription
        aria-labelledby="proj-name"
        aria-describedby="proj-desc"
      >
        <Emphasized id="proj-name" uppercase>Weather App.</Emphasized>
        <span id="proj-desc">&nbsp;Web app build in Javascript using open weather API&nbsp;</span>
        <Arrows>&gt;&gt;</Arrows>
      </ProjectDescription>
      <TagsContainer aria-label="Techniques used in the project">
        <ProjectTag>HTML5</ProjectTag>
        <ProjectTag>CSS3</ProjectTag>
        <ProjectTag>Javascript ES6</ProjectTag>
        <ProjectTag>API</ProjectTag>
      </TagsContainer>
    </ProjectLink>
  );
};

export default FeaturedProject;