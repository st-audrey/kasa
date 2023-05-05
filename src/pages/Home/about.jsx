import Accordion from '../../components/Accordion/Accordion'
import Banner from '../../components/Banner/Banner'

import '../../styles/About.css'

function About() {
  const accordionTitles = ['Fiabilité', 'Respect', 'Service', 'Sécurité']

  return (
    <div>
      {
        <>
          <Banner />
          <div className="container">
            {accordionTitles.map((title, index) => (
              <Accordion key={`$index`} title={title} />
            ))}
          </div>
        </>
      }
    </div>
  )
}

export default About
