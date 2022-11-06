import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Battle from "../src/components/Battle";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
import "./styles.css";
root.render(
  <Router>
    <StrictMode>
      {/* <App /> */}
      <div className="light">
        <div className="container">
          {/* <Battle /> */}
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/battle" element={<Battle />} />
          </Routes>
        </div>
      </div>
    </StrictMode>
  </Router>
);
