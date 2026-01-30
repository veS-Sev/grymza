import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./app/styles/index.scss";
import App from "./app/App";
import { ThemeProvider } from "./app/providers/ThemeProvider/ThemeProvider";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
);
