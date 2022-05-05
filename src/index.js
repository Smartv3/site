// import React from "react";
// import ReactDOM from "react-dom";
// import { HashRouter as Router } from "react-router-dom";
// import App from "./App";
// import CursorContextProvider from "./helper/CursorContextProvider";
// import reportWebVitals from './reportWebVitals';

// Before
// Build 25
// import "./i18n";
// ReactDOM.render(
//   <React.StrictMode>
//     <Router>
//       <CursorContextProvider>
//         <App />
//       </CursorContextProvider>
//     </Router>
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// After
// Build 8
import React from "react";
import { HashRouter as Router } from "react-router-dom";
import App from "./App";
import CursorContextProvider from "./helper/CursorContextProvider";
import { createRoot } from "react-dom/client";
import "./i18n";
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
