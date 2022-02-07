import styled from "styled-components"

const DivNewInput = styled.div`
    width: 100%;
    height: 100vh;
    
    padding-top: 25px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 45px;

    p {
        align-self: flex-start;
        padding-left: 25px;
    }
`

const FormNewInput = styled.form`
    width: 90%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;

    input[type=submit] {
        margin-top: 15px;
    }
`
const DivNewOutput = styled.div`
    width: 100%;
    height: 100vh;
    
    padding-top: 25px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 45px;

    p {
        align-self: flex-start;
        padding-left: 25px;
    }
`

const FormNewOutput = styled.form`
    width: 90%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;

    input[type=submit] {
        margin-top: 15px;
    }
`

const DivMain = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    padding: 25px;
`

const DivHeader = styled.div`
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    ion-icon {
        font-size: 30px;
        --ionicon-stroke-width: 40px;
        color: white;
    }
`

const DivRegisters = styled.div`
    width: 100%;
    height: 67vh;

    background-color: white;

    border-radius: 5px;

    display: flex;
    flex-direction: column;

    font-size: 20px;
    font-weight: 400;
    line-height: 23px;
    color: #868686;

    position: relative;
`

const DivButtons = styled.div`
    width: 100%;
    height: 120px;
    
    display: flex;
    gap: 15px;
    
    div{
        width: 100%;
        
        background-color: #A328D6;
        
        border-radius: 5px;
        
        padding: 15px;

        display: flex;
        flex-direction: column;
        justify-content: space-between;

        p {
            width: 50%;

            font-size: 17px;
            font-weight: 700;
            line-height: 20px;
            text-align: left;
        }

        ion-icon {
            font-size: 25px;
            color: white;
        }
    }

`

const DivWallet = styled.div`
    width: 100%;
    height: 67vh;

    padding: 20px 15px 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
    
    margin-bottom: 50px;
    overflow: scroll;
`

const DivReturn = styled.div`
    width: 100%;
    height: 67vh;
    
    display: flex;
    align-items: center;
    justify-content: center;
`

const DivMap = styled.div`
    width: 100%;
    
    display: flex;
    justify-content: space-between;
    gap: 10px;
    
    .date,
    .delete {
        font-size: 16px;
        font-weight: 400;
        text-align: left;
        color: #C6C6C6;
    }
    
    .description {
        width: 100%;
        
        font-size: 16px;
        font-weight: 400;
        line-height: 19px;
        text-align: left;
        color: black;
    }
`

const DivValues = styled.div`
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    text-align: right;
    color: ${props => props.typeColor === 'output' ? '#C70000' : '#03AC00'};
`

const DivResult = styled.div`
    box-sizing: border-box;

    width: 90%;
    height: 50px;

    background-color: white;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    padding: 20px 0;
    margin: 0 15px;

    position: absolute;
    bottom: 0;
    left: 0;

    p {
        color: black;
    }
`

export {
    DivNewInput,
    FormNewInput,
    DivNewOutput,
    FormNewOutput,
    DivMain,
    DivHeader,
    DivRegisters,
    DivButtons,
    DivWallet,
    DivResult,
    DivReturn,
    DivMap,
    DivValues
}