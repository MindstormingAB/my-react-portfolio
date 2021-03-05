import React from "react";

import { StyledFooter, StyledFooterText, StyledFooterTitle } from "../lib/styling";

const Footer = () => {
  return (
    <StyledFooter>
      <StyledFooterTitle tabIndex="0">Contact</StyledFooterTitle>
      <StyledFooterText bold tabIndex="0">Sandrine Elander</StyledFooterText>
      <StyledFooterText>
        <a href="tel:+46705760449">+46 70 576 04 49</a>
      </StyledFooterText>
      <StyledFooterText>
        <a href="mailto:s.elander@mindstorming.se">s.elander@mindstorming.se</a>
      </StyledFooterText>
      <StyledFooterText attribution tabIndex="0">
        Photos by&nbsp;
        <a
          href="https://unsplash.com/@danielmingookkim?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
          target="_blank"
          rel="noopener noreferrer"
        >
          Daniel Mingook Kim
        </a>
        &nbsp;on&nbsp; 
        <a 
          href="https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
          target="_blank"
          rel="noopener noreferrer"
        >
          Unsplash
        </a>
      </StyledFooterText>
    </StyledFooter>
  );
};

export default Footer;