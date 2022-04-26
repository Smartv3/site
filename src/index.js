import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import ErrorBoundary from "./helper/ErrorBoundary";
// import reportWebVitals from './reportWebVitals';

// Before
// Build 9
import "./i18n";
ReactDOM.render(
  <React.StrictMode>
    <Router>
      {/* <ErrorBoundary> */}
        <App />
      {/* </ErrorBoundary> */}
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// After
// Build 8
// import React from "react";
// import { BrowserRouter } from "react-router-dom";
// import App from "./App";
// import { createRoot } from "react-dom/client";
// const container = document.getElementById("root");
// const root = createRoot(container); // createRoot(container!) if you use TypeScript
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>
// );
