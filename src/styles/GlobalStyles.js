import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        scrollbar-color: #888 #f1f1f1;
        scrollbar-width: thin;
    }

    button {
        border: none;
        cursor: pointer;
    }

    body {
        color: white;
        background-color: black;
        min-height: 100vh;
        width: 100%;
    }

    ::-webkit-scrollbar {
        width: 12px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #2c2c2c;
    }

    ::-webkit-scrollbar-track {
        background-color: #f1f1f1;
    }
`