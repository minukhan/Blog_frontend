import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
    ${reset}
    :root{
        /* Fonts */
        font-family: 'Gowun Batang', sans-serif;
        /* Colors */
        --navy: #31516D;
        --light-gray : #ECF0F3;

    }    
    body {
        -ms-overflow-style: none;
        border-radius: 30px;
        background: var(--light-gray);
        box-shadow: 13px 13px 25px #c3c3c3, -13px -13px 25px #fdfdfd;
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
