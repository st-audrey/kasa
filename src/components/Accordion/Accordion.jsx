import '../../styles/components/Accordion.css'
import carret from '../../assets/carret.png'
import { useState } from 'react'

function Accordion(props) {
  const [open, setOpen] = useState(false)

  const toggle = (i) => {
    setOpen(!open)
    return i
  }

  return (
    <>
      <div className="accordion-container background-primary">
        <div className="accordion-title-container">
          <p className="accordion-title">{props.title}</p>
        </div>
        <div className="accordion-carret-container">
          <img
            className={
              open ? 'accordion-carret accordion-carret-up' : 'accordion-carret'
            }
            src={carret}
            alt="..."
            onClick={toggle}
          />
        </div>
      </div>

      <div
        className={
          open
            ? 'accordion-open background-secondary accordion-show'
            : 'accordion-close background-secondary'
        }
      >
        <p className="accordion-content color-primary">{props.content}</p>
      </div>
    </>
  )
}

export default Accordion
