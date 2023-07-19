import './Accordion.scss'
import React, { useState } from 'react'

import arrowUp from './../../assets/arrow-up.svg'


export default function Accordion(props,i) {
const [selected , setSelected] = useState(null)

  function toggleAccordion(i){
    selected === i? setSelected(null) : setSelected(i)
  //  console.log(selected)
  }
  return (
    <div className='accordion'>
         <div className='accordion__container'>    
						  	   <div className='item' key={props.id}>
                        <div className='title__accordion'>
                          <h2 onClick={() => toggleAccordion(i)}>{props.title} 
                            <span className='dropdown'>
                              <img className ={selected === i?'arrow__down arrow ':'arrow arrow__up'} src={arrowUp} alt="arrow-up" />
                            </span>
                          </h2>
                        </div>

                         <div className='description__container'>
                            <p className={selected === i?'show':'hide'}>{props.description}</p> 
                          </div> 
                   </div>           
        
    </div>
    </div>
  )
}
