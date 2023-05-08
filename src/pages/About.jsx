import Accordion from '../components/Accordion/Accordion'
import Banner from '../components/Banner/Banner'

import '../styles/About.css'

import themes from '../data/about.json'

function About() {
  const accordionThemes = themes

  return (
    <div>
      {
        <>
          <Banner />
          <div className="container">
            {accordionThemes.map((theme) => (
              <Accordion
                key={theme.id}
                title={theme.title}
                content={theme.content}
                contentType="text"
                componentLocation="about"
              />
            ))}
          </div>
        </>
      }
    </div>
  )
}

export default About
