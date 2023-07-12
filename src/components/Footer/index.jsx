
import './Footer.scss'
import Logo from '../../assets/logo_footer.png'
 
function Footer() {
    return (<>
    <footer>
        <img src={Logo} alt="logo" />
          <h3>© {new Date().getFullYear()} Kasa. All rights reserved</h3>
        </footer>
        </>
    )
}

export default Footer