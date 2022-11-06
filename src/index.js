import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./styles.css";
import Popular from "./components/Popular";
import Battle from "./components/Battle";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Results from "./components/Results";
class App extends React.Component {
  constructor(prop) {
    super(prop);

    this.state = {
      theme: "light",
    };

    this.toggleTheme = this.toggleTheme.bind(this);
  }
  toggleTheme() {
    this.setState(({ theme }) => ({
      theme: theme === "light" ? "dark" : "light",
    }));
  }
  render() {
    return (
      <Router>
        <div className={this.state.theme}>
          <div className="container">
            <Navbar theme={this.state.theme} toggleTheme={this.toggleTheme} />
            <Routes>
              <Route path="/" element={<Popular />} />
              <Route path="/battle" element={<Battle />} />
              <Route path="/results" element={<Results />} />
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
}

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
