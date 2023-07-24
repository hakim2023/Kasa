import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './../../pages/Home'
import Propos from './../../pages/Propos'
import Error from './../../pages/Error'
import Logement from './../../pages/Logement'
import ScrollToTop from '../ScrollToTop'

export default function App() {
  return (
   <>
                <ScrollToTop/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/logement/:id" element={<Logement />}/>
                    <Route path="/a_propos" element={<Propos />}  />
                    <Route path="*" element={<Error />} />
               </Routes>
    </>
  )
}
