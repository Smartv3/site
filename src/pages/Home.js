import React, { useRef, useState, useEffect } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { AnimatePresence } from "framer-motion";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { motion } from "framer-motion";

import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/GlobalStyles";
import { dark } from "../styles/Themes";

import Menu from "../components/Menu";
import HomeHeader from "../sections/Home";
import CoverVideo from "../components/CoverVideo";
import AboutUsOne from "../sections/AboutUsOne";
import AboutUs from "../sections/AboutUs";
import Career from "../sections/Career";
import PlayStore from "../sections/PlayStore";
import Footer from "../components/Footer";
import ScrollTriggerProxy from "../components/ScrollTriggerProxy";
import Loader from "../components/Loader";
import Mouse from "../components/Mouse";
import Loading from "../components/Loading";

function Home() {
  const [menuState, setMenuState] = useState(false);
  const containerRef = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const [test, setTest] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 2000);
    setTimeout(() => {
      setTest(true);
    }, 2500);
  }, []);
  
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={dark}>
        <LocomotiveScrollProvider
          options={{
            smooth: true,
            // ... all available Locomotive Scroll instance options
            smartphone: {
              breakpoint: 0,
              smooth: true,
            },
            tablet: {
              breakpoint: 0,
              smooth: true,
            },
          }}
          watch={
            [
              //..all the dependencies you want to watch to update the scroll.
              //  Basicaly, you would want to watch page/location changes
              //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
            ]
          }
          containerRef={containerRef}
        >
          <AnimatePresence>{loaded ? null : <Loader />}</AnimatePresence>
          <CoverVideo setMenuState={setMenuState} menu={menuState}/>
          <ScrollTriggerProxy />
          <Menu setMenuState={setMenuState} menu={menuState} />
          <Mouse />
          <AnimatePresence>
            <main className="one" ref={containerRef}>
              <HomeHeader test={test} />
              <AboutUsOne />
              <AboutUs />
              <Career />
              <PlayStore />
              <Footer />
            </main>
          </AnimatePresence>
        </LocomotiveScrollProvider>
      </ThemeProvider>
    </>
  );

  // return <Loading/>
}

export default Home;
