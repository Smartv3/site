import { useRef, useState } from "react";
import styled from "styled-components";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import AboutUsCover from "../components/AboutUsCover";
import Footer from "../components/Footer";
import AboutUsImage from "../assets/Images/about3.webp";
import Menu from "../components/Menu";

const Section = styled.section`
  position: relative;
  /* min-height: 100vh; */
  overflow: hidden;
  padding-right: 8vw;
  padding-left: 8vw;
  display: flex;
  height: 70vh;
  align-items: center;
  @media (max-width: 768px) {
    padding-right: 24px;
    padding-left: 24px;
  }
`;

const AboutUsSection = styled.section`
  direction: rtl;
  position: relative;
  /* min-height: 100vh;
  height: 100vh; */
  overflow: hidden;
  width: 100%;
  padding-top: 5vh;
  padding-bottom: 5vh;
  background-color: #fff;
  color: #101010;
  @media (max-width: 768px) {
    padding-top: 0vh;
    padding-bottom: 0vh;
  }
`;

const Container = styled.div`
  direction: rtl;
  display: grid;
  width: 100%;
  align-items: start;
  grid-auto-columns: 1fr;
  grid-column-gap: 2vw;
  grid-row-gap: 16px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: auto auto auto auto;
  color: #fff;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  /* p{
    color: #000;
  } */
`;

const BodySection = styled.div`
  padding: 10vh 8vw;
  @media (max-width: 768px) {
    padding: 5vh 8vw;
  }
`;

const Label = styled.div`
  grid-column-end: 8;
  grid-column-start: 2;
  grid-row-end: 4;
  grid-row-start: 1;
  align-self: start;
  p {
    font-size: 1vw;
    font-weight: 400;
    @media (max-width: 768px) {
      font-size: 3.6vw;
    }
  }
  @media (max-width: 768px) {
    grid-column-start: 1;
    grid-column-end: 8;
  }
`;

const Paragraph = styled.div`
  grid-column-end: 8;
  grid-column-start: 2;
  grid-row-end: 4;
  grid-row-start: 3;
  align-self: start;
  p {
    font-size: 3.4vw;
    font-weight: 500;
    @media (max-width: 768px) {
      font-size: 10vw;
    }
  }
  @media (max-width: 768px) {
    grid-column-start: 1;
    grid-column-end: 8;
  }
`;

const ImageSection = styled.div`
  display: flex;
  width: 100%;
  height: 70vh;
  justify-content: space-between;
  align-items: stretch;
  @media (max-width: 768px) {
    height: 50vh;
    justify-content: center;
  }
`;

const ParagraphTwo = styled.div`
  grid-column-end: 5;
  grid-column-start: 2;
  grid-row-end: 4;
  grid-row-start: 2;
  @media (max-width: 768px) {
    grid-column-end: 8;
    grid-column-start: 1;
    grid-row-end: 5;
    grid-row-start: 1;
  }
`;

const ImageContainer = styled.div`
  grid-column-end: 9;
  grid-column-start: 6;
  grid-row-end: 5;
  grid-row-start: 1;
  @media (max-width: 768px) {
    grid-column-end: 9;
    grid-column-start: 1;
    grid-row-start: 5;
  }
`;

const Title = styled.div`
  color: #000;
  font-size: 2vw;
  line-height: 120%;
  font-weight: 400;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    font-size: 7.4vw;
  }
`;

const TitleText = styled.div`
  color: #000;
  font-size: 0.85vw;
  line-height: 150%;
  letter-spacing: 0.3;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    font-size: 3.4vw;
  }
`;

const AboutUs = () => {
  const [menuState, setMenuState] = useState(false);
  const containerRef = useRef(null);
  return (
    <>
      <LocomotiveScrollProvider
          options={{
            smooth: true,
            // ... all available Locomotive Scroll instance options
            smartphone:{
              smooth:true,
            },
            tablet:{
              smooth:true,
            }
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
        <AboutUsCover setMenuState={setMenuState} />
        <Menu setMenuState={setMenuState} menu={menuState}/>
        <main data-scroll-container ref={containerRef}>
          <Section>
            <Container>
              <Label
                data-scroll="0"
                data-scroll-speed="1"
                data-scroll-delay="0.1"
              >
                <p>من نحن</p>
              </Label>
              <Paragraph
                data-scroll="0"
                data-scroll-speed="1"
                data-scroll-delay="0.1"
              >
                <p>تطبيق سعودي يواكب</p>
                <p>تطلعات رؤية 2030 طموحنا عنان</p>
                <p>السماء</p>
              </Paragraph>
            </Container>
          </Section>
          <AboutUsSection>
            <BodySection>
              <Container>
                <ParagraphTwo>
                  <Title
                    data-scroll="0"
                    data-scroll-speed="1.2"
                    data-scroll-delay="0.8"
                  >
                    <p>
                      تطبيق كابتن جيرل <br /> الاأول من نوعه في المملكة العربية
                      السعودية
                    </p>
                  </Title>
                  <TitleText
                    data-scroll="0"
                    data-scroll-speed="1.2"
                    data-scroll-delay="0.8"
                  >
                    <div>
                      <p>
                        كابتن جيرل من الفرد الى المجتمع يعمل على توفير وسيلة نقل
                        سريعةوآمنة في أي وقت لنقل جميع أفراد المجتمع و الطلاب و
                        الموظفين حتى الاأطفال علي مدار ٢٤ ساعة.
                      </p>
                      <p>
                        و لان الخصوصية مبدأنا ختار كابتن رحلتك من النساء فقط او
                        النساد و الرجال و استمتع بالخصوصية و الأمان.
                      </p>
                      <p>
                        في رؤيتنا نسع اتلبية اتياجات السوق السعودي و خلق بيئة
                        عمل جاذبة و متصدره في هذا المشروع بخدمة المجتمع و تحقيق
                        طموحاته في مجال أكثر خصوصية.
                      </p>
                      <p></p>
                    </div>
                  </TitleText>
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
                        <strong>الهمة:</strong> نسعى دائما لخلق فرص تسهل من سير
                        الحياة بستخدام استراتيجيات ذكية ومبتكرة.
                      </p>
                      <p>
                        <strong>التأقلم:</strong> نتكيف مع احتياجات عملائنا
                        المتغيرة وظروف السوق لنقدم لكم خدمات تلبي رغباتكم.
                      </p>
                      <p>
                        <strong>معاير السلامة :</strong> سلامتكم مسؤليتنا لذلك
                        نستخدم اجود اساليب الامن و السلامة
                      </p>
                    </div>
                  </TitleText>
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
                        <strong>-</strong> سيارتك صارت مشروعك متعة قيادتك حولها
                        الى أرباح.
                      </p>
                      <p>
                        <strong>-</strong> حسب احتياجك أختر دخلك راتب شهري أو
                        نسبة.
                      </p>
                      <p>
                        <strong>-</strong> فريقنا معك طوال رحلتك للتأكد من راحتك
                        وراحة عميلك.
                      </p>
                      <p>
                        <strong>-</strong> لأن راحتك مطلبناوخصوصيتك اولويتنا
                        أختر عميلك من فئة النساء فقط أو النساء و الرجال.
                      </p>
                    </div>
                  </TitleText>
                </ParagraphTwo>
                <ImageContainer>
                  <div
                    data-scroll="0"
                    data-scroll-speed="3"
                    data-scroll-delay="0.4"
                  >
                    <ImageSection>
                      <img src={AboutUsImage} loading="lazy" alt="About" />
                    </ImageSection>
                  </div>
                </ImageContainer>
              </Container>
            </BodySection>
          </AboutUsSection>
          <Footer />
        </main>
      </LocomotiveScrollProvider>
    </>
  );
};

export default AboutUs;
