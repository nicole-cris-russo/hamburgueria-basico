import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
        --color-primary: #27AE60;
        --color-primary-50: #93D7AF;
        --color-primary-secondary: #EB5757;
        --color-gray-100: #333333;
        --color-gray-50: #828282;
        --color-gray-20: #E0E0E0;
        --color-gray-0: #F5F5F5;
        --color-white: #fff;
        --color-negative: #E60000;
        --color-warning: #FFCD07;
        --color-sucess: #168821;
        --color-information: #155BCB;
    }
    * {
        margin: 0;
        padding: 0;
        list-style: none;
        text-decoration: none;
        color: black;
        font-family: 'Inter', sans-serif;
        box-sizing: border-box;
    }
    body, html {
        width: 100%;
        height: 100%;
    }
    button {
        cursor: pointer;
    }
`;
