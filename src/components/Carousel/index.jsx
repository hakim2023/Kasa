import React from 'react'
import './Carousel.scss'
import arrowLeft from './../../assets/arrow-left.png'
import arrowRight from './../../assets/arrow-right.png'
import { useState } from 'react'

export default function Carousel(props) {
  //je définis l'index du premier slide à 0
 const [index , setIndex] = useState(0)
function previous(){
  // si on est sur la premiere slide cad index=0 alors isFirsSlide = true;
  const isFirstSlide = index === 0; 
   // on repart au dernier slide quand on est au premier
  const newIndex = isFirstSlide? props.pictures.length - 1 : index-1;
  setIndex(newIndex)
}

function next(){
    // si on est sur la derniere slide càd index=props.pictures.length-1 alors isLastSlide = true;
  const isLastSlide = index === props.pictures.length-1;
  // on repart au premier slide quand on arrive au dernier
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
