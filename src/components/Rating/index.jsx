import React from 'react'
import starFull from './../../assets/star-full.svg'
import starEmpty from './../../assets/star-empty.svg'

export default function Rating(props) {
    const range = [1, 2, 3,4,5]

return (
    <div>
           {range.map((rangeElem,index) => props.rateValue>= rangeElem ? <span key={Math.random(index)}>  <img src={starFull} alt="⭐" /></span> : <span key={Math.random(index)}>  <img src={starEmpty} alt="⭐" /></span> 
            )}
         
        </div>
    )
}
