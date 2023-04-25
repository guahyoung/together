import { getColor, rem } from '@/theme/utils';
import { createGlobalStyle } from 'styled-components/macro';

const GlobalStyle = createGlobalStyle`
body {
  background-color : ${getColor('--black')};
  button,
  a {cursor: pointer};
  color: ${getColor('--white')};
  }
  body,
  body::before,
  body::after,
  body *,
  body *::before,
  body *::after {
    box-sizing: border-box;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  img {
    max-width: 100%;
    height: auto;
  }
  video {
    width: 100%;
    height: auto;
  }

  :root{
    --black: #000000;
    --white: #ffffff;
    --gray100: #e1e1e1;
    --gray200: #c4c4c4;
    --gray300: #a6a6a6;
    --gray400: #898989;
    --gray500: #6b6b6b;
    --gray600: #565656;
    --gray700: #404040;
    --gray800: #2b2b2b;
    --gray900: #151515;
    --primary: #182FFF;
    --secondary: #1728C0;
    --dark-bg1: #191919;
    --dark-bg2: #212121;

    --spacingXXS: ${rem(4)};
    --spacingXS: ${rem(12)};;
    --spacingS: ${rem(21)};
    --spacingM: ${rem(40)};

    --paddingL: 11vh 0 ;


    font-size: calc(8px + 0.5vw);

    * {
      transition: 0.1ms;
    } 
  }
`;

export default GlobalStyle;
