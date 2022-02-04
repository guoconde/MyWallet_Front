import styled from "styled-components"
import Loader from "../Generic/Loader"
import loginSchema from "../Generic/ValidationLogin"
import useAuth from "../../hooks/useAuth"
import api from "../../services/api"

import { useForm } from 'react-hook-form'
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { yupResolver } from "@hookform/resolvers/yup"

export default function Login() {

    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const { auth, login } = useAuth()
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(loginSchema)
    })

    useEffect(() => {
        if (auth && auth.token) {
            navigate('/registros')
        }
    }, [auth, navigate])

    async function handleLogin(data) {

        setLoading(true)

        try {
            const promisse = await api.login(data);
            setLoading(false);
            login(promisse.data);
            navigate("/registros");
            
        } catch (error) {
            setLoading(false);

            alert('Erro, tente novamente');
        }

    }

    console.log(login)
    console.log(auth)

    return (
        <DivLogin>
            <p className="my-wallet">MyWallet</p>

            <FormLogin onSubmit={handleSubmit(data => handleLogin(data))}>
                <input {...register('email')} type="email" name="email" placeholder="E-mail" />
                <p>{errors.email?.message}</p>
                <input {...register('password')} type="password" name="password" placeholder="Senha" />
                <p>{errors.password?.message}</p>
                <Loader loading={loading} value='Entrar' />
            </FormLogin>

            <p onClick={() => navigate('/cadastrar')}>Primeira vez? Cadastre-se!</p>
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
    gap: 5px;

    input[type=submit] {
        margin-top: 15px;
    }
`