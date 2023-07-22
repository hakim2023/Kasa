import { Link } from 'react-router-dom'
import './Header.scss'
import Logo from '../../assets/logo.png'
import { NavLink } from 'react-router-dom';

function Header() {
    
    return (<>
         <header>
       
        <Link to="/"><img className='logo'src={Logo} alt="logo" /></Link>
        
         <nav className="navbar">
              <NavLink
                exact="true"
                // activeClassName="navbar__link--active"
                className="navbar__link"
                to="/"
              >
                Accueil
              </NavLink>
            
              <NavLink
                // activeClassName="navbar__link--active"
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