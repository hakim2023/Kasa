import React from 'react'
import './Banner.scss'

export default function Banner(props) {
  // window.location.href est l'url de la page courante 
  const href = window.location.href;

  return (
    //si l'url contient a_propos on ajoute propos__bg dans la className sinon home__bg 
    // l'arriere plan change en fonction de la className
    <div className={href.includes('a_propos')? 'banner propos__bg' : 'banner home__bg'}>    
         {/* dans chaque page ou on importe <Banner/>, on doit avoir une variable 'text'   */}
         <h1>{props.text} </h1>
    </div>
  )
}
