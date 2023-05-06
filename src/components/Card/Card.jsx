import '../../styles/components/Card.css'

function Card({
  id,
  title,
  cover,
  pictures,
  description,
  host,
  rating,
  location,
  equipements,
  tags,
}) {
  return (
    <article className="card">
      <img className="card-cover" src={cover} alt={title} />
      <h3 className="card-title">{title}</h3>
    </article>
  )
}

export default Card
