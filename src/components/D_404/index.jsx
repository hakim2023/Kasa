import React from 'react'
import { Link } from 'react-router-dom'
import './D_404.scss'
export default function D_404() {
  return (
    <div className='error__main'>
        <h1>404</h1>
        <h2>Oups! La page que vous demandez n'existe pas.</h2>
        <Link to="/">Retourner sur la page d’accueil</Link>
    </div>
  )
}
