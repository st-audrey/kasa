import { Link } from 'react-router-dom'
import '../../styles/components/Card.css'
import PropTypes from 'prop-types'

function Card({ id, title, cover }) {
  Card.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired
  }
  return (
    <Link to={`/leasing/${id}`} className="card">
      <img className="card-cover" src={cover} alt={title} />
      <h3 className="card-title">{title}</h3>
    </Link>
  )
}

export default Card
