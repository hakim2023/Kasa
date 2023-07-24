import { Link } from 'react-router-dom'
import './Header.scss'
import Logo from '../../assets/logo.png'
import { NavLink } from 'react-router-dom';

function Header() {
    
    return (<>
         <header>
       
       {/* le logo de la page qui mene vers home grace a l'element --link-- de react*/}
        <Link to="/">
          <img className='logo'src={Logo} alt="logo" />
        </Link>
        
        {/* la navigation aui contient deux elements (accueil et a propos)*/}
         <nav className="navbar">
              <NavLink
                exact="true"
                className="navbar__link"
                to="/"
              >
                Accueil
              </NavLink>
            
              <NavLink
                className="navbar__link"
                to="/a_propos"
              >
                À Propos
              </NavLink>
         </nav>
        </header>
        </>
    )
}



     

export default Header