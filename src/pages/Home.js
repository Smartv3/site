import { useRef, useState } from "react";
import "locomotive-scroll/dist/locomotive-scroll.css";

import Menu from "../components/Menu";
import HomeHeader from "../sections/Home";
import CoverVideo from "../components/CoverVideo";
import AboutUsOne from "../sections/AboutUsOne";
import AboutUs from "../sections/AboutUs";
import Career from "../sections/Career";
import PlayStore from "../sections/PlayStore";
import Footer from "../components/Footer";

function Home() {
  const [menuState, setMenuState] = useState(false);
  const containerRef = useRef(null);

  return (
    <>
      <CoverVideo setMenuState={setMenuState} />
      {menuState && <Menu setMenuState={setMenuState} />}
      <main data-scroll-container ref={containerRef}>
        <HomeHeader />
        <AboutUsOne />
        <AboutUs />
        <Career />
        <PlayStore />
        <Footer />
      </main>
    </>
  );
}

export default Home;
