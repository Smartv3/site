import { useRef, useState } from "react";
import styled from "styled-components";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import ContactImage1 from "../assets/Images/contactUs1.webp";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import AnimationText from "../components/AnimationText";
import Mouse from "../components/Mouse";

const Section = styled.section`
  position: relative;
  /* min-height: 100vh; */
  overflow: hidden;
  padding-right: 8vw;
  padding-left: 8vw;
  display: flex;
  direction: ${(props) => (props.lang === "ar" ? "rtl" : "ltr")};
  align-items: center;
  @media (max-width: 768px) {
    padding-right: 24px;
    padding-left: 24px;
  }
  span {
    margin-bottom: 24px;
    font-size: 0.8vw;
    
    font-weight: 800;
    @media (max-width: 768px) {
      font-size: 14px;
    }
  }
`;

const CoverImageContainer = styled.section`
  width: 100%;
  height: 100vh;
  position: fixed;

  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
    top: 0;
    padding: none;
    position: fixed; /* optional depending on what you want to do in your app */
    z-index: -1;
  }
`;

const DarkOverlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;

  background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
`;
const Container = styled.div`
  width: 100%;
  padding-right: 8vw;
  padding-bottom: 10vh;
  padding-left: 8vw;
  @media (max-width: 768px) {
    padding-bottom: 0vh;
    padding: 0px 0px;
  }
`;

const HeaderTitle = styled.p`
  font-size: "0.8vw";
  line-height: "100%";
  letter-spacing: 1.5px;
`;

const ImageContainer = styled.div`
  grid-column-end: 8;
  grid-column-start: 4;
  grid-row-end: 5;
  grid-row-start: 2;
  @media (max-width: 768px) {
    grid-column-end: 9;
    grid-column-start: 1;
    grid-row-start: 5;
  }
  div {
    overflow: hidden;
    width: 37.5vw;
    height: 30vh;
    justify-content: flex-end;
    align-items: flex-start;
    @media (max-width: 768px) {
      width: 100%;
      height: 100%;
    }
  }
  img {
    width: 100%;
    height: 100%;
    max-width: none;
    object-fit: cover;
  }
`;

const Address = styled.div`
  grid-row-start: 2;
  grid-column-start: 2;
  grid-row-end: 5;
  grid-column-end: 9;

  @media (max-width: 768px) {
    grid-row-start: 4;
    grid-column-start: 1;
    grid-row-end: 5;
    grid-column-end: 9;
  }
`;

const AddressLocation = styled.div`
  margin-bottom: 24px;
  font-size: 1.2vw;
  
  font-weight: 800;

  @media (max-width: 768px) {
    margin-bottom: 16px;
    font-size: 5vw;
    
    font-weight: 800;
  }
`;

const ContactUs = () => {
  const [menuState, setMenuState] = useState(false);
  const containerRef = useRef(null);
  const { t, i18n } = useTranslation();
  const container1 = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  };
  const item = {
    hidden: {
      y: "65%",
      opacity: 0,
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
      letterSpacing: "initial",
    },
  };
  return (
    <>
      <LocomotiveScrollProvider
        options={{
          smooth: true,
          // ... all available Locomotive Scroll instance options
          smartphone: {
            smooth: true,
          },
          tablet: {
            smooth: true,
          },
        }}
        watch={
          [
            //..all the dependencies you want to watch to update the scroll.
            //  Basicaly, you would want to watch page/location changes
            //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
          ]
        }
        containerRef={containerRef}
      >
        {/* <ScrollTriggerProxy /> */}
        <Header setMenuState={setMenuState} />
        <Menu setMenuState={setMenuState} menu={menuState} />
        <Mouse/>
        <main data-scroll-container ref={containerRef}>
          <Section
            lang={i18n.language}
            style={{ backgroundColor: "#000", color: "#fff" }}
          >
            <div
              style={{
                paddingRight: "8vw",
                paddingLeft: "8vw",
                padding: "30vh 5vw 60px",
                maxWidth: "100%",
              }}
            >
              <div
                style={{
                  display: "grid",
                  width: "100%",
                  alignItems: "start",
                  gridTemplateRows: "auto auto auto 24px max-content",
                }}
              >
                <div
                  style={{
                    gridColumnEnd: 7,
                    gridColumnStart: 2,
                    gridRowEnd: 4,
                    gridRowStart: 2,
                    alignSelf: "center",
                  }}
                >
                  <div style={{ marginBottom: 16 }}>
                    <HeaderTitle>
                      <motion.div
                        initial="hidden"
                        animate={"visible"}
                        variants={container1}
                      >
                        <AnimationText type={"paragraph"} text={t("lang44")} />
                      </motion.div>
                    </HeaderTitle>
                  </div>
                </div>
                <div
                  style={{
                    gridColumnEnd: 7,
                    gridColumnStart: 2,
                    gridRowEnd: 4,
                    gridRowStart: 6,
                    alignSelf: "center",
                  }}
                >
                  <motion.div
                    initial="hidden"
                    animate={"visible"}
                    variants={container1}
                  >
                    <motion.h1
                      style={{
                        fontSize: "3.1vw",
                        marginBottom: 40,
                        fontWeight: 500,
                      }}
                      variants={item}
                    >
                      {t("lang45")}
                    </motion.h1>
                  </motion.div>
                </div>
              </div>
              <div
                style={{
                  gridColumnEnd: 8,
                  gridColumnStart: 2,
                  gridRowEnd: 5,
                  gridRowStart: 4,
                  alignSelf: "center",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: 1,
                    backgroundColor: "#9e9e9e",
                  }}
                ></div>
              </div>

              <div
                style={{
                  display: "grid",
                  width: "100%",
                  alignItems: "start",
                  gridTemplateRows: "auto auto auto 24px max-content",
                }}
              >
                <div
                  style={{
                    gridColumnEnd: 8,
                    gridColumnStart: 2,
                    gridRowEnd: 6,
                    gridRowStart: 5
                  }}
                >
                  <div>
                    <div>
                      <div>
                        <motion.div
                          initial="hidden"
                          animate={"visible"}
                          variants={container1}
                        >
                          <motion.p variants={item}>{t("lang46")}</motion.p>
                        </motion.div>
                      </div>
                      <div>
                        <div>
                          <a href="mailto:info@srmg.com?subject=Advertising">
                            <motion.div
                              initial="hidden"
                              animate={"visible"}
                              variants={container1}
                            >
                              <motion.p variants={item}>
                                {t("lang47")}
                                <br />
                                {t("lang48")}
                                <br />
                                {t("lang49")}
                              </motion.p>
                            </motion.div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Section>
          <Section
            lang={i18n.language}
            style={{
              paddingTop: "5vh",
              paddingBottom: "5vh",
              backgroundColor: "#fff",
            }}
          >
            <Container>
              <div
                style={{
                  display: "grid",
                  width: "100%",
                  gridAutoColumns: "1fr",
                  gridColumnGap: "2vw",
                  gridRowGap: 16,
                  gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr",
                  gridTemplateRows: "auto max-content max-content max-content",
                }}
              >
                <div
                  style={{
                    gridColumnEnd: 5,
                    gridColumnStart: 1,
                    gridRowEnd: 2,
                    gridRowStart: 1,
                  }}
                >
                  <p>{t("lang50")}</p>
                </div>
                <div
                  style={{
                    gridColumnEnd: 9,
                    gridColumnStart: 1,
                    gridRowEnd: 5,
                    gridRowStart: 2,
                  }}
                >
                  <div>
                    <div>
                      {t("lang48")} <br />
                    </div>
                  </div>
                </div>
                <Address>
                  <div>
                    <div>
                      <div>
                        <AddressLocation>{t("lang51")} </AddressLocation>
                      </div>
                    </div>
                    <div
                      style={{
                        marginBottom: 16,
                      }}
                    >
                      <div>
                        <span>{t("lang52")}</span>
                        <br />
                      </div>
                      <div>
                        <p>
                          {t("lang53")}
                          <br />
                          {t("lang54")}
                        </p>
                      </div>
                    </div>
                    <div>
                      <div
                        style={{
                          marginBottom: 16,
                        }}
                      >
                        <p>
                          <span>{t("lang55")}</span>
                          <br />‍<a href="tel:920012290">{t("lang56")}</a>
                        </p>
                      </div>
                      <div>
                        <p>
                          <span>{t("lang57")}</span>
                          <br />‍
                          <a href="mailto:info@captingirl.com">{t("lang58")}</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </Address>
                <ImageContainer>
                  <div>
                    <img src={ContactImage1} loading="lazy" alt="Riyadh" />
                  </div>
                </ImageContainer>
              </div>
            </Container>
          </Section>
          <Footer />
        </main>
      </LocomotiveScrollProvider>
    </>
  );
};

export default ContactUs;
