import styled from "styled-components/macro";

// Global

export const StyledSection = styled.section`
  padding: 0 10%;
  display: flex;
  flex-direction: column;

  &:nth-child(odd) {
    background-color: ${p => p.theme.colorPrimary}
  }

  @media (min-width: ${p => p.theme.tabletSize}) {
    padding: 0 15%;
  }

  @media (min-width: ${p => p.theme.desktopSize}) {
    padding: 0 20%;
    align-items: center;
  }
`;

export const StyledTitle = styled.h2`
  background: ${p => p.theme.colorAccent};
  color: ${p => p.theme.colorTextAccent};
  padding: 3px 10px;
  /* font-family: Montserrat, Verdana, Geneva, Tahoma, sans-serif; */
  /* font-size: 22px; */
  text-transform: uppercase;
  width: fit-content;
  align-self: center;
  margin: 3.8rem 0 2.25rem 0;
`;

export const StyledText = styled.p`
  color: ${p => p.theme.colorTextPrimary};
  padding: ${p => p.noPaddingBottom ? "0 0 3.75rem 0" : "3.75rem 0"};
  text-align: ${p => p.center ? "center" : ""};
  /* padding: 58px 0; // 3.625 */

  /* @media (min-width: ${p => p.theme.tabletSize}) {
    padding: 91px 0; // 3.8
  }

  @media (min-width: ${p => p.theme.desktopSize}) {
    padding: 124px 0; // 3.875
  } */
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

// Footer

export const StyledFooter = styled.footer`
  flex-shrink: 0;
  background: ${p => p.theme.colorFooter};
  color: ${p => p.theme.colorTextAccent};
  display: flex;
  flex-direction: column;
  padding: 4rem 0;
  /* justify-self: center;
  width: 100%;
  padding: 1rem;
  text-align: center;
  font-size: 0.65rem;
  max-width: 1024px;
  align-self: center; */
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

  a {
    text-decoration: none;
    color: inherit;
  }
`;