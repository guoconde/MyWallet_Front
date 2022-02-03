import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from '../Login'
import Main from '../Main'
import SignUp from '../SignUp'

import { ResetStyle } from '../assets/css/Reset'
import { GlobalStyle } from '../assets/css'

export default function App() {
    return (

        <BrowserRouter>
            <ResetStyle />
            <GlobalStyle />
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/cadastrar' element={<SignUp />} />
                <Route path='/registros' element={<Main />} />
            </Routes>
        </BrowserRouter>
    )
}