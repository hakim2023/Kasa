import { Link } from 'react-router-dom'
import './Header.scss'
import Logo from '../../assets/logo.png'
 
function Header() {
    return (<>
    <header>
        <img src={Logo} alt="logo" />
        <nav>
                <Link to="/">Accueil</Link>
                <Link to="/a_propos">À Propos</Link>
         </nav>
        </header>
        </>
    )
}

export default Header