import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import SSRProvider from "react-bootstrap/SSRProvider";

// import "./reset.css";

import "./styles/reset.css";
import "./styles/variables.css";
import "./styles/fonts.css";
import "./styles/defaults.css";
import "./styles/helpers.css";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <SSRProvider>
      <App />
    </SSRProvider>
  </BrowserRouter>
);
