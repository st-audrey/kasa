import { Link } from 'react-router-dom'

import '../../styles/components/Header.css'
import logo from '../../assets/kasa_logo.png'

function Header() {

    return (
        <div className='header-navbar'>
  
            <img className='header-logo' src={logo} alt='...'/>
            
            <nav className='header-nav'>
                <Link to="/" className='header-nav-link'>Accueil</Link>
                <Link to="/about" className='header-nav-link'>A propos</Link>
            </nav>

        </div>
   
    )

}

export default Header