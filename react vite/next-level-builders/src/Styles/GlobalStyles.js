import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
:root {
    --color-blue-100: #749db7;
    --color-blue-200: #5b8baa;
    --color-blue-300: #41799c;
    --color-blue-400: #0a527f;
    
    --color-red-100: #edd7d6;
    --color-red-200: #e5c5bf;
    --color-red-300: #c4818a;
    --color-red-400: #9e2c3f;
    --color-red-500: #8a011b;

    --color-grey-100: #eae9e9;
    --color-grey-200: #d0cfd0;
    --color-grey-300: #c2c1c2;
    --color-grey-400: #838182;
    --color-grey-500: #636061;

    --color-tan-100: #fefdfc;
    --color-tan-200: #fbf2e6;
    --color-tan-300: #f9ebd8;

    --color-socials-li: #0a66c2;
    --color-socials-fb: #0866ff;
  }

  body {
    margin: 0;
    min-height: 100vh;
    font-family: "Montserrat", sans-serif;
    background-color: var(--color-red-500);
  }
`;

export default GlobalStyles;
