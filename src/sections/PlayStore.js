import React from "react";
import styled from "styled-components";

import GooglePlay from "../assets/Images/android.webp";
import AppleStore from "../assets/Images/apple.webp";

const Section = styled.section`
  position: relative;
  overflow: hidden;
  background-color: #352344;
`;

const Container = styled.div`
  padding: 8vw;
  position: relative;
  /* z-index: 4; */
  display: flex;
  overflow: hidden;
  max-width: 100%;
  align-items: center;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const CardImage = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  transform: rotate(0deg);
  color: #fff;
  text-decoration: none;
  img {
    width: 100%;
    max-width: none;
    object-fit: cover;
  }
`;

const PlayStore = () => {
  return (
    <Section>
      <Container>
        <CardImage
          data-scroll="0"
          data-scroll-speed="4"
          data-scroll-delay="0.1"
        >
          <a href="https://onelink.to/statav">
            <img src={GooglePlay} loading="lazy" alt="Google Play Icon" />
          </a>
        </CardImage>
        <CardImage
          data-scroll="0"
          data-scroll-speed="4"
          data-scroll-delay="0.1"
        >
          <a href="https://onelink.to/statav">
            <img src={AppleStore} loading="lazy" alt="Google Play Icon" />
          </a>
        </CardImage>
      </Container>
    </Section>
  );
};

export default PlayStore;
