import React from 'react'
import PropTypes from 'prop-types'

function Star({ value }) {
  Star.propTypes = {
    value: PropTypes.string.isRequired
  }
  return <div>{value}</div>
}

export default Star
