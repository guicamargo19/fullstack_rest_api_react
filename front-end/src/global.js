import { createGlobalStyle } from 'styled-components'

export const Colors = {
  whiteColor: '#fff',
  blackColor: '#000',
  overlayColor: 'rgba(0, 0, 0, 0.5)',
  bgProducts: 'rgba(0,0,0,0.1)',
  bgProductsHover: 'rgba(0,0,0,0.2)',
  bgInputs: '#e7e7e7',
  mainColor: '#155956',
  submitButtonColor: 'rgba(0,100,0, 0.8)',
  cancelButtonColor: 'rgba(178,34,34, 0.8)',
  updateButtonColor: 'rgba(0,0,128,0.8)'
}

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
            margin-top: 10px;
            margin-bottom: 10px;
            font-size: 30px;
        }
    }

`
