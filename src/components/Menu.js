import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "styled-components";
import Instagram from "../assets/Svgs/instagram.svg";
import Youtube from "../assets/Svgs/youtube.svg";
import Twitter from "../assets/Svgs/twitter.svg";
import Tiktok from "../assets/Svgs/tiktok.svg";
import SnapChat from "../assets/Svgs/snapchat.svg";
import { CursorContext } from "../helper/CursorContextProvider";

import ImageOne from "../assets/Images/award1.webp";
import ImageTwo from "../assets/Images/award2.webp";
import { useTranslation } from "react-i18next";

const Section = styled(motion.section)`
  top: 0;
  padding: none;
  position: fixed; /* optional depending on what you want to do in your app */
  width: 100%;
  height: 100vh;
  background-color: #352344;
  z-index: 6;
`;

const Container = styled.div`
  display: flex;
  padding: 25vh 8vw 60px;
`;

const MenuSection = styled.div`
  direction: ${(props) => (props.lang === "ar" ? "rtl" : "ltr")};
  position: static;
  display: grid;
  width: 100%;
  height: 100%;
  grid-auto-columns: 1fr;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: -webkit-max-content -webkit-max-content auto -webkit-max-content;
  grid-template-rows: max-content max-content auto max-content;
`;

const Footer = styled.div`
  grid-column-end: 8;
  grid-column-start: 2;
  grid-row-end: 5;
  grid-row-start: 4;
  align-self: end;
  justify-self: auto;
  align-self: end;
  width: 100%;

  @media (max-width: 768px) {
    grid-column-start: 1;
    grid-column-end: 8;
  }
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  grid-column-end: 4;
  grid-column-start: 2;
  grid-row-end: 3;
  align-self: start;
  justify-self: auto;

  @media (max-width: 768px) {
    grid-column-start: 1;
    grid-column-end: 6;
  }
`;

const LatestNews = styled.div`
  width: 100%;
  height: 100%;
  grid-column-end: 8;
  grid-column-start: 5;
  grid-row-end: 3;
  grid-row-start: 1;
  align-self: stretch;
  justify-self: auto;
  @media (max-width: 768px) {
    display: none;
  }
`;

const NewsLabel = styled.div`
  margin-bottom: 20px;
  span {
    color: white;
    font-size: 0.6vw;
  }
`;

const NewsContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: flex-start;
  align-items: flex-start;
`;

const LatestCardImage = styled(motion.div)`
  display: flex;
  overflow: hidden;
  width: auto;
  height: 14vw;
  margin-left: 2vw;
  align-items: stretch;
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
`;

const LinkContainer = styled.div`
  top: auto;
  left: 0;
  transform: translateY(100%);
  content: "";
  height: 2px;
  width: 100%;
  background-color: #fff;
  border-radius: 4px;
  transform: ${(props) => (props.hover ? "scaleX(1)" : "scaleX(0)")};
  transform-origin: left center;
  transition: transform 0.35s ease;
`;

const CustomLink = styled(NavLink)`
  color: #9e9e9e;
  font-size: 1.6vw;
  margin-bottom: 16px;
  width: auto;
  cursor: pointer;
  overflow: hidden;
  @media (max-width: 768px) {
    font-size: 4.5vw;
    margin-bottom: 4px;
    grid-column-end: 5;
  }
`;

const CustomLinkA = styled.a`
  color: #9e9e9e;
  font-size: 1.6vw;
  margin-bottom: 16px;
  @media (max-width: 768px) {
    font-size: 4.5vw;
    margin-bottom: 4px;
    grid-column-end: 5;
  }
`;

const BottomFooter = styled.div`
  display: flex;
  margin-top: 16px;
  padding-top: 16px;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #bc3b81;

  margin-bottom: 0px;
  color: #9e9e9e;
  font-size: 0.6vw;

  @media (max-width: 768px) {
    font-size: 2.4vw;
  }
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Icon = styled(motion.div)`
  width: 26px;
  height: 26px;
  margin-right: 12px;
  border-style: solid;
  border-width: 1px;
  border-color: #9e9e9e;
  border-radius: 50%;
`;

const IconLink = styled.a`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  img {
    height: 10px;
  }
`;

const Menu = ({ setMenuState, menu }) => {
  const { pathname } = useLocation();
  const [hover, setHover] = React.useState({
    main: false,
    aboutUs: false,
    contactUs: false,
    joinAsCaptain: false,
    latestNews: false,
    term: false,
    policy: false,
  });
  const { t, i18n } = useTranslation();
  const [, setCursor] = React.useContext(CursorContext);
  const toggleCursor = React.useCallback(() => {
    setCursor(({ active }) => ({ active: !active }));
  });

  const menuShow = {
    hidden: {
      opacity: 0,
      visibility:" hidden",
      transition: {
        ease: [0.455, 0.03, 0.515, 0.955],
        delay: 0.5,
        duration: 0.3,
      },
    },
    visible: {
      visibility: "visible",
      opacity: 1,
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.7 },
    },
  };

  const menuList = {
    hidden: {
      y: "60%",
      opacity: 0,
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.3 },
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.6 },
    },
  };

  const menuSocialMediaIcon = {
    hidden: {
      y: "80%",
      opacity: 0,
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.3 },
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.6 },
    },
  };

  const menuCopyRight = {
    hidden: {
      y: "80%",
      opacity: 0,
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.3 },
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.6 },
    },
  };

  const menuImageOne = {
    hidden: {
      y: "10%",
      opacity: 0,
      transition: {
        ease: [0.455, 0.03, 0.515, 0.955],
        delay: 0.2,
        duration: 0.4,
      },
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        ease: [0.455, 0.03, 0.515, 0.955],
        delay: 0.2,
        duration: 0.9,
      },
    },
  };

  const menuImageTwo = {
    hidden: {
      y: "10%",
      opacity: 0,
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.4 },
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.9 },
    },
  };

  return (
    <Section initial="hidden" animate={menu ? "visible" : "hidden"} variants={menuShow} d>
      {/* <Mouse /> */}
      <Container>
        <MenuSection lang={i18n.language}>
          <List>
            <CustomLink
              to="/"
              style={{
                color:
                  pathname === "/" ? "#fff" : hover.main ? "#fff" : "#9e9e9e",
              }}
              onMouseOver={() => setHover({ ...hover, main: true })}
              onMouseOut={() => setHover({ main: false })}
            >
              <motion.div
                initial="hidden"
                animate={menu ? "visible" : "hidden"}
                variants={menuList}
                style={{ display: "inline-block" }}
              >
                {t("lang01")} <LinkContainer hover={hover.main} />
              </motion.div>
            </CustomLink>
            <CustomLink
              to="/about-us"
              style={{
                color:
                  pathname === "/about-us"
                    ? "#fff"
                    : hover.aboutUs
                    ? "#fff"
                    : "#9e9e9e",
              }}
              onMouseOver={() => setHover({ ...hover, aboutUs: true })}
              onMouseOut={() => setHover(false)}
            >
              <motion.div
                initial="hidden"
                animate={menu ? "visible" : "hidden"}
                variants={menuList}
                style={{ display: "inline-block" }}
              >
                {t("lang02")} <LinkContainer hover={hover.aboutUs} />
              </motion.div>
            </CustomLink>
            <CustomLink
              to="/contact-us"
              style={{
                color:
                  pathname === "/contact-us"
                    ? "#fff"
                    : hover.contactUs
                    ? "#fff"
                    : "#9e9e9e",
              }}
              onMouseOver={() => setHover({ ...hover, contactUs: true })}
              onMouseOut={() => setHover(false)}
            >
              <motion.div
                initial="hidden"
                animate={menu ? "visible" : "hidden"}
                variants={menuList}
                style={{ display: "inline-block" }}
              >
                {t("lang03")} <LinkContainer hover={hover.contactUs} />
              </motion.div>
            </CustomLink>
            <CustomLinkA
              style={{ color: hover.joinAsCaptain ? "#fff" : "#9e9e9e" }}
              onMouseOver={() => setHover({ ...hover, joinAsCaptain: true })}
              onMouseOut={() => setHover(false)}
              href="https://register.captingirl.com/#/Registration"
            >
              <motion.div
                initial="hidden"
                animate={menu ? "visible" : "hidden"}
                variants={menuList}
                style={{ display: "inline-block" }}
              >
                {t("lang04")} <LinkContainer hover={hover.joinAsCaptain} />
              </motion.div>
            </CustomLinkA>
            <CustomLink
              to="/"
              style={{
                color:
                  pathname === "/latest-news"
                    ? "#fff"
                    : hover.latestNews
                    ? "#fff"
                    : "#9e9e9e",
              }}
              onMouseOver={() => setHover({ ...hover, latestNews: true })}
              onMouseOut={() => setHover(false)}
            >
              <motion.div
                initial="hidden"
                animate={menu ? "visible" : "hidden"}
                variants={menuList}
                style={{ display: "inline-block" }}
              >
                {t("lang05")} <LinkContainer hover={hover.latestNews} />
              </motion.div>
            </CustomLink>
            <CustomLink
              to="/term-and-condition"
              style={{
                color:
                  pathname === "/term-and-condition"
                    ? "#fff"
                    : hover.term
                    ? "#fff"
                    : "#9e9e9e",
              }}
              onMouseOver={() => setHover({ ...hover, term: true })}
              onMouseOut={() => setHover(false)}
            >
              <motion.div
                initial="hidden"
                animate={menu ? "visible" : "hidden"}
                variants={menuList}
                style={{ display: "inline-block" }}
              >
                {t("lang06")} <LinkContainer hover={hover.term} />
              </motion.div>
            </CustomLink>
            <CustomLink
              to="/privacy-and-policy"
              style={{
                color:
                  pathname === "/privacy-and-policy"
                    ? "#fff"
                    : hover.policy
                    ? "#fff"
                    : "#9e9e9e",
              }}
              onMouseOver={() => setHover({ ...hover, policy: true })}
              onMouseOut={() => setHover(false)}
            >
              <motion.div
                initial="hidden"
                animate={menu ? "visible" : "hidden"}
                variants={menuList}
                style={{ display: "inline-block" }}
              >
                {t("lang07")} <LinkContainer hover={hover.policy} />
              </motion.div>
            </CustomLink>
          </List>
          <LatestNews>
            <NewsLabel>
              <span>{t("lang08")}</span>
            </NewsLabel>
            <NewsContainer>
              <LatestCardImage
                initial="hidden"
                animate={menu ? "visible" : "hidden"}
                variants={menuImageOne}
              >
                <img
                  src={ImageOne}
                  loading="lazy"
                  sizes="100vw"
                  alt="Latest news"
                />
              </LatestCardImage>
              <LatestCardImage
                initial="hidden"
                animate={menu ? "visible" : "hidden"}
                variants={menuImageTwo}
              >
                <img
                  src={ImageTwo}
                  loading="lazy"
                  sizes="100vw"
                  alt="Latest news"
                />
              </LatestCardImage>
            </NewsContainer>
          </LatestNews>
          <Footer>
            <IconContainer>
              <Icon
                initial="hidden"
                animate={menu ? "visible" : "hidden"}
                variants={menuSocialMediaIcon}
              >
                <IconLink href="https://www.instagram.com/appcaptaingirl">
                  <img src={Instagram} loading="lazy" alt="Social Logo" />
                </IconLink>
              </Icon>
              <Icon
                initial="hidden"
                animate={menu ? "visible" : "hidden"}
                variants={menuSocialMediaIcon}
              >
                <IconLink href="https://www.youtube.com/channel/UCX6fqo64FyimKo4edXF5zvA">
                  <img src={Youtube} loading="lazy" alt="Social Logo" />
                </IconLink>
              </Icon>
              <Icon
                initial="hidden"
                animate={menu ? "visible" : "hidden"}
                variants={menuSocialMediaIcon}
              >
                <IconLink href="https://twitter.com/AppCaptain">
                  <img src={Twitter} loading="lazy" alt="Social Logo" />
                </IconLink>
              </Icon>
              <Icon
                initial="hidden"
                animate={menu ? "visible" : "hidden"}
                variants={menuSocialMediaIcon}
              >
                <IconLink href="https://tiktok.com/ZSeVfU7nF">
                  <img src={Tiktok} loading="lazy" alt="Social Logo" />
                </IconLink>
              </Icon>
              <Icon
                initial="hidden"
                animate={menu ? "visible" : "hidden"}
                variants={menuSocialMediaIcon}
              >
                <IconLink href="https://snapchat.com/add/capgill">
                  <img src={SnapChat} loading="lazy" alt="Social Logo" />
                </IconLink>
              </Icon>
            </IconContainer>
            <BottomFooter>
              <motion.p
                initial="hidden"
                animate={menu ? "visible" : "hidden"}
                variants={menuCopyRight}
              >
                {t("lang09")}
              </motion.p>
            </BottomFooter>
          </Footer>
        </MenuSection>
      </Container>
    </Section>
  );
};

export default Menu;
