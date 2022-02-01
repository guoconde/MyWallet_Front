import styled from "styled-components"

export default function Login() {
    return (
        <DivLogin>
            <p className="my-wallet">MyWallet</p>

            <FormLogin>
                <input type="email" name="email" placeholder="E-mail" />
                <input type="password" name="password" placeholder="Senha" />
                <input type="submit" value="Entrar" />
            </FormLogin>

            <p>Primeira vez? Cadastre-se!</p>
        </DivLogin>
    )
}

const DivLogin = styled.div`
    width: 100%;
    height: 100vh;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 45px;
`

const FormLogin = styled.form`
    width: 90%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px;
`