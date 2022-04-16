import { createGlobalStyle } from "styled-components"


const GlobalStyles = createGlobalStyle`

*,*::before,*::after{
    margin: 0;
    padding: 0;
}

body{
    overflow-x: hidden;
    font-family: Bahij thesansarabic ;
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
    font-family: 'Bahij thesansarabic';
    src: url('../assets/fonts/Bahij_TheSansArabic-Black.ttf') format('truetype');
    font-weight: 900;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Bahij thesansarabic';
    src: url('../assets/fonts/Bahij_TheSansArabic-ExtraLight.ttf') format('truetype');
    font-weight: 200;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Bahij thesansarabic';
    src: url('../assets/fonts/Bahij_TheSansArabic-SemiBold.ttf') format('truetype');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Bahij thesansarabic';
    src: url('../assets/fonts/Bahij_TheSansArabic-Bold.ttf') format('truetype'), url('../assets/fonts/Bahij_TheSansArabic-ExtraBold.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Bahij thesansarabic';
    src: url('../assets/fonts/Bahij_TheSansArabic-Light.ttf') format('truetype'), url('../assets/fonts/Bahij_TheSansArabic-SemiLight.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Bahij thesansarabic plain';
    src: url('../assets/fonts/Bahij_TheSansArabic-Plain.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Bahij thesansarabic plain';
    src: url('../assets/fonts/fontawesome-free-6.1.1-web/webfonts/fa-v4compatibility.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Bahij thesansarabic plain';
    src: url('../assets/fonts/fontawesome-free-6.1.1-web/webfonts/fa-brands-400.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Avenirltstd';
    src: url('../assets/fonts/AvenirLTStd-Medium.otf') format('opentype');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Avenirltstd book';
    src: url('../assets/fonts/AvenirLTStd-Book.otf') format('opentype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Avenirltstd';
    src: url('../assets/fonts/AvenirLTStd-Heavy.otf') format('opentype');
    font-weight: 800;
    font-style: normal;
    font-display: swap;
}

`
export default GlobalStyles;