import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: "Interop";
  src: url("https://raw.githubusercontent.com/payw-org/Interop/main/web/fonts/Interop-Regular.woff2")
      format("woff2"),
    url("https://raw.githubusercontent.com/payw-org/Interop/main/web/fonts/Interop-Regular.woff")
      format("woff");
  font-weight: normal;
  font-style: normal;
  font-display: block;
}

* {
  box-sizing: border-box;
  margin: 0;
  font-family: "Interop";
}
`;

export default GlobalStyle;
