import React from 'react'
import './Carousel.scss'
import { logements } from '../../data/logements'

export default function Carousel(props) {
  // const photos = [];
  // logements.forEach(logement => {
  //   photos.push(logement.pictures)
  // })

  // console.log(photos  )
  return (
    <div className='carousel__container'>
      
      <img src={props.pictures[0]} alt={props.title +' cover'}  />
      <div className='photos__number'>{'1/'+ props.pictures.length}</div>
    </div>
  )
}
