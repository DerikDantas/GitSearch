import { createGlobalStyle } from "styled-components";
import { colors } from "../assets/colors/colors";

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

    html {
        height: 100%;
        background-color: ${colors.background};
    }

    :focus-visible {
        outline: none;
    }

    .scroll-1::-webkit-scrollbar{
        width: 8px;
    }
    .scroll-1::-webkit-scrollbar-thumb{
        border-radius: 20px;
        background: #ddd;
    }
    .scroll-1::-webkit-scrollbar{
        width: 8px;
        height: 8px;
    }
`;
