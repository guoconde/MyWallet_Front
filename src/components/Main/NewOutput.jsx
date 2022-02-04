import styled from "styled-components"

export default function NewOutput() {
    return (
        <DivNewOutput>
            <p className="title">Nova saída</p>
            <FormNewOutput>
                <input type="text" placeholder="Valor" />
                <input type="text" placeholder="Descrição" />
                <input type="submit" value="Salvar saída" />
            </FormNewOutput>
        </DivNewOutput>
    )
}

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