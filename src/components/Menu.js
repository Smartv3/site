import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import Instagram from "../assets/Svgs/instagram.svg";
import Youtube from "../assets/Svgs/youtube.svg";
import Twitter from "../assets/Svgs/twitter.svg";
import Tiktok from "../assets/Svgs/tiktok.svg";
import SnapChat from "../assets/Svgs/snapchat.svg";

import ImageOne from "../assets/Images/award1.webp";
import ImageTwo from "../assets/Images/award2.webp";

const Section = styled.section`
  top: 0;
  padding: none;
  position: fixed; /* optional depending on what you want to do in your app */
  width: 100%;
  height: 100vh;
  background-color: #352344;
  z-index: 9999;
  overflow: hidden;
  transform: ${(props) =>
    props.activerun ? "translateY(0vh)" : "translateY(200vh)"};
  transition: transform 0.05s ease-out;
`;

const Container = styled.div`
  display: flex;
  padding: 25vh 8vw 60px;
`;

const MenuSection = styled.div`
  direction: rtl;
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

const NavLogo = styled.div`
  position: fixed;
  left: 8vw;
  top: 80px;
  z-index: 5;
  svg {
    width: 5.1rem;
    height: 100%;
    overflow: visible;
    @media (max-width: 768px) {
      height: 50px;
    }
  }
  @media (max-width: 768px) {
    width: 3rem;
    left: 24px;
    top: 40px;
  }
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  right: 8vw;
  top: 80px;
  z-index: 5;
  height: 30px;
  border: none;
  @media (max-width: 768px) {
    right: 24px;
    top: 40px;
  }
`;

const Dash = styled.div`
  width: 20px;
  height: 2px;
  background-color: #fff;
  cursor: pointer;
`;

const Label = styled.div`
  color: #9e9e9e;
  margin-right: 16px;
  font-size: 0.8vw;
  @media (max-width: 768px) {
    font-size: 2.4vw;
  }
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
  transform: ${props => props.activerun ? 'translateY(0%)' : 'translateY(80%)'};
  opacity: ${props => props.activerun ? 1 : 0};
  transition: opacity 0.6s ease, transform 0.6s ease;
`;

const LatestCardImage = styled.div`
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
  transform: ${props => props.activerun ? 'translateY(0%)' : 'translateY(90%)'};
  opacity: ${props => props.activerun ? 1 : 0};
  transition: opacity 0.4s ease, transform 0.4s ease;
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
  transform: ${props => props.activerun ? 'translateY(0%)' : 'translateY(90%)'};
  opacity: ${props => props.activerun ? 1 : 0};
  transition: opacity 0.4s ease, transform 0.4s ease;
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
  transform: ${props => props.activerun ? 'translateY(0%)' : 'translateY(90%)'};
  opacity: ${props => props.activerun ? 1 : 0};
  transition: opacity 0.6s ease, transform 0.6s ease;
`;

const Icon = styled.div`
  width: 26px;
  height: 26px;
  margin-right: 12px;
  border-style: solid;
  border-width: 1px;
  border-color: #9e9e9e;
  border-radius: 50%;
  transition: all 500ms ease;
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
  console.log(pathname, menu);

  return (
    <Section activerun={menu}>
      <NavLogo>
        <Link to="/">
          <svg
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            x={0}
            y={0}
            viewBox="0 0 954.7 1162.7"
            style={{
              enableBackground: "new 0 0 954.7 1162.7",
            }}
          >
            <style>{".st0{fill:#fff}"}</style>
            <path
              className="st0"
              d="M75.5 1115.9c.7 11.6-19 28.2-29.2 33.3 8.8-6.8 14.3-13.9 16.7-20.7-8.8 1.4-19.7-3.4-20.4-15v-48.6c0-7.1-.3-14.3-.7-22.1-.3-7.3-.1-14.5.7-21.8-.1-.9.1-1.8.3-2.7 1.4-16 4.4-30.6 24.8-37.4-9.5 7.1-15 15.6-16 25.2 2.3-.7 4.7-1.1 7.1-1l6.1.7c6.8 2.4 10.2 7.1 10.2 14.6v7.1l41.5-8.5c0-5.8-.3-18.7-2.4-24.5-9.5-18.7-26.5-27.9-51.3-27.9v.7h-7.5c-8.8-.1-17.6 1.4-25.8 4.4C9.9 979.2 0 993.5 0 1014.9v100c-.3 21.4 9.9 36 29.6 43.5 8.3 3 17 4.5 25.8 4.4h7.5c24.8 0 41.8-9.2 51.3-27.9 2.4-6.8 3.7-12.6 3.7-17.7v-4.1l-42.5-6.1.1 8.9zM204 967.2c-26.2 2.7-50 19.7-50 49v144.5l1.4 1.4h40.5l1.7-1.4v-42.9l-16.3-3.7h46.2v46.9l1.7 1.4h41.2l1.4-1.4v-143.5c0-6.5-.7-11.9-2.4-16-10.7-25.8-39.6-37-65.4-34.3zm23.1 106.8h-29.9v-52.7c0-11.2 5.1-16.3 15.3-16 2.2.1 4.4.4 6.5 1-1-3.7-3.4-7.8-6.8-11.9s-7.1-8.5-11.2-12.9c9.2 6.8 20.1 13.9 24.5 29.2 1.1 1.8 1.7 4 1.7 6.1v57.2zM370.6 966.9h-31.3v-.3h-31.7V1162h43.2v-57.1h17.3c9.8.1 19.6-1.5 28.9-4.8 19-7.8 28.6-21.8 28.6-42.2v-45.6c-.1-6-1.2-12-3.4-17.7-9.8-18.5-26.8-27.7-51.6-27.7zm8.8 88.7c0 8.5-3.7 12.6-11.2 12.6h-18v-63.6h24.1c1.4-9.5-3.7-17.7-9.2-27.2 12.6 12.9 14.3 23.1 14.3 39.4v38.8zM461.4 1002.6h32.3v159.8h43.1v-159.8h32.3v-35.7H461.4zM655.5 967.2c-26.2 2.7-50 19.7-50 49v144.5l1.4 1.4h40.5l1.7-1.4v-42.9l-16.3-3.7H679v46.9l1.7 1.4h41.1l1.4-1.4v-143.5c0-6.5-.7-11.9-2.4-16-10.6-25.8-39.5-37-65.3-34.3zm23.1 106.8h-29.9v-52.7c0-11.2 5.1-16.3 15.3-16 2.2.1 4.4.4 6.5 1-1-3.7-3.4-7.8-6.8-11.9s-7.1-8.5-11.2-12.9c9.2 6.8 20.1 13.9 24.5 29.2 1.1 1.8 1.7 4 1.7 6.1v57.2zM759.2 967.2h43.2v195.2h-43.2zM954 967.6v-.3h-43.9c-.2 0-.3.1-.3.3v71.4l6.1 15.6c-15-23.8-30.3-49.6-45.6-75.5-11.6-17.7-32-16.3-32 7.5v175.1c0 .3.3.3.7.3h43.5l.3-.3v-70l-7.5-20.1 7.5 12.6 39.8 66.3c11.2 17.7 32 16.7 32-7.5V967.9c.1-.3-.3-.3-.6-.3zM661.3 925.1h1c6.3.2 12.5-1 18.4-3.4 12.2-5.8 22.8-15.6 22.8-30.6v-46.9h-41.1v28.6h12.2v10.9c.3 2.6-.3 5.3-1.7 7.5-1.4 8.2-7.1 15.3-17 21.4 2-2.7 4.4-5.1 6.5-7.8 2.2-2.1 3.6-4.8 4-7.8-6.5 2.7-14.6-.3-15.3-13.3v-59.5c-1.4-13.9 7.8-26.8 19.7-34.3-3.7 4.2-7.1 8.6-10.2 13.3-2.7 4.1-3.1 6.8-1.7 8.5 6.1-2 13.3 2 13.3 10.9v5.1l26.5-6.1c0-4.1-.3-13.6-1.7-17.7-6.1-13.3-17-20.1-33-20.1v-.3h-4.8c-5.7 0-11.3 1-16.7 3.1-12.6 5.4-18.7 16-18.7 31.6v71.7c0 6.8 1 12.6 3.1 17 5.8 12.1 17 18.2 34.4 18.2zM726.9 783.7h27.5v141.8h-27.5zM859.8 925.4v-10.9h-2.4c1.4-21.1-2.4-36.7-10.5-46.6-7.1 4.8-12.2 8.2-19.7 9.5 12.9-6.8 21.1-15.6 24.8-26.9v.7c.4-2.7.7-5.4.7-8.2v-26c-.1-4.4-.7-8.7-2-12.9-6.1-13.6-17.3-20.4-33-20.4h-40.1v141.8h27.5v-48.6h9.9c10.2 1.7 15.6 13.9 15.6 23.5l-.3 25.2h29.5zm-33.6-104V849c0 5.8-2.4 8.8-7.5 8.8h-11.6v-45.3h11.6c1.3 0 2.6.3 3.7 1 1-9.5-4.1-18-8.8-26.2 8.5 8.8 14.6 18.7 12.2 31.3.3.9.4 1.9.4 2.8zM886 907.1c5.8 12.2 17 18.4 33.7 18.4H953v-27.9h-42.5c-8.5-.7-14.3-8.8-18.7-15 6.1 4.1 11.9 8.2 18.7 9.2V784H883v106.1l.3 6.1c.3 3.7 1.2 7.4 2.7 10.9z"
            />
            <linearGradient
              id="SVGID_1_"
              gradientUnits="userSpaceOnUse"
              x1={199.088}
              y1={364.315}
              x2={708.457}
              y2={364.315}
            >
              <stop
                offset={0}
                style={{
                  stopColor: "#c2658a",
                }}
              />
              <stop
                offset={1}
                style={{
                  stopColor: "#663880",
                }}
              />
            </linearGradient>
            <path
              d="m655 317.7-11 3.4s-1.3-9.4-2.4-20.9-5.1-20-11.8-35.5-18.6-25.9-23-29.9-14.2-9.5-14.2-9.5-1.7-.7-13.7-6.2-33.8-6.2-33.8-6.2H379.6c-12.4 0-30.5 1.1-30.5 1.1-11.6 1.9-22.9 5.7-33.3 11.2-17.5 9.1-29.2 25-29.2 25s-3.1 3-11.3 19.4c-8.2 16.3-11.3 52-11.3 52l-11.1-3.7v-20l-.2-.3c-.2-.3-16-2.3-26-3-6.6-.4-13.3.7-19.4 3.2-2.7.9-6.9 6.7-8 9.8s1.8 11 1.8 11 2.3 5 10.6 9 32.6 5.6 32.6 5.6l3.7 5.8c-6.6 1.7-14.5 36.4-14.5 36.4v62.9c.7 4.9 4.6 9.2 10.8 12.9v37.4c0 15.1 12.3 27.4 27.4 27.4h31.2c15.1 0 27.4-12.3 27.4-27.4v-16.9c23.5 2.7 43.8 4 50.2 4.7 17.9 1.9 132.2 0 132.2 0 17.1-.7 42.9-2.8 65.8-5.1v17.2c0 15.1 12.3 27.4 27.4 27.4H637c15.1 0 27.4-12.3 27.4-27.4V449c1.6-1 3.1-2.1 4.5-3.4 5.4-5.2 5-9.6 5-9.6l-.6-32.3s-.4-23.7-.5-26.9c-.2-2.6-.5-5.1-1.1-7.6-1.5-16.1-12.4-30.1-12.4-30.1s1.6-6.6 2.1-6.3c.6.3 15.5-.4 21.7-1.5 5.2-.8 10.2-2.4 14.9-4.8 5.1-2.5 4.8-3.5 7.8-6.4 3-3 2.8-9.7 2.5-12.8-.3-3-2.6-5.2-4.9-7.3s-5.3-2.6-8.2-3.5-7.8-1.3-11.2-1.5c-3.4-.3-11.6.3-15.1.5-3.5.3-14 2.4-14 2.4l.1 19.8zM275.2 438.6c-17.3-11.6-18.4-49.3 0-59.8 18.4-11.2 83 26.5 84 41.8 1 14.6-66.7 29.5-84 18zm9.1-113.2v-11.6c0-44.5 36-80.5 80.5-80.5h178.4c44.5 0 80.5 36 80.5 80.5v11.6H284.3zm348.9 113.2c-17.3 11.6-85-3.4-84-18 1-15.3 66-53 84-41.8 18.3 10.5 17.3 48.2 0 59.8z"
              style={{
                fill: "url(#SVGID_1_)",
              }}
            />
            <linearGradient
              id="SVGID_2_"
              gradientUnits="userSpaceOnUse"
              x1={89.57}
              y1={456.743}
              x2={819.12}
              y2={456.743}
            >
              <stop
                offset={0}
                style={{
                  stopColor: "#c2658a",
                }}
              />
              <stop
                offset={1}
                style={{
                  stopColor: "#663880",
                }}
              />
            </linearGradient>
            <path
              d="M454.3 0C252.9 0 89.6 163.3 89.6 364.8c-.1 58.7 14.1 116.5 41.2 168.5 15.5 32 32.6 63.3 51.3 93.6 28.9 46.7 60.8 88.8 74.5 106.8 17.9 23.5 31.7 40.3 42.2 53 28.3 34.2 76 89.7 130 117.5 6.7 3.5 18.4 12.7 31.5 8 20.1-7.2 35.4-15.3 49.7-27 50.4-41.5 71.2-67.7 71.2-67.7 30.4-33.5 45.9-52.7 69.5-83 19.1-24.5 32.5-43.8 41.1-56.3 15.8-22.8 34-49.3 54.1-85.5 9.1-16.5 15.8-28.6 21.2-40 34.2-56.7 52.2-121.7 52.1-187.9C819.1 163.3 655.8 0 454.3 0zm0 665.4c-163.9 0-296.8-132.9-296.8-296.8S290.4 71.8 454.3 71.8s296.8 132.9 296.8 296.8-132.8 296.8-296.8 296.8z"
              style={{
                fill: "url(#SVGID_2_)",
              }}
            />
          </svg>
        </Link>
      </NavLogo>
      <Button onClick={() => setMenuState(false)}>
        <Label>إغلاق</Label>
        <Dash />
      </Button>
      <Container>
        <MenuSection>
          <List activerun={menu}>
            <CustomLink
              to="/"
              style={{color: pathname === "/" ? '#fff' : hover.main ? '#fff' : '#9e9e9e'}}
              activerun={menu}
              onMouseOver={() => setHover({...hover, main: true})}
              onMouseOut={() => setHover({main:false})}
            >
              <div style={{ display: "inline-block" }}>
                الرئيسية
                <LinkContainer hover={hover.main} />
              </div>
            </CustomLink>
            <CustomLink
              to="/about-us"
              style={{color: pathname === "/about-us" ? '#fff' : hover.aboutUs ? '#fff' : '#9e9e9e'}}
              activerun={menu}
              onMouseOver={() => setHover({...hover, aboutUs: true})}
              onMouseOut={() => setHover(false)}
            >
              <div style={{ display: "inline-block" }}>
                من نحن
                <LinkContainer hover={hover.aboutUs} />
              </div>
            </CustomLink>
            <CustomLink
              to="/contact-us"
              style={{color: pathname === "/contact-us" ? "#fff" : hover.contactUs ? '#fff' : '#9e9e9e'}}
              activerun={menu}
              onMouseOver={() => setHover({...hover, contactUs: true})}
              onMouseOut={() => setHover(false)}
            >
              <div style={{ display: "inline-block" }}>
                اتصل بنا
                <LinkContainer hover={hover.contactUs} />
              </div>
            </CustomLink>
            <CustomLinkA
              style={{color: hover.joinAsCaptain ? '#fff' : '#9e9e9e'}}
              activerun={menu}
              onMouseOver={() => setHover({...hover, joinAsCaptain: true})}
              onMouseOut={() => setHover(false)}
              href="https://register.captingirl.com/#/Registration"
            >
              <div style={{ display: "inline-block" }}>
              انضم ككابتن
              <LinkContainer hover={hover.joinAsCaptain} />
              </div>
            </CustomLinkA>
            <CustomLink
              to="/"
              style={{color: pathname === "/latest-news" ? "#fff" : hover.latestNews ? '#fff' : '#9e9e9e'}}
              activerun={menu}
              onMouseOver={() => setHover({...hover, latestNews: true})}
              onMouseOut={() => setHover(false)}
            >
              <div style={{ display: "inline-block" }}>
                اخبارنا
                <LinkContainer hover={hover.latestNews} />
              </div>
            </CustomLink>
            <CustomLink
              to="/term-and-condition"
              style={{color: pathname === "/term-and-condition" ? "#fff" : hover.term ? '#fff' : '#9e9e9e'}}
              activerun={menu}
              onMouseOver={() => setHover({...hover, term: true})}
              onMouseOut={() => setHover(false)}
            >
              <div style={{ display: "inline-block" }}>
                الشروط والاحكام
                <LinkContainer hover={hover.term} />
              </div>
            </CustomLink>
            <CustomLink
              to="/privacy-and-policy"
              style={{color: pathname === "/privacy-and-policy" ? "#fff" : hover.policy ? '#fff' : '#9e9e9e'}}
              activerun={menu}
              onMouseOver={() => setHover({...hover, policy: true})}
              onMouseOut={() => setHover(false)}
            >
              <div style={{ display: "inline-block" }}>
                سياسة الخصوصية
                <LinkContainer hover={hover.policy} />
              </div>
            </CustomLink>
          </List>
          <LatestNews>
            <NewsLabel>
              <span>أخبارنا</span>
            </NewsLabel>
            <NewsContainer activerun={menu}>
              <LatestCardImage>
                <img
                  src={ImageOne}
                  loading="lazy"
                  sizes="100vw"
                  alt="Latest news"
                  
                />
              </LatestCardImage>
              <LatestCardImage>
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
            <IconContainer activerun={menu}>
              <Icon>
                <IconLink href="https://www.instagram.com/appcaptaingirl">
                  <img src={Instagram} loading="lazy" alt="Social Logo" />
                </IconLink>
              </Icon>
              <Icon>
                <IconLink href="https://www.youtube.com/channel/UCX6fqo64FyimKo4edXF5zvA">
                  <img src={Youtube} loading="lazy" alt="Social Logo" />
                </IconLink>
              </Icon>
              <Icon>
                <IconLink href="https://twitter.com/AppCaptain">
                  <img src={Twitter} loading="lazy" alt="Social Logo" />
                </IconLink>
              </Icon>
              <Icon>
                <IconLink href="https://tiktok.com/ZSeVfU7nF">
                  <img src={Tiktok} loading="lazy" alt="Social Logo" />
                </IconLink>
              </Icon>
              <Icon>
                <IconLink href="https://snapchat.com/add/capgill">
                  <img src={SnapChat} loading="lazy" alt="Social Logo" />
                </IconLink>
              </Icon>
            </IconContainer>
            <BottomFooter>© جميع الحققوق محفوظة لشركة كابتن جيرل</BottomFooter>
          </Footer>
        </MenuSection>
      </Container>
    </Section>
  );
};

export default Menu;
