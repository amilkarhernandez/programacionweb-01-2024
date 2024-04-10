import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { Login } from './pages/Login'
import { Home } from './pages/Home'
import { Register } from './pages/Register'
import { Pruebas } from './pages/Pruebas'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/prueba" element={<Pruebas />} />
            </Routes>

        </BrowserRouter>
    )
}

export default App
