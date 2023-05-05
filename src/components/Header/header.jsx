import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';

import '../../styles/components/Header.css'

import logo from '../../assets/kasa_logo.png'


function Header() {

    const location = useLocation()

    return (
        <header className='header-navbar'>
  
            <Link to="/">
                <img className='header-logo' width="211" height="68" src={logo} alt="Retourner à l'accueil"/>
            </Link>
            
            <nav className='header-nav'>
                <Link to="/" className={location.pathname === "/" ? "header-nav-link-active  header-nav-link" : " header-nav-link"}>Accueil</Link>
                <Link to="/about" className={location.pathname  === "/about" ? "header-nav-link-active  header-nav-link" : "header-nav-link"}>A propos</Link> 
            </nav>

        </header>
   
    )

}

export default Header