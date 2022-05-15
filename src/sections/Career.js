import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { InView } from "react-intersection-observer";
import { motion } from "framer-motion";
import AnimationText from "../components/AnimationText";
import Banner from "../assets/Images/banner.webp";

const Section = styled.div`
  color: #fff;
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  background-image: url(${Banner});
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 4;
  display: flex;
  max-width: 100%;
  align-items: center;
`;

const Container = styled.div`
  direction: ${(props) => (props.lang === "ar" ? "rtl" : "ltr")};
  display: grid;
  width: 100%;
  grid-auto-columns: 1fr;
  grid-column-gap: 1.5vw;
  grid-row-gap: 16px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: -webkit-max-content -webkit-max-content -webkit-max-content -webkit-max-content;
  grid-template-rows: max-content max-content max-content max-content;
`;

const Label = styled.div`
  grid-column-end: 6;
  grid-column-start: 2;
  grid-row-end: 3;
  grid-row-start: 1;
  p {
    font-size: 0.8vw;
    font-weight: 400;
    @media (max-width: 768px) {
      font-size: 3.6vw;
    }
  }
`;

const Paragraph = styled.div`
  grid-column-end: 6;
  grid-column-start: 2;
  grid-row-end: 3;
  grid-row-start: 3;
  p {
    font-size: 2vw;
    font-weight: 600;
    @media (max-width: 768px) {
      font-size: 4.5vw;
    }
  }
  @media (max-width: 768px) {
    grid-column-start: 2;
    grid-column-end: 8;
  }
`;

const Career = () => {
  const { t, i18n } = useTranslation();
  const container1 = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  };
  return (
    <Section>
      <Container lang={i18n.language}>
        <InView>
          {({ inView, ref, entry }) => (
            <Label
              data-scroll="0"
              data-scroll-speed="1"
              data-scroll-delay="0.1"
              ref={ref}
            >
              <motion.div
                initial="hidden"
                animate={inView && "visible"}
                variants={container1}
              >
                <AnimationText type={"paragraph"} text={t("lang39")} />
              </motion.div>
            </Label>
          )}
        </InView>
        <InView>
          {({ inView, ref, entry }) => (
            <Paragraph
              data-scroll="0"
              data-scroll-speed="1"
              data-scroll-delay="0.1"
              ref={ref}
            >
              <motion.div
                initial="hidden"
                animate={inView && "visible"}
                variants={container1}
              >
                <AnimationText type={"paragraph"} text={t("lang40")} />
              </motion.div>
              <motion.div
                initial="hidden"
                animate={inView && "visible"}
                variants={container1}
              >
                <AnimationText type={"paragraph"} text={t("lang41")} />
              </motion.div>
            </Paragraph>
          )}
        </InView>
      </Container>
    </Section>
  );
};

export default Career;
