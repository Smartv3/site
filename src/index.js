import React from "react";
import { HashRouter as Router } from "react-router-dom";
import App from "./App";
import CursorContextProvider from "./helper/CursorContextProvider";
// import reportWebVitals from './reportWebVitals';
import { createRoot } from "react-dom/client";
import "./i18n";

// After
// Build 32

const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <React.StrictMode>
    <Router>
      <CursorContextProvider>
        <App />
      </CursorContextProvider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
