import { Link, NavLink } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

import '../../styles/components/Header.css'

import logo from '../../assets/kasa_logo.png'

function Header() {
  const location = useLocation()

  return (
    <header className="header-navbar">
      <Link to="/">
        <img
          className="header-logo"
          width="211"
          height="68"
          src={logo}
          alt="Retourner à l'accueil"
        />
      </Link>

      <nav className="header-nav">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            location.pathname === '/' && isPending
              ? ''
              : location.pathname === '/' && isActive
              ? 'active header-nav-link-active header-nav-link color-primary'
              : 'header-nav-link color-primary'
          }>
          Accueil
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            location.pathname === '/about' && isPending
              ? ''
              : location.pathname === '/about' && isActive
              ? 'active header-nav-link-active header-nav-link color-primary'
              : 'header-nav-link color-primary'
          }>
          A propos
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
