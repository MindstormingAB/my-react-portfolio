import React from "react";
import { HeaderText, LinkContainer, Profile, StyledHeader, TextContainer } from "../lib/styling";
import { ReactComponent as GithubIcon } from "../assets/github.svg";
import { ReactComponent as LinkedInIcon } from "../assets/linkedin.svg";


const Header = () => {
  return (
    <StyledHeader>
      <LinkContainer>
        <a
          href="https://github.com/MindstormingAB/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Link to Sandrine's Github account"
        >
          <GithubIcon />
        </a>
        <a
          aria-label="Link to Sandrine's LinkedIn account"
          href="https://www.linkedin.com/in/sandrine-elander-10498b4/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon />
        </a>
      </LinkContainer>
      <TextContainer>
        <HeaderText>Portfolio:</HeaderText>
        <HeaderText bold>Sandrine Elander</HeaderText>
      </TextContainer>
      <h1>frontend</h1>
      <h1>developer</h1>
      <h2>+ project manager</h2>
      <Profile />
    </StyledHeader>
  );
};

export default Header;