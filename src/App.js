import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { dark } from "./styles/Themes";

import Navigation from "../src/routes";

function App() {

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={dark}>
        <Navigation />
      </ThemeProvider>
    </>
  );
}

export default App;
