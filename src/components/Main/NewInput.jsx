import styled from "styled-components"
import useAuth from "../../hooks/useAuth"
import inputOutputSchema from "../Generic/validationInputAndOutput"
import api from "../../services/api"

import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { useLocation, useNavigate } from "react-router-dom"
import { useEffect } from "react"

export default function NewInput() {
    
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {

        if (!localStorage.getItem('auth')) {
            alert('Por favor faça o login novamente')
            navigate('/')
        }
        // eslint-disable-next-line
    }, [])

    const { auth } = useAuth()

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(inputOutputSchema),
    })

    async function handleInput(data) {

        let newData = { ...data, type: 'input' }

        let path = 'entrada'

        try {

            if(!location.state) {
                await api.postInputsAndOutputs(newData, auth, path);
            } else {
                const changePath = window.confirm('Você gostaria de mudar o registro para saida?')
                 if(changePath) {
                     path = 'saida'
                     newData.type = 'output'
                }
                const isConfirm = window.confirm('Você realmente deseja alterar este registro?')
                isConfirm && await api.updateRegistry(location.state.id, auth, path, newData)
            }
            
            navigate('/carteira')
        } catch (error) {
            alert(error.response.data);
        }
    }

    const defaultValues = !location.state ? '' : location.state.values
    const defaultDescription = !location.state ? '' : location.state.description

    return (
        <DivNewInput>
            <p className="title">Nova entrada</p>
            <FormNewInput onSubmit={handleSubmit(data => handleInput(data))}>
                <input {...register('values')} type="number" step="0.01" min='0' name="values" placeholder="Valor" defaultValue={defaultValues} />
                <p>{errors.values?.message}</p>
                <input {...register('description')} type="text" name="description" placeholder="Descrição" defaultValue={defaultDescription} />
                <p>{errors.description?.message}</p>
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