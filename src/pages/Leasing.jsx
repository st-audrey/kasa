import { useParams } from 'react-router-dom'
import '../styles/Leasing.css'
import Slider from '../components/Slider/Slider'
import Tag from '../components/Tag/Tag'
import Leasings from '../data/logements.json'
import Error404 from '../components/Error/Error404'

function Leasing() {
  const params = useParams()
  const leasingId = params.id
  const currentLeasing = Leasings.filter((leasing) => leasing.id == leasingId)[0]

  if (!currentLeasing) {
    return <Error404 />
  }

  console.log(currentLeasing)

  return (
    <>
      <Slider />
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
          <div className="leasing-host-container">
            <p className="leasing-host-name color-primary">{currentLeasing.host.name}</p>
            <img className="leasing-host-picture" src={currentLeasing.host.picture}></img>
          </div>
        </div>
      </div>
    </>
  )
}

export default Leasing
