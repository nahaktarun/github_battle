import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import Battle from "../src/components/Battle";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
import "./styles.css";
root.render(
  <StrictMode>
    {/* <App /> */}
    <div className="light">
      <div className="container">
        <Battle />
      </div>
    </div>
  </StrictMode>
);
