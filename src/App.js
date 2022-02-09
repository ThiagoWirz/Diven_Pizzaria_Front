import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import './styles/reset.css'
import './styles/style.css'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>

    )
} export default App