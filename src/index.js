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
 
ReactDOM.render(
    <React.StrictMode>
            <Header/>
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/logements" element={<Logements />} />
            </Routes>
        
        </Router>
    </React.StrictMode>,
document.getElementById('root')
)