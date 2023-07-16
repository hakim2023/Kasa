import React from 'react'
import { useParams , Navigate } from 'react-router-dom'
import { logements } from '../../data/logements';



export default function Logement() {
  // const navigate = navigate();
  const {id}=useParams();
 const logement = logements.find((logement) => logement.id === id)
//  const {title, cover,ida} = logement
  // console.log(logement)
  if(logement !== undefined)
  return (<>
   
    
    <div className=''>      
         <div> {logement.title}</div>
         <img src={logement.cover} alt= {logement.title}/>
            
    </div>
    
      </>
  )
  else{
    return<>
    <Navigate to="/page404" replace={true} />
    </>
  }
}
