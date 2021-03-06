import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    margin: 0;
    padding: 0;
    height: 100%;
    /* font-family: "Montserrat", Verdana, Geneva, Tahoma, sans-serif; */
    font-family: ${p => p.theme.fontPrimary};
    font-size: 16px;
    color: ${p => p.theme.colorTextPrimary};

    @media (min-width: ${p => p.theme.tabletSize}) {
      font-size: 24px;
    }

    @media (min-width: ${p => p.theme.desktopSize}) {
      font-size: 32px;
    }
  }

  #root {
    display: flex;
    flex-direction: column;
  }

  h1,
  h2,
  h3,
  p {
    margin: 0;
    /* font-family: "Roboto", Arial, Helvetica, sans-serif; */
    /* letter-spacing: 1px; */
    /* text-transform: uppercase; */
    /* font-weight: 400; */
  }

  h1 {
    font-size: 2.5rem;
    font-weight: bold;
    /* margin: 1rem 0 0 0; */
  }

  h2 {
    font-size: 1.5rem;
    font-weight: bold;
  }

  h3 {
    font-size: 1rem;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyles;