import './Accordion.scss'
import React, { useState } from 'react'
import arrowUp from './../../assets/arrow-up.svg'


export default function Accordion(props) {
const [selected , setSelected] = useState(false); 
// on fait appel a useState qui return 2 valeur(les valuerus sont retoutné dans un tableu array)
// la premiere est selected dans notre cas est une valeur boolean qui montre si le dropdown est ouvert ou pas
// la deuxime valeurs est  fonction quon utilise pour changer la state ou l'etat de dropdown 

  function toggleAccordion(){
    setSelected(!selected)
    // quand l'utiliateur clic sur le bouton - le setSelected chnage l'etat de dropdown  à l'opposé de ce qu'ill etait 
    // ( true devient false et false deviens true)
  }
  return (
    <div className='accordion'>
         <div className='accordion__container'>    
						  	   <div className='item' key={props.id}>
                        <div className='title__accordion'>
                          <h2 onClick={() => toggleAccordion()}>
                            {props.title} 
                            <span className='dropdown'>
                              <img className ={selected?'arrow__down arrow ':'arrow arrow__up'} src={arrowUp} alt="arrow-up" />
                            </span>
                          </h2>
                        </div>

                         <div className={selected ?'show__desc description__container':'hide__desc description__container'}>
                            <p className={selected ?'show':'hide'}>{props.description}</p> 
                         </div> 
                   </div>           
        
         </div>
    </div>
  )
}
