import Banner from '../../components/Banner/Banner'
import Card from '../../components/Card/Card'
import '../../styles/Home.css'
import Leasings from '../../data/logements.json'

function Home() {
  return (
    <>
      <Banner />
      <div className="card-container background-secondary">
        <div className="card-wrapper">
          {Leasings.map((leasing) => (
            <Card
              key={leasing.id}
              title={leasing.title}
              cover={leasing.cover}
              pictures={leasing.pictures}
              description={leasing.description}
              host={leasing.host}
              rating={leasing.rating}
              location={leasing.location}
              equipements={leasing.equipements}
              tags={leasing.tags}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default Home
