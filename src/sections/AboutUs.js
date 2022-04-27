import React from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { InView } from "react-intersection-observer";
import { motion } from "framer-motion";
import AnimationText from "../components/AnimationText";
import Image1 from "../assets/Images/1.webp";
import Image2 from "../assets/Images/2.webp";
import Image3 from "../assets/Images/3.webp";
import Image4 from "../assets/Images/4.webp";
import Image5 from "../assets/Images/5.webp";
import Image6 from "../assets/Images/6.webp";

import "./dd.css";
import { useTranslation } from "react-i18next";

const Section = styled.section`
  direction: ${(props) => (props.lang === "ar" ? "rtl" : "ltr")};
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  background-color: #bc668c;
  /* background-color: #352344; */
`;

const Container = styled.div`
  /* padding: 20vh 8vw; */
  display: flex;
  overflow: hidden;
  max-width: 100%;
  padding: 15vh 5vw;
  align-items: center;
`;

const Grid = styled.div`
  display: grid;
  width: 100%;
  grid-auto-columns: 1fr;
  grid-column-gap: 2vw;
  grid-row-gap: 16px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: auto -webkit-max-content -webkit-max-content -webkit-max-content;
  grid-template-rows: auto max-content max-content max-content;
`;

const Label = styled.div`
  /* grid-column-end: 6;
  grid-column-start: 2;
  grid-row-end: 3;
  grid-row-start: 1; */

  grid-column-end: 8;
  grid-column-start: 2;
  grid-row-end: 2;
  grid-row-start: 1;
  align-self: auto;
  color: rgb(99, 59, 127);
  /* color: #fff; */
  p {
    font-size: 2vw;
    font-weight: 400;
    @media (max-width: 768px) {
      font-size: 7.4vw;
    }
  }
  @media (max-width: 768px) {
    grid-column-end: 9;
    grid-column-start: 1;
  }
`;

const Paragraph = styled.div`
  grid-column-end: 6;
  grid-column-start: 2;
  grid-row-end: 3;
  grid-row-start: 2;
  color: #fff;
  p {
    font-size: 2vw;
    font-weight: 400;
    @media (max-width: 768px) {
      font-size: 4.5vw;
    }
  }
  @media (max-width: 768px) {
    grid-column-start: 1;
    grid-column-end: 9;
  }
`;

const Title = styled.div`
  grid-column-end: 5;
  grid-column-start: 2;
  grid-row-end: 2;
  grid-row-start: 1;
  color: #fff;
  font-size: 2vw;
  line-height: 120%;
  font-weight: 400;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    font-size: 7.4vw;
    grid-column-start: 1;
    grid-column-end: 9;
  }
`;

const TitleText = styled.div`
  grid-column-end: 5;
  grid-column-start: 2;
  grid-row-end: 4;
  grid-row-start: 2;
  color: #fff;
  font-size: 0.85vw;
  line-height: 150%;
  letter-spacing: 0.3;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    font-size: 3.4vw;
    grid-column-start: 1;
    grid-column-end: 9;
  }
  strong {
    color: #bc668c;
  }
`;

const HomeNewsSection = styled.div`
  overflow: hidden;
  padding-top: 10vh;
  padding-right: 12vw;
  padding-left: 12vw;
  @media (max-width: 768px) {
    padding-right: 24px;
    padding-left: 24px;
  }
`;

const GridNewsCards = styled.div`
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: flex-start;
  grid-auto-columns: 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: auto auto auto auto;
  @media (max-width: 768px) {
  }
`;

const HomeNewsInnerGrid = styled.div`
  display: grid;
  width: 100%;
  grid-auto-columns: 1fr;
  grid-column-gap: 2vw;
  grid-row-gap: 16px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto auto auto;
  direction: ${(props) => (props.lang === "ar" ? "rtl" : "ltr")};
  @media (max-width: 768px) {
    grid-column-gap: 4vw;
    grid-template-columns: 1fr 1fr;
  }
`;

const CardMask = styled.div`
  width: 20.6vw;
  height: 34.7vw;
  margin-bottom: 2vw;
  perspective: 1000px;
  @media (max-width: 768px) {
    width: 40vw;
    height: 90vw;
  }
`;

const NewCardWrap = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
  background-color: #101010;
  @media (max-width: 768px) {
  }
`;

const CardImgWrap = styled.div`
  width: 100%;
  height: 100%;
  transform: rotate(0deg);
  @media (max-width: 768px) {
  }
`;

const CardImg = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  transform: rotate(0deg);
  color: #fff;
  text-decoration: none;
  img {
    width: 100%;
    height: 100%;
    max-width: none;
    object-fit: cover;

    user-select: none;
    vertical-align: middle;
    display: inline-block;
  }
  @media (max-width: 768px) {
  }
`;

const CardOverlay = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  background-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(rgba(0, 0, 0, 0.1)),
    to(rgba(16, 16, 16, 0.8))
  );
  background-image: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.1),
    rgba(16, 16, 16, 0.8)
  );
  transform: rotate(0deg);
  color: #fff;
  text-decoration: none;
  @media (max-width: 768px) {
  }
`;

const AboutUs = () => {
  const { t, i18n } = useTranslation();
  const reference = React.useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  React.useLayoutEffect(() => {
    const element = reference.current;
    setTimeout(() => {
      gsap.to(element.querySelector("#two"), {
        duration: 1,
        backgroundColor: "#352344",
        ease: "none",
        scrollTrigger: {
          id: "testTwo",
          trigger: element.querySelector("#th"),
          start: "top 300px",
          end: "bottom 100px",
          // markers: true,
          scrub: true,
          scroller: ".one",
        },
      });
      gsap.to(
        [element.querySelector("#text1"), element.querySelector("#text2")],
        {
          duration: 1,
          color: "#fff",
          ease: "none",
          scrollTrigger: {
            id: "testOne",
            trigger: element.querySelector("#th"),
            start: "top 300px",
            end: "bottom 100px",
            // markers: true,
            scrub: true,
            scroller: ".one",
          },
        }
      );

      ScrollTrigger.refresh();
    }, 1000);
  }, []);

  const lang29 = t("lang29").split(" ");
  const lang30 = t("lang30").split(" ");
  const lang31 = t("lang31").split(" ");
  const lang32 = t("lang32").split(" ");

  const lang35 = t("lang35").split(" ");
  const lang36 = t("lang36").split(" ");
  const lang37 = t("lang37").split(" ");
  const lang38 = t("lang38").split(" ");

  const container1 = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  };

  return (
    <>
      <Section lang={i18n.language} className="one" ref={reference}>
        <div id="two">
          <Container>
            <div id="th">
              <Grid>
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
                        <AnimationText type={"paragraph"} text={t("lang15")} />
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
                        <AnimationText type={"paragraph"} text={t("lang16")} />
                      </motion.div>
                    </Paragraph>
                  )}
                </InView>
              </Grid>
            </div>
          </Container>
          <Container>
            <Grid>
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
                      <AnimationText type={"paragraph"} text={t("lang17")} />
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
                      <AnimationText type={"paragraph"} text={t("lang18")} />
                    </motion.div>
                  </Paragraph>
                )}
              </InView>
            </Grid>
          </Container>
          <Container>
            <Grid>
              <InView>
                {({ inView, ref, entry }) => (
                  <Title
                    data-scroll="0"
                    data-scroll-speed="1.2"
                    data-scroll-delay="0.8"
                    ref={ref}
                  >
                    <motion.div
                      initial="hidden"
                      animate={inView && "visible"}
                      variants={container1}
                    >
                      <AnimationText type={"paragraph"} text={t("lang19")} />
                    </motion.div>
                  </Title>
                )}
              </InView>
              <InView>
                {({ inView, ref, entry }) => (
                  <TitleText
                    data-scroll="0"
                    data-scroll-speed="1.2"
                    data-scroll-delay="0.8"
                    ref={ref}
                  >
                    <motion.div
                      initial="hidden"
                      animate={inView && "visible"}
                      variants={container1}
                    >
                      <AnimationText type={"paragraph"} text={t("lang20")} />
                    </motion.div>
                  </TitleText>
                )}
              </InView>
            </Grid>
          </Container>

          <Container>
            <Grid>
              <Title
                data-scroll="0"
                data-scroll-speed="1.2"
                data-scroll-delay="0.8"
              >
                <p>{t("lang21")}</p>
              </Title>
              <TitleText
                data-scroll="0"
                data-scroll-speed="1.2"
                data-scroll-delay="0.8"
              >
                <div>
                  <p>
                    <strong>{t("lang22")}</strong>
                    {t("lang23")}
                  </p>
                  <p>
                    <strong>{t("lang24")}</strong>
                    {t("lang25")}
                  </p>
                  <p>
                    <strong>{t("lang26")}</strong>
                    {t("lang27")}
                  </p>
                </div>
              </TitleText>
            </Grid>
          </Container>
          <Container>
            <Grid>
              <Title
                data-scroll="0"
                data-scroll-speed="1.2"
                data-scroll-delay="0.8"
              >
                <p>{t("lang28")}</p>
              </Title>
              <TitleText
                data-scroll="0"
                data-scroll-speed="1.2"
                data-scroll-delay="0.8"
              >
                <div>
                  <p>
                    <strong>{lang29[0] + " "}</strong>{" "}
                    <strong>{lang29[1] + " "}</strong>
                    {lang29[2] +
                      " " +
                      lang29[3] +
                      " " +
                      lang29[4] +
                      " " +
                      lang29[5] +
                      " " +
                      lang29[6] +
                      " " +
                      lang29[7] +
                      " "}
                    <strong>{lang29[8]}</strong>.
                  </p>
                  <p>
                    <strong>{lang30[0] + " "}</strong>
                    {lang30[1] +
                      " " +
                      lang30[2] +
                      " " +
                      lang30[3] +
                      " " +
                      lang30[4] +
                      " " +
                      lang30[5] +
                      " "}
                    <strong>{lang30[6] + " "}</strong>
                    {lang30[7] + " "}
                    <strong>{lang30[8]}</strong>.
                  </p>
                  <p>
                    <strong>{lang31[0] + " "}</strong>{" "}
                    <strong>{lang31[1] + " " + lang31[2] + " "}</strong>
                    {lang31[3] + " " + lang31[4] + " " + lang31[5] + " "}
                    <strong>
                      {lang31[6] +
                        " " +
                        lang31[7] +
                        " " +
                        lang31[8] +
                        " " +
                        lang31[9]}
                    </strong>
                    .
                  </p>
                  <p>
                    <strong>{lang32[0] + " "}</strong>
                    {lang32[1] +
                      " " +
                      lang32[2] +
                      " " +
                      lang32[3] +
                      " " +
                      lang32[4] +
                      " " +
                      lang32[5] +
                      " " +
                      lang32[6] +
                      " " +
                      lang32[7] +
                      " " +
                      lang32[8] +
                      " " +
                      lang32[9] +
                      " " +
                      lang32[10] +
                      " "}
                    <strong>{lang32[11] + " "}</strong>
                    {lang32[12] + " "}
                    <strong>
                      {lang32[13] + " " + lang32[14] + " " + lang32[15]}
                    </strong>
                    .
                  </p>
                </div>
              </TitleText>
            </Grid>
          </Container>
          <Container>
            <Grid>
              <Title
                data-scroll="0"
                data-scroll-speed="1.2"
                data-scroll-delay="0.8"
              >
                <p>{t("lang33")}</p>
                <p>{t("lang34")}</p>
              </Title>
              <TitleText
                data-scroll="0"
                data-scroll-speed="1.2"
                data-scroll-delay="0.8"
              >
                <div>
                  <p>
                    <strong>{lang35[0] + " "}</strong>
                    {lang35[1] + " " + lang35[2] + " "}
                    <strong>{lang35[3] + " "}</strong>
                    {lang35[4] + " " + lang35[5] + " "}
                    <strong>{lang35[6] + " "}</strong>
                    {lang35[7] + " " + lang35[8] + " "}
                    <strong>{lang35[9] + " "}</strong>
                    {lang35[10] + " " + lang35[11]}.
                  </p>
                  <p>
                    <strong>{lang36[0] + " "}</strong>
                    {lang36[1] + " "}
                    <strong>{lang36[2] + " "}</strong>
                    {lang36[3] + " "}
                    <strong>{lang36[4] + " "}</strong>
                    {lang36[5] + " " + lang36[6]}.
                  </p>
                  <p>
                    <strong>{lang37[0] + " "}</strong>{" "}
                    <strong>{lang37[1] + " "}</strong>
                    {lang37[2] + " " + lang37[3] + " "}
                    <strong>{lang37[4] + " " + lang37[5]}</strong>.
                  </p>
                  <p>
                    <strong>{lang38[0] + " "}</strong>{" "}
                    <strong>
                      {lang38[1] + " " + lang38[2] + " " + lang38[3] + " "}
                    </strong>
                    {lang38[4] + " " + lang38[5] + " "}
                    <strong>
                      {lang38[6] +
                        " " +
                        lang38[7] +
                        " " +
                        lang38[8] +
                        " " +
                        lang38[9] +
                        " " +
                        lang38[10]}
                    </strong>
                    .
                  </p>
                </div>
              </TitleText>
            </Grid>
          </Container>
          <HomeNewsSection>
            <GridNewsCards>
              <HomeNewsInnerGrid lang={i18n.language}>
                <CardMask
                  data-scroll="0"
                  data-scroll-speed="0"
                  data-scroll-delay="0.1"
                >
                  <NewCardWrap>
                    <CardImgWrap>
                      <CardImg>
                        <CardOverlay />
                        <img src={Image1} loading="lazy" alt="Our news" />
                      </CardImg>
                    </CardImgWrap>
                  </NewCardWrap>
                </CardMask>

                <CardMask
                  data-scroll="0"
                  data-scroll-speed="1.8"
                  data-scroll-delay="0.1"
                >
                  <NewCardWrap>
                    <CardImgWrap>
                      <CardImg>
                        <CardOverlay />
                        <img src={Image2} loading="lazy" alt="Our news" />
                      </CardImg>
                    </CardImgWrap>
                  </NewCardWrap>
                </CardMask>

                <CardMask
                  data-scroll="0"
                  data-scroll-speed="1"
                  data-scroll-delay="0.8"
                >
                  <NewCardWrap>
                    <CardImgWrap>
                      <CardImg>
                        <CardOverlay />
                        <img src={Image3} loading="lazy" alt="Our news" />
                      </CardImg>
                    </CardImgWrap>
                  </NewCardWrap>
                </CardMask>

                <CardMask
                  data-scroll="0"
                  data-scroll-speed="1.5"
                  data-scroll-delay="0.8"
                >
                  <NewCardWrap>
                    <CardImgWrap>
                      <CardImg>
                        <CardOverlay />
                        <img src={Image4} loading="lazy" alt="Our news" />
                      </CardImg>
                    </CardImgWrap>
                  </NewCardWrap>
                </CardMask>

                <CardMask
                  data-scroll="0"
                  data-scroll-speed="2.4"
                  data-scroll-delay="0.1"
                >
                  <NewCardWrap>
                    <CardImgWrap>
                      <CardImg>
                        <CardOverlay />
                        <img src={Image5} loading="lazy" alt="Our news" />
                      </CardImg>
                    </CardImgWrap>
                  </NewCardWrap>
                </CardMask>

                <CardMask
                  data-scroll="0"
                  data-scroll-speed="4"
                  data-scroll-delay="0.1"
                >
                  <NewCardWrap>
                    <CardImgWrap>
                      <CardImg>
                        <CardOverlay />
                        <img src={Image6} loading="lazy" alt="Our news" />
                      </CardImg>
                    </CardImgWrap>
                  </NewCardWrap>
                </CardMask>
              </HomeNewsInnerGrid>
            </GridNewsCards>
          </HomeNewsSection>
        </div>
      </Section>
    </>
  );
};

export default AboutUs;
