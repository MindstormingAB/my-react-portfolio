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
            rel="noopener noreferrer"
            aria-label="Link to Sandrine's Github account"
            >
            <GithubIcon />
          </a>
          <p>Github</p>
        </IconWrapper>
        <IconWrapper>
          <a
            href="https://www.linkedin.com/in/sandrine-elander-10498b4/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link to Sandrine's LinkedIn account"
          >
            <LinkedInIcon />
          </a>
          <p>LinkedIn</p>
        </IconWrapper>
      </IconContainer>
    </StyledSection>
  );
};

export default More;