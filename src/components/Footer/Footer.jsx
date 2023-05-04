import { Link } from 'react-router-dom'

import '../../styles/components/Footer.css'
import logo from '../../assets/kasa_logo_bw.png'

function Footer() {

    return (
        <footer className='footer-container'>
  
            <Link to="/" className='m-0-auto'>
                <img className='footer-logo' width="122" height="40" src={logo} alt="Retourner à l'accueil"/>
            </Link>

            <p className='footer-txt m-0-auto'>2020 Kasa. All rights reserved.</p>

        </footer>
   
    )

}

export default Footer