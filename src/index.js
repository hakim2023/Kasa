import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/'
import Logements from './pages/Logements/'
import Header from './components/Header'
import Propos from './pages/Propos'
import Error from './pages/Error'
import Footer from './components/Footer'

 
ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/logements" element={<Logements />} />
                <Route path="/a_propos" element={<Propos />} />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer/>
        </Router>
    </React.StrictMode>,
document.getElementById('root')
)