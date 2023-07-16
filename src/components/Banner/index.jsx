import React from 'react'
import './Banner.scss'
export default function Banner(props) {
  const href = window.location.href;
  // console.log(href)
  return (
    <div className={href.includes('a_propos')? 'banner propos__bg' : 'banner home__bg'}>
       
         <h1>{props.text} </h1>
    </div>
  )
}
