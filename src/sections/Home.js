import React from "react";
import styled from "styled-components";
import { gsap } from "gsap";

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  padding-right: 8vw;
  padding-left: 8vw;
  display: flex;
  height: 100vh;
  align-items: center;
  color: #fff;
  @media (max-width: 768px) {
    padding-right: 24px;
    padding-left: 24px;
  }
`;

const Container = styled.div`
  direction: rtl;
  display: grid;
  width: 100%;
  align-items: start;
  grid-auto-columns: 1fr;
  grid-column-gap: 2vw;
  grid-row-gap: 16px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: auto auto auto auto;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Label = styled.div`
  grid-column-end: 8;
  grid-column-start: 2;
  grid-row-end: 4;
  grid-row-start: 1;
  align-self: start;
  p {
    font-size: 1vw;
    font-weight: 400;
    @media (max-width: 768px) {
      font-size: 3.6vw;
    }
  }
  @media (max-width: 768px) {
    grid-column-start: 1;
    grid-column-end: 8;
  }
`;

const Paragraph = styled.div`
  grid-column-end: 8;
  grid-column-start: 2;
  grid-row-end: 4;
  grid-row-start: 3;
  align-self: start;
  p {
    font-size: 4.4vw;
    font-weight: 600;
    @media (max-width: 768px) {
      font-size: 10vw;
    }
  }
  @media (max-width: 768px) {
    grid-column-start: 1;
    grid-column-end: 8;
  }
`;

const Home = () => {

  return (
    <Section>
      <Container>
        <Label data-scroll="0" data-scroll-speed="1" data-scroll-delay="0.1">
          <p>من نحن</p>
        </Label>
        <Paragraph
          data-scroll="0"
          data-scroll-speed="1"
          data-scroll-delay="0.1"
        >
          <p>تطبيق سعودي</p>
          <p>يواكب تطلعات رؤية</p>
          <p>2030 طموحنا عنان السماء</p>
        </Paragraph>
      </Container>
    </Section>
  );
};

export default Home;
