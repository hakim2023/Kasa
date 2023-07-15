import './Accordion.scss'
import React, { useState } from 'react'
import { valeurs_data } from '../../data/valeurs_data'
import arrowUp from './../../assets/arrow-up.svg'


export default function Accordion() {
const [selected , setSelected] = useState(null)

  function toggleAccordion(i){
    selected === i? setSelected(null) : setSelected(i)
   console.log(selected)
  }
  return (
    <div className='accordion'>
         <div className='accordion__container'>    
                    
              {valeurs_data.map((props,i) => (
						  	   <div className='item' key={props.id}>
                    <div>
                      <h2 onClick={() => toggleAccordion(i)}>{props.title} 
                        <span className='dropdown'>
                           <img className ={selected === i?'arrow__down':'arrow__up'} src={arrowUp} alt="arrow-up" />
                         </span>
                      </h2>
                    </div>
                          
                       <p className={selected === i?'show':''}>{props.description}</p> 
                    
                   </div>           
                ))}   
    </div>
    </div>
  )
}
