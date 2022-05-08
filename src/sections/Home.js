import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import AnimatedText from "react-animated-text-content";

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
  direction: ${(props) => (props.lang === "ar" ? "rtl" : "ltr")};
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

const Paragraph = styled.div`
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
      font-size: 6vw;
    }
  }
  @media (max-width: 768px) {
    grid-column-start: 1;
    grid-column-end: 8;
  }
`;

const Home = () => {
  const { t, i18n } = useTranslation();

  return (
    <Section>
      <Container lang={i18n.language}>
        <Label>
          <AnimatedText
            type="words" // animate words or chars
            animation={{
              y: "100px",
              ease: "ease",
            }}
            animationType="block"
            interval={0.06}
            duration={0.8}
            tag="p"
          >
            {t("lang10")}
          </AnimatedText>
        </Label>
        <Paragraph>
          <AnimatedText
            type="words" // animate words or chars
            animation={{
              y: "100px",
              ease: "ease",
            }}
            animationType="block"
            interval={0.06}
            duration={0.8}
            tag="p"
          >
            {t("lang11")}
          </AnimatedText>
          <AnimatedText
            type="words" // animate words or chars
            animation={{
              y: "100px",
              ease: "ease",
            }}
            animationType="block"
            interval={0.06}
            duration={0.9}
            tag="p"
          >
            {t("lang12")}
          </AnimatedText>
          <AnimatedText
            type="words" // animate words or chars
            animation={{
              y: "100px",
              ease: "ease",
            }}
            animationType="block"
            interval={0.06}
            duration={0.95}
            tag="p"
          >
            {t("lang13")}
          </AnimatedText>
        </Paragraph>
      </Container>
    </Section>
  );
};

export default Home;
