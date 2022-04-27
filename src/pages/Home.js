import React, { useRef, useState, useEffect } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { AnimatePresence } from "framer-motion";
import "locomotive-scroll/dist/locomotive-scroll.css";

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
// const CoverVideo = React.lazy(() => import("../components/CoverVideo"));

function Home() {
  const [menuState, setMenuState] = useState(false);
  const containerRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 2000);
  }, [])
  
  return (
    <>
      <LocomotiveScrollProvider
        options={{
          smooth: true,
          // ... all available Locomotive Scroll instance options
          smartphone: {
            smooth: true,
          },
          tablet: {
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
        <AnimatePresence>
        {loaded ? null : <Loader />}
        </AnimatePresence>
        <ScrollTriggerProxy/>
        <CoverVideo setMenuState={setMenuState} />
        <Menu setMenuState={setMenuState} menu={menuState} />
        <main className="one" data-scroll-container ref={containerRef}>
          <HomeHeader />
          <AboutUsOne />
          <AboutUs />
          <Career />
          <PlayStore />
          <Footer />
        </main>
      </LocomotiveScrollProvider>
    </>
  );
}

export default Home;
