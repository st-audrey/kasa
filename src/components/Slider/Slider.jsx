import { Component } from 'react'
import '../../styles/components/Slider.css'
import PropTypes from 'prop-types'
import slider_carret from '../../assets/slider_carret.png'

class Slider extends Component {
  constructor(props) {
    super(props)
    this.changeSlide = this.changeSlide.bind(this)
    this.picturesArray = this.props.picturesArray
    this.currentIndex = 1
    this.state = {
      value: 1
    }
  }

  changeSlide(direction) {
    if (direction == 'next' && this.currentIndex == this.picturesArray.length) {
      this.currentIndex = 1
    } else if (direction == 'next' && this.currentIndex != this.picturesArray.length) {
      this.currentIndex += 1
    } else if (direction == 'previous' && this.currentIndex == 1) {
      this.currentIndex = this.picturesArray.length
    } else {
      this.currentIndex -= 1
    }

    this.state != this.currentIndex ? this.setState({ value: this.currentIndex }) : null
  }

  render() {
    return (
      <div className="slider-container">
        <img className="slider-img" src={this.picturesArray[this.currentIndex - 1]} alt="" />
        <img
          src={slider_carret}
          alt="..."
          className="slider-next slider-command"
          onClick={() => this.changeSlide('next')}
        />
        <img
          src={slider_carret}
          alt="..."
          className="slider-previous slider-command"
          onClick={() => this.changeSlide('previous')}
        />
        <p className="slider-count">
          {this.currentIndex}/{this.picturesArray.length}
        </p>
      </div>
    )
  }
}

Slider.propTypes = {
  picturesArray: PropTypes.array.isRequired
}

export default Slider
