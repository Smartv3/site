import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
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
      font-size: 6vw;
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
      font-size: 6vw;
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
      font-size: 6vw;
    }
  }
  @media (max-width: 768px) {
    grid-column-start: 1;
    grid-column-end: 8;
  }
`;

const Home = (props) => {
  const { t, i18n } = useTranslation();

  const container1 = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  };

  const container2 = {
    visible: {
      transition: {
        staggerChildren: 0.027,
      },
    },
  };

  const container3 = {
    visible: {
      transition: {
        staggerChildren: 0.029,
      },
    },
  };

  const container4 = {
    visible: {
      transition: {
        staggerChildren: 0.031,
      },
    },
  };

  return (
    <Section>
      <Container lang={i18n.language} className="col__content-title">
        <Label>
          <motion.div initial="hidden" animate={props.test && "visible"} variants={container1}>
            <AnimationText type={"paragraph"} text={t("lang10")} />
          </motion.div>
        </Label>
        <ParagraphOne>
          <motion.div initial="hidden" animate={props.test && "visible"} variants={container2}>
            <AnimationText type={"paragraph"} text={t("lang11")} />
          </motion.div>
        </ParagraphOne>
        <ParagraphTwo>
          <motion.div initial="hidden" animate={props.test && "visible"} variants={container3}>
            <AnimationText type={"paragraph"} text={t("lang12")} />
          </motion.div>
        </ParagraphTwo>
        <ParagraphThree>
          <motion.div initial="hidden" animate={props.test && "visible"} variants={container4}>
            <AnimationText type={"paragraph"} text={t("lang13")} />
          </motion.div>
        </ParagraphThree>
      </Container>
    </Section>
  );
};

export default Home;
