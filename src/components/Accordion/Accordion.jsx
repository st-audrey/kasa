import '../../styles/components/Accordion.css'
import carret from '../../assets/carret.png'

function Accordion(props) {
  return (
    <>
      <div className="accordion-container background-primary">
        <div className="accordion-title-container">
          <p className="accordion-title">{props.title}</p>
        </div>
        <div className="accordion-carret-container">
          <img className="accordion-carret" src={carret} alt="..." />
        </div>
      </div>
      <div className="accordion-content-container background-secondary">
        <p className="accordion-content color-primary">{props.content}</p>
      </div>
    </>
  )
}

export default Accordion
