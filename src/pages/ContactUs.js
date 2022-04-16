import { useRef, useState } from "react";
import styled from "styled-components";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Menu from "../components/Menu";

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
                    <p
                      style={{
                        fontSize: "0.8vw",
                        lineHeight: "100%",
                        letterSpacing: 1.5,
                      }}
                    >
                      ابقى على تواصل
                    </p>
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
            <div
              style={{
                width: "100%",
                paddingRight: "8vw",
                paddingBottom: "10vh",
                paddingLeft: "8vw",
              }}
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
                <div
                  style={{
                    gridColumnEnd: 9,
                    gridColumnStart: 2,
                    gridRowEnd: 5,
                    gridRowStart: 2,
                  }}
                >
                  <div>
                    <div>
                      <div>
                        <p
                          style={{
                            marginBottom: 24,
                            fontSize: "1.2vw",
                            lineHeight: "120%",
                            fontWeight: "800",
                          }}
                        >
                          الرياض
                        </p>
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
                </div>
                <div
                  style={{
                    gridColumnEnd: 9,
                    gridColumnStart: 4,
                    gridRowEnd: 5,
                    gridRowStart: 2,
                  }}
                >
                  <div
                    style={{
                      overflow: "hidden",
                      width: "37.5vw",
                      height: "30vh",
                      justifyContent: "flex-end",
                      alignItems: "flex-start",
                    }}
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        maxWidth: "none",
                        objectFit: "cover",
                      }}
                    >
                      <img
                        style={{
                          width: "100%",
                          height: "100%",
                          maxWidth: "none",
                          objectFit: "cover",
                        }}
                        src="https://www.srmg.com/storage/offices/TkoqrNGzE6SC3zujJFz1QC9cSYcNVJwSJAckRKlZ.jpg"
                        alt="Riyadh"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Section>
          <Footer />
        </main>
      </LocomotiveScrollProvider>
    </>
  );
};

export default ContactUs;
