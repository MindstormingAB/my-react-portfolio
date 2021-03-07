import React from "react";

import { StyledSection, StyledText, SummaryDot, SummaryLine } from "../lib/styling";

const About = () => {
  return (
    <StyledSection>
      <StyledText>
        <SummaryLine />
        <SummaryDot />
        Hello! I am a frontend developer and senior IT project manager at Mindstorming AB. As a certified SCRUM Master I am all about improving my teams' work processes and efficiency and delivering on-time and on-budget. As a frontend developer, I benefit from my project manager experience, my solution-driven personality and my 7 years as CRM Manager at a marketing department.
      </StyledText>
    </StyledSection>
  );
};

export default About;