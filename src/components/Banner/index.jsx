import React from 'react'
import './Banner.scss'
export default function Banner(props) {
  return (
    <div className="banner propos__bg">
         <h1>{props.text} </h1>
    </div>
  )
}
