import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  html, body, #root {
    width: 100vw;
    height: 100vh;
    min-height: 100%;
  }

  body {
    background: #7159c1;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  body, input, button {
    color: #222;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
