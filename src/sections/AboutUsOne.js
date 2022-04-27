import React from "react";
import { useTranslation } from "react-i18next";
import {useInView} from "react-intersection-observer";
import styled from "styled-components";
import { motion} from "framer-motion";
import AnimationText from "../components/AnimationText";

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
  direction: ${props => props.lang === 'ar' ? 'rtl' : 'ltr'};
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
    font-size: 2vw;
    font-weight: 600;
    @media (max-width: 768px) {
      font-size: 7.4vw;
    }
  }
  @media (max-width: 768px) {
    grid-column-start: 1;
    grid-column-end: 8;
  }
`;

const AboutUsOne = () => {
  const {t, i18n} = useTranslation()
  const {inView, ref} = useInView();

  const container1 = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  };

  return (
    <Section>
      <Container ref={ref} lang={i18n.language}>
        <Label data-scroll="0" data-scroll-speed="1" data-scroll-delay="0.1">
          {/* <p>{t("lang10")}</p> */}
          <motion.div initial="hidden" animate={inView && "visible"} variants={container1}>
            <AnimationText type={"paragraph"} text={t("lang10")} />
          </motion.div>
        </Label>
        <Paragraph
          data-scroll="0"
          data-scroll-speed="1"
          data-scroll-delay="0.1"
        >
          {/* <p>{t("lang14")}</p> */}
          <motion.div initial="hidden" animate={inView && "visible"} variants={container1}>
            <AnimationText type={"paragraph"} text={t("lang14")} />
          </motion.div>
        </Paragraph>
      </Container>
    </Section>
  );
};

export default AboutUsOne;
