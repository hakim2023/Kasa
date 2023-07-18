import React from 'react'
import './Carousel.scss'
import arrowLeft from './../../assets/arrow-left.png'
import arrowRight from './../../assets/arrow-right.png'
import { useState } from 'react'

export default function Carousel(props) {
 const [index , setIndex] = useState(0)
function previous(){
  const isFirstSlide = index ===0;
  const newIndex = isFirstSlide? props.pictures.length - 1 : index-1;
  setIndex(newIndex)
}

function next(){
  const isLastSlide = index === props.pictures.length-1;
  const newIndex = isLastSlide?  0 : index  +1;
  setIndex(newIndex)
}

  return (
    <div className='carousel__container'>
      <img onClick={()=> previous()} className='left__arrow' src={arrowLeft} alt="left__arrow"/> 
      <img onClick={()=> next()} className='right__arrow' src={arrowRight} alt="right__arrow"/> 
      <img className='slide' src={props.pictures[index]} alt={props.title +' cover'}  />
      <div className='photos__number'>{index+1 + '/'+ props.pictures.length}</div>
    </div>
  )
}
