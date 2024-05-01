import { createGlobalStyle } from "styled-components";

export const EstiloGlobal = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Poppins', sans-sarif;
        list-style: none;
    }

    body {
        background: linear-gradient(to right,#f5f5f5cc,#f5f5f5cc),url(https://servidor-estatico-tan.vercel.app/common-bg.svg);
        background-position: center;
    }

    .container {
        max-width: 1024px;
        margin: 40px auto;

        h1 {
            margin-bottom: 20px;
        }

        h2 {
            text-align: center;
            margin-top: 20px;
            margin-bottom: 20px;
            padding-top: 10px;
        }
    }

`