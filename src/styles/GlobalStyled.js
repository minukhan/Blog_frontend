import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
    ${reset}
    :root{
        /* Fonts */
<<<<<<< HEAD
=======
        /* font-family: 'IBM Plex Sans KR', sans-serif; */
        font-family: 'Gowun Batang', sans-serif;
        font-weight: 200;
        /* Colors */
        --navy: #31516D;
        --light-gray : #ECF0F3;
        --gray : #96a3a9;
        --deep-gray : #2C2C2C;
        --black : #222222;
        --red : #D75858;
        --box-shadow: 8px 8px 20px rgba(174, 174, 192, 0.4),
    -8px -8px 20px rgba(255, 255, 255, 0.7);
        --border-radius : 16px;
        --max-width : 1400px;

        --primary-color: #f6f7fb;
        --white-color: #fff;
        --black-color: #18191a;
        --red-color: #a0a0a0;
>>>>>>> 19628298489669a899bac11d9fdb71f38e339043


        /* Colors */
        --navy: #043277;


    }    
    body {
        -ms-overflow-style: none;

    }
     
    ::-webkit-scrollbar {
        display: none;
    }
    button {
        /* background: none; */
        color: inherit;
        border: none;
        padding: 0;
        font: inherit;
        cursor: pointer;
        outline: inherit;
    }
    a {
        text-decoration: none;
    }
    a:visited {
        text-decoration: none;
    }
    
    textarea {
        resize: none;
    }
`;
