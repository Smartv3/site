import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Menu from "../components/Menu";
import { motion } from "framer-motion";
import Mouse from "../components/Mouse";

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
  h3 {
    color: #bc668c;
    font-size: 24px;
    line-height: 30px;
    margin-top: 20px;
    font-weight: bold;
    margin-bottom: 10px;
    @media (max-width: 768px) {
      font-size: 17px
    }
  }
  a {
    color: #bc668c;
  }
  ol {
    margin-top: 0px;
    margin-bottom: 10px;
    display: block;
    list-style-type: decimal;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 14px;
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

const TermContainer = styled.div`
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

const Term = () => {
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
        <Header setMenuState={setMenuState} />
        <Menu setMenuState={setMenuState} menu={menuState} />
        <Mouse/>
        <main data-scroll-container ref={containerRef}>
          <Section lang={i18n.language}>
            <Container>
              <MainHeader>
                <LabelOne>{t("lang102")}</LabelOne>
                <motion.div
                  initial="hidden"
                  animate={"visible"}
                  variants={container1}
                >
                  <LabelTwo variants={item}>
                    {t("lang103")}
                  </LabelTwo>
                </motion.div>
              </MainHeader>
              <TermContainer>
                <p>{t("lang104")}</p>
                <p>{t("lang105")}</p>
                <p>{t("lang106")}</p>
                <p>{t("lang107")}</p>
                <ol>
                  <li>
                    <h3>{t("lang108")}</h3>
                    <p>{t("lang109")}</p>
                  </li>
                  <li>
                    <h3>{t("lang110")}</h3>
                    <p>{t("lang111")}</p>
                  </li>
                  <li>
                    <h3>{t("lang112")}</h3>
                    <p>{t("lang113")}</p>
                  </li>
                  <li>
                    <h3>{t("lang114")}</h3>
                    <p>{t("lang115")}</p>
                  </li>
                  <li>
                    <h3>{t("lang116")}</h3>
                    <p>{t("lang117")}</p>
                  </li>
                  <li>
                    <h3>{t("lang118")}</h3>
                    <ul>
                      <li>{t("lang119")}</li>
                      <li>{t("lang120")}</li>
                      <li>{t("lang121")}</li>
                      <li>{t("lang122")}</li>
                      <li>{t("lang123")}</li>
                      <li>{t("lang124")}</li>
                    </ul>
                  </li>
                  <li>
                    <h3>{t("lang125")}</h3>
                    <ul>
                      <li>{t("lang126")}</li>
                      <li>{t("lang127")}</li>
                      <li>{t("lang128")}</li>
                      <li>{t("lang129")}</li>
                      <li>{t("lang130")}</li>
                      <li>{t("lang131")}</li>
                      <li>{t("lang132")}</li>
                      <li>{t("lang133")}</li>
                      <li>{t("lang134")}</li>
                      <li>{t("lang135")}</li>
                      <li>{t("lang136")}</li>
                      <li>{t("lang137")}</li>
                      <li>{t("lang138")}</li>
                      <li>{t("lang139")}</li>
                      <li>{t("lang140")}</li>
                    </ul>
                  </li>
                  <li>
                    <h3>{t("lang141")}</h3>
                    <p>{t("lang142")}</p>
                    <p>{t("lang143")}</p>
                  </li>
                  <li>
                    <h3>{t("lang144")}</h3>
                    <ul>
                      <li>{t("lang145")}</li>
                      <li>{t("lang146")}</li>
                    </ul>
                  </li>
                  <li>
                    <h3>{t("lang147")}</h3>
                    <p>{t("lang148")}</p>
                    <ul>
                      <li>{t("lang149")}</li>
                      <li>{t("lang150")}</li>
                      <li>{t("lang151")}</li>
                      <li>{t("lang152")}</li>
                      <li>{t("lang153")}</li>
                      <li>{t("lang154")}</li>
                      <li>{t("lang155")}</li>
                      <li>{t("lang156")}</li>
                      <li>{t("lang157")}</li>
                      <li>{t("lang158")}</li>
                      <li>{t("lang159")}</li>
                      <li>{t("lang160")}</li>
                    </ul>
                  </li>
                  <li>
                    <h3>{t("lang161")}</h3>
                    <p>{t("lang162")}</p>
                    <p>{t("lang163")}</p>
                  </li>
                  <li>
                    <h3>{t("lang164")}</h3>
                    <ul>
                      <li>{t("lang165")}</li>
                      <li>{t("lang166")}</li>
                      <li>{t("lang167")}</li>
                      <li>{t("lang168")}</li>
                      <li>{t("lang169")}</li>
                      <li>{t("lang170")}</li>
                      <li>{t("lang171")}</li>
                    </ul>
                  </li>
                  <li>
                    <h3>{t("lang172")}</h3>
                    <ul>
                      <li>{t("lang173")}</li>
                      <li>{t("lang174")}</li>
                      <li>{t("lang175")}</li>
                    </ul>
                  </li>
                  <li>
                    <h3>{t("lang176")}</h3>
                    <ul>
                      <li>{t("lang177")}</li>
                      <li>{t("lang178")}</li>
                      <li>{t("lang179")}</li>
                      <li>{t("lang178")}</li>
                      <li>{t("lang179")}</li>
                      <li>{t("lang180")}</li>
                      <li>{t("lang181")}</li>
                      <li>{t("lang182")}</li>
                      <li>{t("lang183")}</li>
                    </ul>
                  </li>
                  <li>
                    <h3>{t("lang184")}</h3>
                    <ul>
                      <li>{t("lang185")}</li>
                      <li>{t("lang186")}</li>
                      <li>{t("lang187")}</li>
                      <li>{t("lang188")}</li>
                      <li>{t("lang189")}</li>
                      <li>{t("lang190")}</li>
                      <li>{t("lang191")}</li>
                    </ul>
                  </li>
                  <li>
                    <h3>{t("lang192")}</h3>
                    <ul>
                      <li>{t("lang193")}</li>
                      <li>{t("lang194")}</li>
                      <li>{t("lang195")}</li>
                    </ul>
                  </li>
                  <li>
                    <h3>{t("lang196")}</h3>
                    <p>{t("lang197")}</p>
                  </li>
                </ol>
                <p>
                  {t("lang198")}&nbsp;
                  <a href="mailto:info@captingirl.com">{t("lang199")}</a>
                </p>
              </TermContainer>
            </Container>
          </Section>
          <Footer />
        </main>
      </LocomotiveScrollProvider>
    </>
  );
};

export default Term;
