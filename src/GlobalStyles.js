import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset};

  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Apple SD Gothic Neo", arial, 나눔고딕, "Nanum Gothic", 돋움, Dotum, Tahoma, Geneva, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #212529;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: inherit; 
  }

  * {
    box-sizing: inherit;
  }

  input, button, textarea {
    font-family: inherit;
  }

  html, body, #root {
    height: 100%;
    background-color: #F6F7FD;
    /* background: #343f53;  */
  }

  body.swal2-height-auto {
    height: 100%;
  }

  button, input[type=button] {
    outline: none;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.3), inset 0 0 2px rgba(255, 255, 255, 0.3),
			0 1px 2px rgba(0, 0, 0, 0.29);
  }

  input[type=text], input[type=email], input[type=number] {
    padding-left: 10px;
  }
  
  span.vertical-middle {
		display: table-cell;
		vertical-align: middle;
  }
`;

export default GlobalStyles;
