import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    
    body {
        background-color: #8C11BE;
        
        font-family: Raleway;
    }
    
    input,
    div.back-button {
        all: unset;
        box-sizing: border-box;

        height: 58px;

        background-color: white;

        color: black;
        font-size: 20px;
        font-weight: 400;

        border-radius: 5px;

        padding-left: 15px;
        
        ::placeholder {

            color: black;
            font-size: 20px;
            font-weight: 400;
        }
    }

    input[type=submit],
    div.back-button {
        background-color: #A328D6;

        color: white;
        font-size: 20px;
        font-weight: 700;
        text-align: center;
    }

    div.back-button {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 5px;
    }

    .my-wallet {
        color: white;
        font-family: Saira Stencil One;
        font-size: 32px;
        font-weight: 400;
        line-height: 50px;
        text-align: center;
    }

    .title {
        color: white;
        font-size: 26px;
        font-weight: 700;
    }

    p {
        color: white;
        font-size: 15px;
        font-weight: 700;
        line-height: 18px;
        text-align: center;

        padding-right: 20px;
    }
`