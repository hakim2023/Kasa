import Banner from "../../components/Banner"
import Accordion from "../../components/Accordion"
import { valeurs_data } from '../../data/valeurs_data'
import './propos.scss'
function Propos() {
    const text = ''
    return (
        <>
     
        <Banner text={text} />
        <div className="accordion_collapse">  
           {valeurs_data.map((valeur) => (
          
               <Accordion  
                    key={valeur.id} 
                    title={valeur.title}
                    description={valeur.description}
                />
                ))}   
                </div> 
        </>
    )
}

export default Propos