import styled from "styled-components"
import useAuth from "../../hooks/useAuth"
import api from "../../services/api"
import Wallet from "./Wallet"

import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Main() {

    const navigate = useNavigate()

    const { auth } = useAuth()
    const [user, setUser] = useState('')
    const [registers, setRegisters] = useState()

    async function loadWallet() {
        try {
            const promisse = await api.getUser(auth)
            // const wallet = await api.getInputsAndOutputs(auth)

            console.log(promisse.data)
            setUser(promisse.data.user)
            setRegisters(promisse.data.wallet)
            // console.log(wallet)

        } catch (error) {
            alert('Por favor faça o login novamente')
            navigate('/')
        }
    }

    useEffect(() => {
        loadWallet()
        // eslint-disable-next-line
    }, [])



    return (
        <DivMain>
            <DivHeader>
                <header className="title">Olá, {user.name}</header>
                <ion-icon name="log-out-outline"></ion-icon>
            </DivHeader>
            <DivRegisters>
                <Wallet wallet={registers} />
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
    height: 74vh;

    background-color: white;

    border-radius: 5px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    font-size: 20px;
    font-weight: 400;
    line-height: 23px;
    text-align: center;
    color: #868686;
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