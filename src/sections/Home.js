import React from "react";
import styled, { keyframes } from "styled-components";
import { gsap, Power4 } from "gsap";

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
  overflow: hidden;
  p {
    font-size: 1vw;
    font-weight: 400;
    display: block;
    @media (max-width: 768px) {
      font-size: 3.6vw;
    }
  }
  @media (max-width: 768px) {
    grid-column-start: 1;
    grid-column-end: 8;
  }
`;

const ParagraphOne = styled.div`
  grid-column-end: 8;
  grid-column-start: 2;
  grid-row-end: 4;
  grid-row-start: 3;
  align-self: start;
  overflow: hidden;
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

const ParagraphTwo = styled.div`
  grid-column-end: 8;
  grid-column-start: 2;
  grid-row-end: 4;
  grid-row-start: 4;
  align-self: start;
  overflow: hidden;
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

const ParagraphThree = styled.div`
  grid-column-end: 8;
  grid-column-start: 2;
  grid-row-end: 5;
  grid-row-start: 5;
  align-self: start;
  overflow: hidden;
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
  // const ref = React.useRef(null);

  // React.useEffect(() => {
  //   const element = ref.current;
  //   let tl = gsap.timeline({ delay: 1.2 });

  //   tl.from(element.querySelector(".col__content-title"), {
  //     ease: "power4",
  //     y: "+=5vh",
  //     duration: 2.5,
  //   })
  //     .from(
  //       element.querySelector(".line__inner"),
  //       {
  //         // y: -0.113,
  //         y: 10,
  //         duration: 2,
  //         ease: "back",
  //         stagger: 0.1,
  //       },
  //       0
  //     )
  //     .from(
  //       element.querySelector(".col__content-txt1"),
  //       {
  //         // x: 100,
  //         y: 50,
  //         // opacity: 0,
  //         duration: 2,
  //         ease: "power4",
  //         stagger: 0.2,
  //       },
  //       0.4
  //     )
  //     .from(
  //       element.querySelector(".col__content-txt2"),
  //       {
  //         // x: 100,
  //         y: 50,
  //         // opacity: 0,
  //         duration: 2,
  //         ease: "power4",
  //         stagger: 0.3,
  //       },
  //       0.4
  //     )
  //     .from(
  //       element.querySelector(".col__content-txt3"),
  //       {
  //         // x: 100,
  //         y: 50,
  //         // opacity: 0,
  //         duration: 2,
  //         ease: "power4",
  //         stagger: 0.4,
  //       },
  //       0.4
  //     );
  // }, []);

  return (
    <Section>
      <Container className="col__content-title">
        <Label>
          <p className="line__inner">من نحن</p>
        </Label>
        <ParagraphOne>
          <p className="col__content-txt1">تطبيق سعودي</p>
        </ParagraphOne>
        <ParagraphTwo>
          <p className="col__content-txt2">يواكب تطلعات رؤية</p>
        </ParagraphTwo>
        <ParagraphThree>
          <p className="col__content-txt3">2030 طموحنا عنان السماء</p>
        </ParagraphThree>
      </Container>
    </Section>
  );
};

export default Home;
