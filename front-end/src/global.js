import { createGlobalStyle } from 'styled-components'

export const Colors = {
  whiteColor: '#fff',
  blackColor: '#000',
  overlayColor: 'rgba(0, 0, 0, 0.5)',
  bgProducts: 'rgba(0,0,0,0.1)',
  bgProductsHover: 'rgba(0,0,0,0.2)',
  bgInputs: '#e7e7e7',
  mainColor: '#0a3d62',
  submitButtonColor: '#0a3d62',
  cancelButtonColor: '#e55039',
  updateButtonColor: '#079992'
}

export const EstiloGlobal = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Open Sans', sans-sarif;
        list-style: none;

        input[type=number]::-webkit-inner-spin-button,
        input[type=number]::-webkit-outer-spin-button {
            -webkit-appearance: none;
            margin: 0;
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
            font-size: 50px;
            width: 566px;
            margin: 0 45%;
        }

        hr {
            height: 4px;
            width: 71%;
            margin-top: -34px;
            margin-bottom: 150px;
            border: none;
            background-color: ${Colors.blackColor}
        }

        h2 {
            text-align: center;
            margin-top: 10px;
            margin-bottom: 10px;
            font-size: 30px;
        }
    }

    @media screen and (max-width: 767px) {
        .container {
            max-width: 90%;

            h1 {
                font-size: 32px;
                width: 336px;
                margin: 0;
                
            }
            
            hr {
                width: 45%;
                margin-top: -23px;
            }

            h2 {
                font-size: 22px;
            }
        }
    }

    @media screen and (min-width: 768px) and (max-width: 1023px) {
        .container {
            max-width: 90%;

            h1 {
                font-size: 50px;
                width: 440px;
                margin: 0 35%;
                
            }
            
            hr {
                width: 57%;
            }
        }
    }
}

`
