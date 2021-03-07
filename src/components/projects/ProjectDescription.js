import React from "react";

import { Arrows, Emphasized, StyledDescription } from "../../lib/styling";

const ProjectDescription = ({ shortDescription, longDescription }) => {
  return (
    <StyledDescription
      aria-labelledby={shortDescription}
      aria-describedby={longDescription}
    >
      <Emphasized id={shortDescription} uppercase>{shortDescription}</Emphasized>
      <span id={longDescription}>&nbsp;{longDescription}&nbsp;</span>
      <Arrows>&gt;&gt;</Arrows>
    </StyledDescription>
);
};

export default ProjectDescription;