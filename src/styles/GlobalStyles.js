import { createGlobalStyle } from "styled-components";
import ArbFONTSDINNextLTArabicBlack from "../assets/fonts/ArbFONTS-DINNextLTArabic-Regular-4.ttf";

const GlobalStyles = createGlobalStyle`

*,*::before,*::after{
    margin: 0;
    padding: 0;
}

html.has-scroll-smooth {
    bottom: 0;
    left: 0;
    overflow: hidden;
    position: fixed;
    right: 0;
    top: 0;
}

body{
    overflow-x: hidden;
    font-family: MyFont;
}

h1,h2,h3,h4,h5,h6{
    margin: 0;
    padding: 0;
}

a{
    color: inherit;
    text-decoration: none;
}

@font-face {
  font-family: 'MyFont';
  src: local('MyFont'), url(${ArbFONTSDINNextLTArabicBlack}) format('truetype');
}
`;
export default GlobalStyles;
