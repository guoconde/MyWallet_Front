import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from '../Login'

import { ResetStyle } from '../assets/css/Reset'
import { GlobalStyle } from '../assets/css'

export default function App() {
    return (

        <BrowserRouter>
            <ResetStyle />
            <GlobalStyle />
            <Routes>
                <Route path='/' element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}