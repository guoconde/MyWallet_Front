import useAuth from "../../hooks/useAuth"
import api from "../../services/api"
import Swal from "sweetalert2"

import { useNavigate } from "react-router-dom"
import { DivMap, DivResult, DivReturn, DivValues, DivWallet } from "./MainCss"
import { ThreeDots } from "react-loader-spinner"

export default function Wallet({ wallet, loadWallet }) {

    const { auth } = useAuth()
    const navigate = useNavigate()

    if (!wallet) {
        return (
            <DivReturn>
                <ThreeDots type="ThreeDots" color="#8c11be" height={80} width={80} />
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
                filterInputs += parseFloat(w.values)
            } else {
                filterOutputs += parseFloat(w.values)
            }
        }

        let result = filterInputs - filterOutputs

        return result
    }

    async function deleteItem(id) {

        try {

            await Swal.fire({
                title: 'Você realmente deseja deletar este registro?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#03AC00',
                cancelButtonColor: '#C70000',
                confirmButtonText: 'Sim',
                cancelButtonText: 'Não'
            }).then(async (result) => {
                if (result.isConfirmed) {
                    await api.deleteRegistry(id, auth);
                    loadWallet()
                }
            })

        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `${error.response.data}`,
            })
        }
    }

    function updateItem({ _id, type, values, description }) {

        if (type === 'input') {
            type = 'entrada'
        } else {
            type = 'saida'
        }

        navigate(`/${type}`, {
            state: {
                id: _id,
                values: values,
                description,
            }
        })
    }

    let isReturn = filterItems().toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })

    return (
        <DivWallet>
            {wallet.map((w, i) =>
                <DivMap key={i}>
                    <div className="date">{w.date}</div>
                    <div className="description" onClick={() => updateItem(w)} >{w.description}</div>
                    <DivValues className="values" typeColor={w.type} >{parseFloat(w.values).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</DivValues>
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