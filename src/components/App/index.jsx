import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from '../../contexts/AuthContext'

import Login from '../Login'
import Main from '../Main'
import SignUp from '../SignUp'
import NewInput from '../Main/NewInput'
import NewOutput from '../Main/NewOutput'

import { ResetStyle } from '../assets/css/Reset'
import { GlobalStyle } from '../assets/css'

export default function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <ResetStyle />
                <GlobalStyle />
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/cadastrar' element={<SignUp />} />
                    <Route path='/carteira' element={<Main />} />
                    <Route path='/entrada' element={<NewInput />} />
                    <Route path='/saida' element={<NewOutput />} />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    )
}