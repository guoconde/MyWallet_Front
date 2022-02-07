import inputOutputSchema from "../Generic/validationInputAndOutput"
import api from "../../services/api"
import useAuth from "../../hooks/useAuth"
import Loader from "../Generic/Loader"
import Swal from "sweetalert2"

import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { useLocation, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { DivNewOutput, FormNewOutput } from "./MainCss"

export default function NewOutput() {

    const navigate = useNavigate()
    const location = useLocation()
    const [loading, setLoading] = useState(false)

    useEffect(() => {

        if (!localStorage.getItem('auth')) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Por favor faça o login novamente',
            })
            navigate('/')
        }
        // eslint-disable-next-line
    }, [])

    const { auth } = useAuth()

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(inputOutputSchema),
    })



    async function handleOutput(data) {

        setLoading(true)

        let newData = { ...data, type: 'output' }
        let path = 'saida'

        try {

            if (!location.state) {
                await api.postInputsAndOutputs(newData, auth, path);
            } else {

                await Swal.fire({
                    title: 'Você gostaria de mudar o registro para entrada?',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#03AC00',
                    cancelButtonColor: '#C70000',
                    confirmButtonText: 'Sim',
                    cancelButtonText: 'Não'
                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire(
                            path = 'entrada',
                            newData.type = 'input'
                        )
                    }
                })

                await Swal.fire({
                    title: 'Você realmente deseja alterar este registro?',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#03AC00',
                    cancelButtonColor: '#C70000',
                    confirmButtonText: 'Sim',
                    cancelButtonText: 'Não'
                }).then(async (result) => {
                    if (result.isConfirmed) {
                        await api.updateRegistry(location.state.id, auth, path, newData)
                    } else {
                        navigate('/carteira')
                    }
                })
            }

            setLoading(false)
            navigate('/carteira')

        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `${error.response.data}`,
            })
            setLoading(false)
        }
    }

    const defaultValues = !location.state ? '' : location.state.values
    const defaultDescription = !location.state ? '' : location.state.description

    return (
        <DivNewOutput>
            <p className="title">Nova saída</p>
            <FormNewOutput onSubmit={handleSubmit(data => handleOutput(data))}>
                <input {...register('values')} type="number" step="0.01" min='0' autoComplete="off" name="values" placeholder="Valor" defaultValue={defaultValues} />
                <p>{errors.values?.message}</p>
                <input {...register('description')} type="text" name="description" autoComplete="off" placeholder="Descrição" defaultValue={defaultDescription} />
                <p>{errors.description?.message}</p>
                <Loader loading={loading} value='Salvar saída' />
                <button onClick={() => navigate(-1)}>Voltar</button>
            </FormNewOutput>
        </DivNewOutput>
    )
}