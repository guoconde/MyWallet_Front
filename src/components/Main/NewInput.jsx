import styled from "styled-components"

export default function NewInput() {
    return (
        <DivNewInput>
            <p className="title">Nova entrada</p>
            <FormNewInput>
                <input type="text" placeholder="Valor" />
                <input type="text" placeholder="Descrição" />
                <input type="submit" value="Salvar entrada" />
            </FormNewInput>
        </DivNewInput>
    )
}

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