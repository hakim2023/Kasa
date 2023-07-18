import React from 'react'
import starFull from './../../assets/star-full.svg'
import starEmpty from './../../assets/star-empty.svg'

export default function Rating(props) {
    const range = [1, 2, 3,4,5]

return (
    <div>
           {range.map((rangeElem) => props.rateValue>= rangeElem ? <span key={rangeElem.toString()}>   <img src={starFull} alt="star-full" /></span> :<img src={starEmpty} alt="star-empty" />
            )}
         
        </div>
    )
}
