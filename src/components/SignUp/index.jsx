import axios from "axios"
import styled from "styled-components"
import signUpSchema from "../Generic/ValidationRegister";
import Loader from "../Generic/Loader";

import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from "react";

export default function SignUp() {

    const navigate = useNavigate()
    
    const [loading, setLoading] = useState(false)

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(signUpSchema),
    })

    function handleSignUp(data) {

        setLoading(true)

            if(data.password !== data.confirmPassword) {
                alert('A senha esta diferente da confirmação!')
                return
            } else {
                delete data.confirmPassword
            }

            axios.post('http://localhost:5000/cadastrar', data)
            .then(resp => {
                console.log(resp)
            
                navigate('/registros')
            })
            .catch(() => {
                alert('Verifique os dados informados')
                setLoading(false)
            })
            
    }
    
    return (
        <DivSignUp>
            <p className="my-wallet">MyWallet</p>

            <FormSignUp onSubmit={handleSubmit(data => handleSignUp(data))}>
                <input {...register('name')} type="name" name="name" placeholder="Nome" />
                <p>{errors.name?.message}</p>
                <input {...register('email')} type="email" name="email" placeholder="E-mail" />
                <p>{errors.email?.message}</p>
                <input {...register('password')} type="password" name="password" placeholder="Senha" />
                <p>{errors.password?.message}</p>
                <input {...register('confirmPassword')} type="password" name="confirmPassword" placeholder="Confirme a senha" />
                <p>{errors.confirmPassword?.message}</p>
                <Loader loading={loading} value='Cadastrar'/>
            </FormSignUp>

            <p onClick={() => navigate('/')}>Já tem uma conta? Entre agora!</p>
        </DivSignUp>
    )
}

const DivSignUp = styled.div`
    width: 100%;
    height: 100vh;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 45px;
`

const FormSignUp = styled.form`
    width: 90%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;

    input[type=submit] {
        margin-top: 15px;
    }
`