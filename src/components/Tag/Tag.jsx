import React from 'react'
import PropTypes from 'prop-types'

import '../../styles/components/Tag.css'

function Tag({ tag }) {
  Tag.propTypes = {
    tag: PropTypes.string.isRequired
  }

  return <div className="tag background-primary">{tag}</div>
}

export default Tag
