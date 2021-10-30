import { createGlobalStyle } from "styled-components";

export const GloabalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    *{
        font-family: 'Montserat', sans-serif;
    }
    div#root {
        width: 100%;
        height: 100%;
        overflow-x: hidden;
    }

    :focus-visible {
        outline: none;
    }
`;
