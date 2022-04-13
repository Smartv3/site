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
  background-color: #352344;
  color: #fff;
  @media (max-width: 768px) {
    padding-right: 24px;
    padding-left: 24px;
  }
`;

const Term = () => {
    const containerRef = useRef(null);
    return (
      <>
        <Header />
        <main data-scroll-container ref={containerRef} >
          <Section>Term and condition</Section>
          <Footer />
        </main>
      </>
    );
};

export default Term;
