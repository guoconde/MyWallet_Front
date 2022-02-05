// import api from "../../services/api"
// import useAuth from "../../hooks/useAuth"

// import { useEffect } from "react"

export default function Wallet({ wallet }) {

    console.log(wallet)

    if(!wallet) {
        return 'Não há registros de entrada ou saída'
    }

    if(wallet.length === 0) {
        return 'Não há registros de entrada ou saída'
    }


    return (
        <>
            {wallet.map((w, i) => 
            <div key={i}>
                <div className="date">{w.date}</div>
                <div className="description">{w.description}</div>
                <div className="values">{w.values}</div>
            </div>
                )}
        </>
    )
}