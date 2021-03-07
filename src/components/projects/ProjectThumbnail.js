import React from "react";

import { StyledThumbnail } from "../../lib/styling";

const ProjectThumbnail = ({ title, url }) => {
  return (
      <StyledThumbnail
        // imgUrl={process.env.PUBLIC_URL + "./images/weather-app-303.png"}
        // imgUrl={process.env.PUBLIC_URL + "./images/weather-app"}
        // imgUrl="weather-app"
      >
        {/* <img
          src={process.env.PUBLIC_URL + "./images/weather-app-303.png"}
          alt="test"
        /> */}
        {/* <img
          src={process.env.PUBLIC_URL + "./images/weather-app-303.png"} // to be mapped
          srcSet={`${process.env.PUBLIC_URL + "./images/weather-app-303.png"} 303w, ${process.env.PUBLIC_URL + "./images/weather-app-522.png"} 522w`} // to be mapped
          alt={title} // to be mapped
        /> */}
        <img
          src={process.env.PUBLIC_URL + "./images/" + url + "-303.png"}
          srcSet={`${process.env.PUBLIC_URL + "./images/" + url + "-303.png"} 303w, ${process.env.PUBLIC_URL + "./images/" + url + "-522.png"} 522w`}
          alt={title}
        />
        <p id={title}>{title}</p>
      </StyledThumbnail>
  );
};

export default ProjectThumbnail;