import React from "react";

import { StyledSection, IconWrapper, StyledTitle, IconContainer } from "../lib/styling";
import { ReactComponent as GithubIcon } from "../assets/github.svg";
import { ReactComponent as LinkedInIcon } from "../assets/linkedin.svg";

const More = () => {
  return (
    <StyledSection>
      <StyledTitle>For more</StyledTitle>
      <IconContainer>
        <IconWrapper>
          <a
            href="https://github.com/MindstormingAB/"
            target="_blank"
            rel="noopener noreferrer">
            <GithubIcon />
          </a>
          <p>Github</p>
        </IconWrapper>
        <IconWrapper>
          <a
            href="https://github.com/MindstormingAB/"
            target="_blank"
            rel="noopener noreferrer">
            <LinkedInIcon />
          </a>
          <p>LinkedIn</p>
        </IconWrapper>
      </IconContainer>
    </StyledSection>
  );
};

export default More;