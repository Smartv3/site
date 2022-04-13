import React from "react";
import styled from "styled-components";

const Section = styled.section`
  direction: rtl;
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  background-color: #bc668c;
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
  p {
    font-size: 2vw;
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
    grid-column-start: 2;
    grid-column-end: 8;
  }
`;

const AboutUs = () => {
  return (
    <Section>
      <Container>
        <Grid>
          <Label data-scroll="0" data-scroll-speed="1" data-scroll-delay="0.1">
            <p>كابتن جيرل</p>
          </Label>
          <Paragraph
            data-scroll="0"
            data-scroll-speed="1"
            data-scroll-delay="0.1"
          >
            <p>
              من الفرد الى المجتمع يعمل على توفير وسيلة نقل سريعة و آمنة في أي
              وقت لنقل جميع أفراد المجتمع
            </p>
          </Paragraph>
        </Grid>
      </Container>
      <Container>
        <Grid>
          <Label data-scroll="0" data-scroll-speed="1" data-scroll-delay="0.1">
            <p>لان الخصوصية مبدأنا</p>
          </Label>
          <Paragraph
            data-scroll="0"
            data-scroll-speed="1"
            data-scroll-delay="0.1"
          >
            <p>
              اختر كابتن رحلتك من النساء فقط او النساء و الرجال و استمتع
              بالخصوصية و الأمان
            </p>
          </Paragraph>
        </Grid>
      </Container>
    </Section>
  );
};

export default AboutUs;
