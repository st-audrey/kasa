import { useParams } from 'react-router-dom'
import '../styles/Leasing.css'
import Slider from '../components/Slider/Slider'
import Tag from '../components/Tag/Tag'
import Leasings from '../data/logements.json'
import Error404 from '../components/Error/Error404'
import { ReactComponent as Star } from '../assets/star.svg'
import Accordion from '../components/Accordion/Accordion'

function Leasing() {
  const params = useParams()
  const leasingId = params.id
  const currentLeasing = Leasings.filter((leasing) => leasing.id == leasingId)[0]
  if (!currentLeasing) {
    return <Error404 />
  }

  const starGrey = '#E3E3E3'
  const starRed = '#FF6060'
  const currentLeasingRating = currentLeasing.rating

  let ratingColors = new Array(5)
  ratingColors.fill(starGrey, 0, 5)

  for (let i = 0; i < currentLeasingRating; i++) {
    ratingColors[i] = starRed
  }

  console.log(currentLeasing)

  return (
    <>
      <Slider picturesArray={currentLeasing.pictures} />
      <div className="leasing-infos-container">
        <div className="leasing-infos">
          <p className="leasing-title color-primary m-0">{currentLeasing.title}</p>
          <p className="leasing-location color-primary m-0">{currentLeasing.location}</p>
          <div className="leasing-tags-wrapper">
            {currentLeasing.tags.map((tag, i) => (
              <Tag key={i} tag={tag} />
            ))}
          </div>
        </div>

        <div className="leasing-host-rating">
          <div className="leasing-rating-container">
            {ratingColors.map((color, i) => (
              <Star key={i} fill={color} className="leasing-star" />
            ))}
          </div>
          <div className="leasing-host-container">
            <span className="leasing-host-name color-primary">{currentLeasing.host.name}</span>
            <img className="leasing-host-picture" src={currentLeasing.host.picture}></img>
          </div>
        </div>
      </div>
      <div className="leasing-equipment-container">
        <div className="leasing-equipment">
          <Accordion
            title="Description"
            content={currentLeasing.description}
            contentType="text"
            componentLocation="leasing"
          />
        </div>
        <div className="leasing-equipment">
          <Accordion
            title="Equipements"
            content={currentLeasing.equipments}
            contentType="list"
            componentLocation="leasing"
          />
        </div>
      </div>
    </>
  )
}

export default Leasing
