import { StrictMode } from "react";
import ReactDOM from "react-dom";

import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./thems/default";
import App from "./components/app/app";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
  rootElement
);
