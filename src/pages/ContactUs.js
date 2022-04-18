import { useRef, useState } from "react";
import styled from "styled-components";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import ContactImage1 from '../assets/Images/contactUs1.jpg'
import ContactImage2 from '../assets/Images/contactUs2.jpg'

const Section = styled.section`
  position: relative;
  /* min-height: 100vh; */
  overflow: hidden;
  padding-right: 8vw;
  padding-left: 8vw;
  display: flex;
  direction: rtl;
  align-items: center;
  @media (max-width: 768px) {
    padding-right: 24px;
    padding-left: 24px;
  }
  span {
    margin-bottom: 24px;
    font-size: 0.8vw;
    line-height: 120%;
    font-weight: 800;
    @media (max-width: 768px) {
      font-size: 14px;
  }
  }
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
  div{
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
  img{
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
    line-height: 120%;
    font-weight: 800;

  @media (max-width: 768px) {
    margin-bottom: 16px;
    font-size: 5vw;
    line-height: 120%;
    font-weight: 800;
  }
`;

const ContactUs = () => {
  const [menuState, setMenuState] = useState(false);
  const containerRef = useRef(null);
  return (
    <>
      <LocomotiveScrollProvider
        options={{
          smooth: true,
          // ... all available Locomotive Scroll instance options
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
        {menuState && <Menu setMenuState={setMenuState} />}
        <main data-scroll-container ref={containerRef}>
          <Section style={{ backgroundColor: "#000", color: "#fff" }}>
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
                    <HeaderTitle>ابقى على تواصل</HeaderTitle>
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
                  <h1
                    style={{
                      fontSize: "3.1vw",
                      marginBottom: 40,
                      fontWeight: 500,
                    }}
                  >
                    هل لديك أسئلة ، تتطلع إلى الانضمام إلى فريقنا أو تريد معرفة
                    المزيد؟
                  </h1>
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
                    gridRowStart: 5,
                  }}
                >
                  <div>
                    <div>
                      <div>
                        <p>التواصل</p>
                      </div>
                      <div>
                        <div>
                          <a href="mailto:info@srmg.com?subject=Advertising">
                            <p>
                              info@captingirl.com <br />
                              المملكة العربية السعوديه <br />
                              9200 122 90
                            </p>
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
            style={{
              paddingTop: "5vh",
              paddingBottom: "5vh",
              backgroundColor: "#fff",
            }}
          >
            <Container
            >
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
                  <p>مكاتبنا</p>
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
                      المملكة العربية السعودية
                      <br />
                    </div>
                  </div>
                </div>
                <Address
                >
                  <div>
                    <div>
                      <div>
                        <AddressLocation
                        >
                          الرياض
                        </AddressLocation>
                      </div>
                    </div>
                    <div
                      style={{
                        marginBottom: 16,
                      }}
                    >
                      <div>
                        <span>الموقع</span>
                        <br />
                      </div>
                      <div>
                        <p>
                          صندوق بريد 12213 ، طريق العليا ، <br />
                          الرياض العليا، المملكة العربية السعودية
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
                          <span>الهاتف</span>
                          <br />‍<a href="tel:920012290">920012290</a>
                        </p>
                      </div>
                      <div>
                        <p>
                          <span>بريد الالكتروني</span>
                          <br />‍
                          <a href="mailto:info@captingirl.com">
                            info@captingirl.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </Address>
                <ImageContainer>
                  <div
                  >
                      <img
                        src={ContactImage1}
                        loading="lazy"
                        alt="Riyadh"
                      />
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
