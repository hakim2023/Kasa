import React from 'react'
import './Details.scss'
import Rating from '../Rating'
export default function Details(props) {


  return (
    <div key={props.id} className='details__container'   >
        						
                 <div className='details__left' >
                      <h1>{props.title}</h1>
                      <h2>{props.location}</h2>
                       <div className='tags'>{props.tags}</div>

                      
                 </div>
                 <div className='details__right'>
                    <div className='profile__container'>
                        <h3>{props.host.name}</h3>
                        <div className='profile__img'><img src={props.host.picture} alt={props.host.name} /></div>
                    </div>
                    {/* <span className='rating'>{props.rating}</span> */}
                    <Rating rateValue={props.rating}/>
                    
                 </div>         
                     

                       
               
    </div>
  )
}
