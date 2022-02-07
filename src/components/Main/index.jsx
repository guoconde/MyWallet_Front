import useAuth from "../../hooks/useAuth"
import api from "../../services/api"
import Wallet from "./Wallet"
import Swal from "sweetalert2"

import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { DivButtons, DivHeader, DivMain, DivRegisters } from "./MainCss"

export default function Main() {

    const navigate = useNavigate()

    const { auth } = useAuth()
    const [user, setUser] = useState('')
    const [registers, setRegisters] = useState()

    async function loadWallet() {
        try {
            const promisse = await api.getUser(auth)
            setUser(promisse.data.user)
            setRegisters(promisse.data.wallet)

        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Por favor faça o login novamente',
            })
            navigate('/')
        }
    }

    useEffect(() => {
        loadWallet()
        // eslint-disable-next-line
    }, [])

    async function logout() {

        await Swal.fire({
            title: 'Você realmente gostaria de deslogar?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#03AC00',
            cancelButtonColor: '#C70000',
            confirmButtonText: 'Sim',
            cancelButtonText: 'Não'
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.removeItem('auth')
                navigate('/')
            }
        })
    }

    return (
        <DivMain>
            <DivHeader>
                <header className="title">Olá, {user.name}</header>
                <ion-icon name="log-out-outline" onClick={logout}></ion-icon>
            </DivHeader>
            <DivRegisters>
                <Wallet wallet={registers} loadWallet={loadWallet} />
            </DivRegisters>
            <DivButtons>
                <div onClick={() => navigate('/entrada')}>
                    <ion-icon name="add-circle-outline"></ion-icon>
                    <p>Nova entrada</p>
                </div>
                <div onClick={() => navigate('/saida')}>
                    <ion-icon name="remove-circle-outline"></ion-icon>
                    <p>Nova saída</p>
                </div>
            </DivButtons>
        </DivMain>
    )
}