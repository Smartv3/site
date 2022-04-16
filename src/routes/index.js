import { Route, Routes } from "react-router-dom";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import Home from "../pages/Home";
import LatestNews from "../pages/LatestNews";
import Privacy from "../pages/policy";
import Term from "../pages/Term";

const Navigation = ({ containerRef }) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/latest-news" element={<LatestNews />} />
      <Route path="/term-and-condition" element={<Term />} />
      <Route path="/privacy-and-policy" element={<Privacy />} />
      <Route path="/contact-us" element={<ContactUs />} />
    </Routes>
  );
};

export default Navigation;
