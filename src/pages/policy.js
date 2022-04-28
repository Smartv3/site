import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Menu from "../components/Menu";
import { motion } from "framer-motion";

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  padding-right: 8vw;
  padding-left: 8vw;
  display: flex;
  direction: ${(props) => (props.lang === "ar" ? "rtl" : "ltr")};
  align-items: center;
  background-color: #352344;
  color: #fff;
  @media (max-width: 768px) {
    padding-right: 24px;
    padding-left: 24px;
  }
  h1 {
    color: #bc3b81;
  }
  h3 {
    color: #bc668c;
    font-size: 24px;
    line-height: 30px;
    margin-top: 20px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  a {
    color: #bc668c;
  }
  ol {
    margin-top: 0px;
    margin-bottom: 10px;
    padding-left: 12px;
    display: block;
    list-style-type: decimal;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
  }
  p {
    margin-bottom: 10px;
  }
`;

const Container = styled.div`
  display: grid;
  width: 100%;
  align-items: start;
  grid-auto-columns: 1fr;
  grid-column-gap: 2vw;
  grid-row-gap: 16px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: auto auto auto auto 80px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 20px;
  }
`;

const MainHeader = styled.div`
  grid-column-end: 5;
  grid-column-start: 2;
  grid-row-end: 4;
  grid-row-start: 1;
  align-self: start;
  padding-top: 33vh;
  padding-bottom: 30px;
  @media (max-width: 768px) {
    grid-column-end: 8;
    grid-column-start: 1;
    grid-row-end: 3;
    grid-row-start: 1;
    align-self: end;
    padding-top: 10vh;
  }
`;

const LabelOne = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
  color: #ffffff;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 768px) {
    font-size: 3.4vw;
    margin-bottom: 16px;
  }
`;

const LabelTwo = styled(motion.h1)`
  overflow: hidden;
  color: #bc3b81;
  overflow: hidden;
  margin-top: 0px;
  margin-bottom: 0px;
  flex-direction: column;
  align-items: flex-start;
  font-size: 3.4vw;
  font-weight: 500;
  @media (max-width: 768px) {
    font-size: 8vw;
  }
`;

const PrivacyContainer = styled.div`
  grid-column-end: 7;
  grid-column-start: 2;
  grid-row-end: 5;
  grid-row-start: 4;
  align-self: start;
  color: #fff;
  font-size: 0.8vw;
  line-height: 160%;
  letter-spacing: 0.3px;
  @media (max-width: 768px) {
    grid-row-start: 3;
    grid-column-end: 7;
    grid-column-start: 1;
    font-size: 3.4vw;
  }
`;

const Privacy = () => {
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
        {/* <ScrollTriggerProxy/> */}

        <Header setMenuState={setMenuState} />
        <Menu setMenuState={setMenuState} menu={menuState} />
        <main data-scroll-container ref={containerRef}>
          <Section lang={i18n.language}>
            <Container>
              <MainHeader>
                <LabelOne>{t("lang67")}</LabelOne>
                <motion.div
                  initial="hidden"
                  animate={"visible"}
                  variants={container1}
                >
                  <LabelTwo variants={item}>
                    {t("lang68")}
                  </LabelTwo>
                </motion.div>
              </MainHeader>
              <PrivacyContainer>
                <div>
                  <ol>
                    <li>
                      <h3>{t("lang69")}</h3>
                      <p>{t("lang70")}</p>
                      <p>{t("lang71")}</p>
                    </li>
                    <li>
                      <h3>{t("lang72")}</h3>
                      <p>{t("lang73")}</p>
                    </li>
                  </ol>
                  <ol>
                    <h3>{t("lang74")}</h3>
                    <li>
                      <h3>{t("lang75")}</h3>
                      <p>{t("lang76")}</p>
                      <p>{t("lang77")}</p>
                      <p>{t("lang78")}</p>
                      <p>{t("lang79")}</p>
                    </li>
                    <li>
                      <h3>{t("lang80")}</h3>
                      <p>{t("lang81")}</p>
                      <p>{t("lang82")}</p>
                      <p>{t("lang83")}</p>
                    </li>
                  </ol>
                  <ol>
                    <h1>{t("lang84")}</h1>
                    <li>
                      <h3>{t("lang85")}</h3>
                      <p>{"lang86"}</p>
                    </li>
                    <li>
                      <h3>{t("lang87")}</h3>
                      <p>{t("lang88")}</p>
                    </li>
                    <li>
                      <h3>{t("lang89")}</h3>
                      <p>{t("lang90")}</p>
                    </li>
                    <h3>{t("lang91")}</h3>
                    <li>
                      <h3>{t("lang92")}</h3>
                      <ul>
                        <li>{t("lang93")}</li>
                        <li>{t("lang94")}</li>
                        <li>{t("lang95")}</li>
                        <li>{t("lang96")}</li>
                        <li>{t("lang97")}</li>
                      </ul>
                    </li>
                  </ol>
                  <p>
                    {t("lang98")}&nbsp;
                    <a href="callto:920012290">{t("lang99")}</a>
                    &nbsp;{t("lang100")}&nbsp;
                    <a href="mailto:info@captingirl.com">{t("lang101")}</a>
                  </p>
                </div>
              </PrivacyContainer>
            </Container>
          </Section>
          <Footer />
        </main>
      </LocomotiveScrollProvider>
    </>
  );
};

export default Privacy;
