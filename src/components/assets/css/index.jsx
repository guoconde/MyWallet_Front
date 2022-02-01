import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        background-color: #8C11BE;

        font-family: Raleway;
    }

    input {
        width: 95%;
        height: 58px;

        background-color: white;

        color: black;
        font-size: 20px;
        font-weight: 400;

        border-radius: 5px;

        ::placeholder {
            padding-left: 15px;

            color: black;
            font-size: 20px;
            font-weight: 400;
        }
    }

    input[type=submit] {
        background-color: #A328D6;

        color: white;
        font-size: 20px;
        font-weight: 700;
        text-align: center;
    }

    p .title {
        color: white;
        font-size: 26px;
        font-weight: 700;
    }

    p .generic {
        color: white;
        font-size: 15px;
        font-weight: 700;
        line-height: 18px;
        text-align: center;
    }
`