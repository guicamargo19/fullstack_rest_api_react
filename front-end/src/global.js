import { createGlobalStyle } from "styled-components";

export const EstiloGlobal = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Open Sans', sans-sarif;
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
            text-transform: uppercase;
            text-align: right;
            font-size: 64px;
            width: 566px;
            margin: 0 45%;
        }

        hr {
            height: 6px;
            width: 64%;
            margin-top: -43px;
            margin-bottom: 150px;
            border: none;
            background-color: #000;
        }

        h2 {
            text-align: center;
            margin-top: 20px;
            margin-bottom: 10px;
            font-size: 30px;
        }
    }

`