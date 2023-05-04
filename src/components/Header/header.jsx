import { Link } from 'react-router-dom'

import '../../styles/components/Header.css'
import logo from '../../assets/kasa_logo.png'

function Header() {

    return (
        <header className='header-navbar'>
  
            <Link to="/">
                <img className='header-logo' width="211" height="68" src={logo} alt="Retourner à l'accueil"/>
            </Link>
            
            <nav className='header-nav'>
                <Link to="/" className='header-nav-link'>Accueil</Link>
                <Link to="/about" className='header-nav-link'>A propos</Link>
            </nav>

        </header>
   
    )

}

export default Header