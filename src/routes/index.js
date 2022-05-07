import React from "react";
import { Routes, Route } from "react-router-dom";

const AboutUs = React.lazy(() => import("../pages/AboutUs"));
const ContactUs = React.lazy(() => import("../pages/ContactUs"));
const Home = React.lazy(() => import("../pages/Home"));
const LatestNews = React.lazy(() => import("../pages/LatestNews"));
const Privacy = React.lazy(() => import("../pages/policy"));
const Term = React.lazy(() => import("../pages/Term"));

const Navigation = ({ containerRef }) => {
  return (
    <React.Suspense fallback={<p>Loading page...</p>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/latest-news" element={<LatestNews />} />
        <Route path="/term-and-condition" element={<Term />} />
        <Route path="/privacy-and-policy" element={<Privacy />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </React.Suspense>
  );
};

export default Navigation;
