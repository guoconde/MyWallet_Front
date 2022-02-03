import styled from "styled-components"

import { ThreeDots } from "react-loader-spinner"

export default function Loader({ loading, value }) {

    return (
        loading === false ?
        <input type="submit" value={value} /> :
            <DivLoader>
                <ThreeDots type="ThreeDots" color="white" height={80} width={80} />
            </DivLoader>
    )
}

const DivLoader = styled.div`
    height: 58px;

    border-radius: 5px;

    margin-top: 15px;

    background-color: #A328D6;
    opacity: 0.7;

    display: flex;
    justify-content: center;
    align-items: center;
`