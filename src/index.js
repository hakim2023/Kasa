// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './styles/index.css';
// import Home from './pages/Home/';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Home />
//   </React.StrictMode>
// );

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/'
import Logements from './pages/Logements/'
import Header from './components/Header'
import Propos from './pages/Propos'
import Error from './components/Error'
 
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
        
        </Router>
    </React.StrictMode>,
document.getElementById('root')
)