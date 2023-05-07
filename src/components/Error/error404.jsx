import { Link } from 'react-router-dom'

import '../../styles/components/Error404.css'

function Error404() {
  return (
    <div className="error-container">
      <span className="error-404 color-primary m-0-auto">404</span>
      <p className="error-txt color-primary m-0-auto">
        Oups! La page que vous cherchez n'éxiste pas.
      </p>

      <Link to="/" className="error-backlink color-primary m-0-auto">
        Retour vers la page d'accueil
      </Link>
    </div>
  )
}

export default Error404
