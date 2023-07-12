import { Link } from 'react-router-dom'

 
function Header() {
    return (
        <nav>
            <Link to="/">Accueil</Link>
            <Link to="/logements">Logements</Link>
            <Link to="/a_propos">À propos</Link>
        </nav>
    )
}

export default Header