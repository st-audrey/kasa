import '../../styles/components/Accordion.css'
import carret from '../../assets/carret.png'
import { useState } from 'react'
import PropTypes from 'prop-types'

function Accordion({ title, content, contentType, componentLocation }) {
  Accordion.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    contentType: PropTypes.string.isRequired,
    componentLocation: PropTypes.string.isRequired
  }

  const [open, setOpen] = useState(false)
  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <>
      <div
        className={
          componentLocation == 'about'
            ? 'accordion-container-about background-primary'
            : 'accordion-container-leasing background-primary'
        }>
        <div className="accordion-title-container">
          <p
            className={
              componentLocation == 'about' ? 'accordion-title-about' : 'accordion-title-leasing'
            }>
            {title}
          </p>
        </div>
        <div className="accordion-carret-container">
          <img
            className={open ? 'accordion-carret accordion-carret-up' : 'accordion-carret'}
            src={carret}
            alt="Cliquez pour afficher les détails"
            onClick={handleClick}
          />
        </div>
      </div>

      <div
        className={
          open
            ? 'accordion-open background-secondary accordion-show'
            : 'accordion-close background-secondary'
        }>
        {contentType == 'text' && componentLocation == 'about' ? (
          <p className="accordion-content-about color-primary">{content}</p>
        ) : contentType == 'text' && componentLocation == 'leasing' ? (
          <p className="accordion-content-leasing color-primary">{content}</p>
        ) : contentType == 'list' ? (
          <ul className="accordion-equipement-list color-primary">
            {content.map((equipment, i) => (
              <li key={i}>{equipment}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </>
  )
}

export default Accordion
