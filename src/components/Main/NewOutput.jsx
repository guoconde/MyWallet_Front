import styled from "styled-components"
import inputOutputSchema from "../Generic/validationInputAndOutput"
import api from "../../services/api"
import useAuth from "../../hooks/useAuth"

import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { useLocation, useNavigate } from "react-router-dom"
import { useEffect } from "react"

export default function NewOutput() {

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

    
    async function handleOutput(data) {
        
        let newData = { ...data, type: 'output' }
        let path = 'saida'

        try {

            if (!location.state) {
                await api.postInputsAndOutputs(newData, auth, path);
            } else {
                const changePath = window.confirm('Você gostaria de mudar o registro para entrada?')
                if (changePath) {
                    path = 'entrada'
                    newData.type = 'input'
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
        <DivNewOutput>
            <p className="title">Nova saída</p>
            <FormNewOutput onSubmit={handleSubmit(data => handleOutput(data))}>
                <input {...register('values')} type="number" step="0.01" min='0' name="values" placeholder="Valor" defaultValue={defaultValues} />
                <p>{errors.values?.message}</p>
                <input {...register('description')} type="text" name="description" placeholder="Descrição" defaultValue={defaultDescription}/>
                <p>{errors.description?.message}</p>
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