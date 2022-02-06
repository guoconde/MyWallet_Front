import styled from "styled-components"
import useAuth from "../../hooks/useAuth"
import api from "../../services/api"

import { useNavigate } from "react-router-dom"

export default function Wallet({ wallet, loadWallet }) {

    const { auth } = useAuth()
    const navigate = useNavigate()

    if (!wallet) {
        return (
            <DivReturn>
                Não há registros de entrada ou saída
            </DivReturn>
        )
    }
    
    if (wallet.length === 0) {
        return (
            <DivReturn>
                Não há registros de entrada ou saída
            </DivReturn>
        )
    }

    function filterItems() {
        
        let filterInputs = 0
        let filterOutputs = 0
        
        for (let w of wallet) {
            if (w.type === 'input') {
                filterInputs += w.values
            } else {
                filterOutputs += w.values
            }
        }
        
        let result = filterInputs - filterOutputs
        
        return result
    }

    async function deleteItem(id) {
        
        try {
            await api.deleteRegistry(id, auth);

            const isConfirmed = window.confirm('Você realmente deseja deletar este registro?')
            if(isConfirmed) loadWallet()

        } catch (error) {
            alert(error.response.data);
        }
    }

    function updateItem(id, type) {
        
        if(type === 'input') {
            type = 'entrada'
        } else {
            type = 'saida'
        }

        navigate(`/${type}`, { state: {
            id: id,
          }
        })
        // console.log(auth)
        // await api.updateRegistry(id, auth, type)

    }

    
    let isReturn = filterItems().toLocaleString('pt-BR', { minimumFractionDigits: 2 })
    
    return (
        <DivWallet>
            {wallet.map((w, i) =>
                <DivMap key={i}>
                    <div className="date">{w.date}</div>
                    <div className="description" onClick={() => updateItem(w._id, w.type)} >{w.description}</div>
                    <DivValues className="values" typeColor={w.type} >{w.values.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</DivValues>
                    <div className="delete" onClick={() => deleteItem(w._id)} >x</div>
                </DivMap>
            )}
            <DivResult>
                <p>SALDO</p>
                {filterItems() < 0 ?
                    <DivValues typeColor={'output'}>{isReturn.toString().replace('-', '')}</DivValues> :
                    <DivValues typeColor={'input'}>{isReturn}</DivValues>
                }
            </DivResult>
        </DivWallet>
    )
}


const DivWallet = styled.div`
    width: 100%;
    height: 74vh;

    padding: 20px 15px 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
    
    overflow: scroll;
    
    position: relative;
`

const DivReturn = styled.div`
    width: 100%;
    height: 73vh;
    
    display: flex;
    align-items: center;
    justify-content: center;
`

const DivMap = styled.div`
    width: 100%;
    
    display: flex;
    justify-content: space-between;
    gap: 10px;
    
    .date,
    .delete {
        font-size: 16px;
        font-weight: 400;
        text-align: left;
        color: #C6C6C6;
    }
    
    .description {
        width: 100%;
        
        font-size: 16px;
        font-weight: 400;
        line-height: 19px;
        text-align: left;
        color: black;
    }
`

const DivValues = styled.div`
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    text-align: right;
    color: ${props => props.typeColor === 'output' ? '#C70000' : '#03AC00'};
`


const DivResult = styled.div`
    box-sizing: border-box;

    width: 90%;
    height: 70px;

    background-color: white;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    padding: 20px 0;
    margin: 0 15px;
    position: absolute;
    
    bottom: 0;
    left: 0;

    p {
        color: black;
    }
`