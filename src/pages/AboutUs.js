import { useRef } from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  padding-right: 8vw;
  padding-left: 8vw;
  display: flex;
  height: 100vh;
  align-items: center;
  @media (max-width: 768px) {
    padding-right: 24px;
    padding-left: 24px;
  }
`;

const AboutUs = () => {
  const containerRef = useRef(null);
  return (
    <>
      <Header />
      <main data-scroll-container ref={containerRef} >
        <Section>adsfadf</Section>
        <Footer />
      </main>
    </>
  );
};

export default AboutUs;
