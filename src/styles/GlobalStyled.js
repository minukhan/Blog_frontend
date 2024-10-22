import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import "@radix-ui/themes/styles.css";

export const GlobalStyle = createGlobalStyle`
    ${reset}
    :root{
        /* Fonts */


        /* Colors */
        --navy: #31516D;
        --light-gray : #ECF0F3;


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
        color: inherit; 
    }
    a:visited {
        text-decoration: none;
    }
    
    textarea {
        resize: none;
    }

    /* radix-ui */
    .radix-themes {
        /* --gray-color: #ECF0F3; */
	    /* --gray-9: var(--gray-color); */
    }
`;
