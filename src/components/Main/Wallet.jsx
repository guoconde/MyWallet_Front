import useAuth from "../../hooks/useAuth"
import api from "../../services/api"
import Swal from "sweetalert2"

import { useNavigate } from "react-router-dom"
import { DivMap, DivResult, DivReturn, DivValues, DivWallet } from "./MainCss"

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
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `${error.response.data}`,
            })
        }
    }

    function updateItem({ _id, type, values, description }) {
        
        if(type === 'input') {
            type = 'entrada'
        } else {
            type = 'saida'
        }

        navigate(`/${type}`, { state: {
            id: _id,
            values: values,
            description,
          }
        })
    }
    
    let isReturn = filterItems().toLocaleString('pt-BR', { minimumFractionDigits: 2 })
    
    return (
        <DivWallet>
            {wallet.map((w, i) =>
                <DivMap key={i}>
                    <div className="date">{w.date}</div>
                    <div className="description" onClick={() => updateItem(w)} >{w.description}</div>
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