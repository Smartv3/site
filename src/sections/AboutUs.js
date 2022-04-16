import React from "react";
import { render } from 'react-dom';
import { AnimatedBg, Transition } from 'scroll-background';
import styled from "styled-components";
import Image1 from "../assets/Images/1.jpg";
import Image2 from "../assets/Images/2.jpg";
import Image3 from "../assets/Images/3.jpg";
import Image4 from "../assets/Images/4.jpg";
import Image5 from "../assets/Images/5.jpg";
import Image6 from "../assets/Images/6.jpg";

const Section = styled.section`
  direction: rtl;
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  /* background-color: #bc668c; */
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
  direction: rtl;
  @media (max-width: 768px) {
  }
`;

const CardMask = styled.div`
  width: 20.6vw;
  height: 34.7vw;
  margin-bottom: 2vw;
  perspective: 1000px;
  @media (max-width: 768px) {
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

  return (
    <>
    {/* <ScrollingColorBackground
  selector='.js-color-stop[data-background-color]'
  colorDataAttribute='data-background-color'
  initialRgb='rgb(0, 0, 0)'
/> */}
<AnimatedBg>
<Transition  from="#0D47A1" to="#388E3C" position={0.5}>
      <Section >
        <Container>
          <Grid>
            <Label
              data-scroll="0"
              data-scroll-speed="1"
              data-scroll-delay="0.1"
            >
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
            <Label
              data-scroll="0"
              data-scroll-speed="1"
              data-scroll-delay="0.1"
            >
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
      {/* </Section>
      <Section style={{backgroundColor: colorChang.className}}> */}
        <Container>
          <Grid>
            <Title
              data-scroll="0"
              data-scroll-speed="1.2"
              data-scroll-delay="0.8"
            >
              <p>رؤيتنا</p>
            </Title>
            <TitleText
              data-scroll="0"
              data-scroll-speed="1.2"
              data-scroll-delay="0.8"
            >
              <div>
                <p>
                  نسعى لتلبية احتياجات السوق السعودي و خلق بيئة عمل جاذبة و
                  متصدره في هذا المشروع بخدمة المجتمع و تحقيق طموحاته في مجال
                  أكثر خصوصية
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
              <p>قيمنا</p>
            </Title>
            <TitleText
              data-scroll="0"
              data-scroll-speed="1.2"
              data-scroll-delay="0.8"
            >
              <div>
                <p>
                  <strong>الهمة:</strong> نسعى دائما لخلق فرص تسهل من سير الحياة
                  بستخدام استراتيجيات ذكية ومبتكرة.
                </p>
                <p>
                  <strong>التأقلم:</strong> نتكيف مع احتياجات عملائنا المتغيرة
                  وظروف السوق لنقدم لكم خدمات تلبي رغباتكم.
                </p>
                <p>
                  <strong>معاير السلامة :</strong> سلامتكم مسؤليتنا لذلك نستخدم
                  اجود اساليب الامن و السلامة
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
              <p>هلا بالكابتن شريك النجاح</p>
            </Title>
            <TitleText
              data-scroll="0"
              data-scroll-speed="1.2"
              data-scroll-delay="0.8"
            >
              <div>
                <p>
                  <strong>-</strong> <strong>سيارتك</strong> صارت مشروعك متعة
                  قيادتك حولها الى <strong>أرباح</strong>.
                </p>
                <p>
                  <strong>-</strong> حسب احتياجك أختر دخلك راتب{" "}
                  <strong>شهري</strong> أو
                  <strong>نسبة</strong>.
                </p>
                <p>
                  <strong>-</strong> <strong>فريقنا معك</strong> طول رحلتك
                  للتأكد <strong>من راحتك وراحة عميلك</strong>.
                </p>
                <p>
                  <strong>-</strong> لأن راحتك مطلبنا و خصوصيتك اولويتنا أختر
                  عميلك من فئة <strong>النساء</strong> أو{" "}
                  <strong>النساء و الرجال</strong>.
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
              <p>لأنك عميل كابتن جيرل تستحق التميز - نوصلك يوميا و شهريا</p>
              <p>صممنا لك</p>
            </Title>
            <TitleText
              data-scroll="0"
              data-scroll-speed="1.2"
              data-scroll-delay="0.8"
            >
              <div>
                <p>
                  <strong>-</strong> الاشتراك الشهري <strong>60</strong> رحلة
                  بالشهر
                  <strong> 30 </strong> رحلة عليك <strong> 30 </strong>
                  رحلة علينا.
                </p>
                <p>
                  <strong>-</strong> توصيل <strong>يومي</strong> بكل{" "}
                  <strong>خصوصية</strong> و راحة.
                </p>
                <p>
                  <strong>-</strong> <strong>فئات</strong> توصيل متعددة{" "}
                  <strong>تخدم احتياجك</strong>.
                </p>
                <p>
                  <strong>-</strong> <strong>فريقنا متابع معك</strong> جميع
                  رحلاتك <strong>للتأكد من أمانك و راحتك</strong>.
                </p>
              </div>
            </TitleText>
          </Grid>
        </Container>
        <HomeNewsSection>
          <GridNewsCards>
            <HomeNewsInnerGrid>
              <CardMask
                data-scroll="0"
                data-scroll-speed="0"
                data-scroll-delay="0.1"
              >
                <NewCardWrap>
                  <CardImgWrap>
                    <CardImg>
                      <CardOverlay />
                      <img src={Image1} alt="Our news" />
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
                      <img src={Image2} alt="Our news" />
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
                      <img src={Image3} alt="Our news" />
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
                      <img src={Image4} alt="Our news" />
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
                      <img src={Image5} alt="Our news" />
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
                      <img src={Image6} alt="Our news" />
                    </CardImg>
                  </CardImgWrap>
                </NewCardWrap>
              </CardMask>
            </HomeNewsInnerGrid>
          </GridNewsCards>
        </HomeNewsSection>
      </Section>
      </Transition>
      </AnimatedBg>
    </>
  );
};

export default AboutUs;
