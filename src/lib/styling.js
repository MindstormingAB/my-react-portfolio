import styled from "styled-components/macro";
import mobileBackground from "../assets/umbrellas-mobile.jpg";
import tabletBackground from "../assets/umbrellas-tablet.jpg";
import desktopBackground from "../assets/umbrellas-desktop.jpg";
import profilePicture from "../assets/sandrine-324.jpg";
import weatherImage from "../assets/weather-app-303.png";

// Global

export const StyledSection = styled.section`
  padding: 4rem 10%;
  display: flex;
  flex-direction: column;

  &:nth-child(odd) {
    background-color: ${p => p.theme.colorPrimary}
  }

  @media (min-width: ${p => p.theme.tabletSize}) {
    padding: 4rem 15%;
  }

  @media (min-width: ${p => p.theme.desktopSize}) {
    padding: 4rem 20%;
    align-items: center;
  }
`;

export const StyledTitle = styled.h2.attrs(() => ({
  tabIndex: 0 }))`
  background: ${p => p.theme.colorAccent};
  color: ${p => p.theme.colorTextAccent};
  padding: 3px 10px;
  text-transform: uppercase;
  width: max-content;
  align-self: center;
  margin: 0 0 2.25rem 0;
`;

export const StyledSubTitle = styled.h3.attrs(() => ({
  tabIndex: 0 }))`
  color: ${p => p.theme.colorAccent};
  /* color: ${p => p.theme.colorTextAccent}; */
  /* padding: 3px 10px; */
  text-transform: uppercase;
  /* width: fit-content; */
  align-self: center;
  margin: 3rem 0 1.25rem 0;
  font-size: 1.2rem;
`;

export const StyledText = styled.p`
  color: ${p => p.theme.colorTextPrimary};
  text-align: ${p => p.center ? "center" : ""};
`;

// App

export const StyledContainer = styled.main`
  flex: 1 0 auto;
  /* align-self: center;
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1024px; */
`;

// Header

export const StyledHeader = styled.header`
  padding: 6.5rem 10% 0 10%;
  background-image: url(${mobileBackground});
  background-color: ${p => p.theme.colorDarken};
  background-blend-mode: darken;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 31.75rem;
  width: 100vw;
  color: ${p => p.theme.colorTextAccent};

  @media (min-width: ${p => p.theme.tabletSize}) {
    padding: 3.25rem 15% 0 15%;
    background-image: url(${tabletBackground});
    min-height: 24.25rem;
  }

  @media (min-width: ${p => p.theme.desktopSize}) {
    padding: 3.25rem 20% 0 20%;
    background-image: url(${desktopBackground});
    min-height: 20.5rem;
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-bottom: 2rem;

  @media (min-width: ${p => p.theme.tabletSize}) {
    padding-bottom: 1.5rem;
  }

  a {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    border: ${p => `3px solid ${p.theme.colorTextAccent}`};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 0.3rem;
  }

  svg {
    width: 1rem;
    height: 1rem;
  }
`;

export const TextContainer = styled.div.attrs(() => ({
  tabIndex: 0
}))`
  font-family: ${p => p.theme.fontSecundary};
  width: 14.5rem;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.3rem;
`;

export const HeaderText = styled.h3`
  font-weight: ${p => p.bold ? "bold" : "normal"};
  text-transform: uppercase;
  font-size: 0.9rem;
`;

export const Profile = styled.div`
  background-image: url(${profilePicture});
  background-size: cover;
  border-radius: 50%;
  border: 3px solid #ffffff;
  position: absolute;
  width: 9.75rem;
  height: 9.75rem;
  top: 22.5rem;
  right: 10%;

  @media (min-width: ${p => p.theme.tabletSize}) {
    right: 15%;
    top: 15rem;
  }

  @media (min-width: ${p => p.theme.desktopSize}) {
    right: 20%;
    top: 11.5rem;
  }
`;

// About

export const SummaryLine = styled.span`
  width: 60px;
  height: 4px;
  border-radius: 10px;
  background: ${p => p.theme.colorAccent};
  display: inline-block;
  margin-bottom: 4px;

  @media (min-width: ${p => p.theme.tabletSize}) {
    width: 75px;
    margin-bottom: 6px;
  }

  @media (min-width: ${p => p.theme.desktopSize}) {
    width: 90px;
    margin-bottom: 8px;
  }
`;

export const SummaryDot = styled.span`
  width: 12px;
  height: 12px;
  background: ${p => p.theme.colorAccent};
  border-radius: 50%;
  display: inline-block;
  margin-left: -5px;
  margin-right: 5px;

  @media (min-width: ${p => p.theme.tabletSize}) {
    width: 16px;
    height: 16px;
    margin-left: -8px;
    margin-right: 8px;
  }

  @media (min-width: ${p => p.theme.desktopSize}) {
    width: 20px;
    height: 20px;
    margin-left: -10px;
    margin-right: 10px;
  }
`;

// Tech

export const Emphasized = styled.span`
  color: ${p => p.theme.colorAccent};
  font-weight: bold;
`;

// Projects

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${p => p.theme.desktopSize}) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    width: 35.3rem;
  }
`;

export const ProjectLink = styled.a`
  display: flex;
  flex-direction: column;
  width: 303px;

  @media (min-width: ${p => p.theme.tabletSize}) {
    width: 522px;
  }

  @media (min-width: ${p => p.theme.desktopSize}) {
    margin: 0 0.7rem;
  }
`;

export const ProjectThumbnail = styled.div`
  align-self: center;
  background-size: cover;
  background-color: ${p => p.theme.colorDarken};
  background-blend-mode: darken;
  height: 179px;
  width: 303px;
  position: relative;
  /* background-image: url(${weatherImage}); */
  /* background-image: url(${(p)=>p.imgUrl}); */
  /* background-image: ${(p)=>`url(${p.imgUrl}-303.png)`}; */
  background-image: ${p => `url(${process.env.PUBLIC_URL}/images/${p.imgUrl}-303.png)`};

  p {
    /* font-size: 16px; */
    font-weight: bold;
    text-transform: uppercase;
    color: ${p => p.theme.colorTextLight};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media (min-width: ${p => p.theme.tabletSize}) {
    align-self: auto;
    width: 522px;
    height: 309px;
    background-image: ${p => `url(${process.env.PUBLIC_URL}/images/${p.imgUrl}-522.png)`};
  }
`;

// Skills

export const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  font-family: ${p => p.theme.fontSecundary};

  @media (min-width: ${p => p.theme.tabletSize}) {
    display: grid;
    grid-template-columns: 13rem 13rem;
    justify-items: center;
  }

  @media (min-width: ${p => p.theme.desktopSize}) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const SkillBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 16rem;
  margin-bottom: 2rem;

  &:last-child {
    margin-bottom: 0;
  }

  @media (min-width: ${p => p.theme.tabletSize}) {
    &:last-child {
      grid-column: 1 / span 2;
    }
  }

  @media (min-width: ${p => p.theme.desktopSize}) {
    margin-bottom: 0;

    &:last-child {
      grid-column: 3 / span 1;
    }
  }
`;

export const StyledListTitle = styled.h3.attrs(() => ({
  tabIndex: 0
}))`
  color: ${p => p.theme.colorAccent};
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 1rem;
`;

export const StyledList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const ListItem = styled.li.attrs(() => ({
  tabIndex: 0
}))`
  line-height: 1.5rem;
`;

// More

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 2rem;

  a {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    border: ${p => `3px solid ${p.theme.colorAccent}`};
    display: flex;
    justify-content: center;
    align-items: center;
  }

  svg {
    fill: ${p => p.theme.colorAccent};
    width: 1.3rem;
    height: 1.3rem;
  }

  p {
    color: ${p => p.theme.colorAccent};
    font-weight: bold;
    text-transform: uppercase;
    margin-top: 1rem;
  }
`;

// Footer

export const StyledFooter = styled.footer`
  flex-shrink: 0;
  background: ${p => p.theme.colorFooter};
  color: ${p => p.theme.colorTextAccent};
  display: flex;
  flex-direction: column;
  padding: 4rem 0;
`;

export const StyledFooterTitle = styled.h1`
  margin: 0 0 1.5rem 0;
  font-size: 1.5rem;
  text-transform: uppercase;
  text-align: center;
`;

export const StyledFooterText = styled.p`
  font-family: ${p => p.theme.fontSecundary};
  font-size: ${p => p.attribution ? "0.75rem" : "inherit"};
  margin-top: ${p => p.attribution ? "1.5rem" : "inherit"};
  font-weight: ${p => p.bold ? "bold" : "normal"};
  text-align: center;
`;