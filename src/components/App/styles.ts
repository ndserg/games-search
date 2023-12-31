import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    height: 100%;
  }

  body,
  html {
    margin: 0;
  }

  body {
    position: relative;

    min-height: 100vh;

    color: ${(props) => props.theme.colorBlack_75};
    font-family: ${(props) => props.theme.fontFamily};
    font-weight: ${(props) => props.theme.fontWeightDefault};
    font-size: ${(props) => props.theme.fontSizeDefault};
    line-height: ${(props) => props.theme.lineHeightDefault};

    background-color: ${(props) => props.theme.colorWhite};
  }

  img {
    max-width: 100%;
    height: auto;
  }

  .visually-hidden {
    position: absolute;

    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;

    border: 0;

    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
  }
`;
