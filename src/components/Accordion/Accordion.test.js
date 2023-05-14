import { render, screen, fireEvent } from '@testing-library/react'
import { unmountComponentAtNode } from 'react-dom'
import Accordion from './Accordion'

let container = null
beforeEach(() => {
  // met en place un élément DOM comme cible de rendu
  container = document.createElement('div')
  document.body.appendChild(container)
})

describe('Accordion component', () => {
  test('check accordion content in /about', async () => {
    //Arrange
    render(<Accordion url="http://localhost:3000/about" />)
    //Act
    const carret = screen.getByRole('img')
    fireEvent.click(carret)
    await container.querySelector('.accordion-content-about')
    //Assert
    expect(container.querySelector('.accordion-content-about')).isInTheDocument
  })
})

afterEach(() => {
  // nettoie en sortie de test
  unmountComponentAtNode(container)
  container.remove()
  container = null
})
