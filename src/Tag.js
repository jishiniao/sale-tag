import React from 'react'
import PropTypes from 'prop-types'

import Area from './Area'

export default class Tag extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
  }

  static defaultProps = {
    text: '7折',
  }

  render() {
    const { text } = this.props
    return (
      <div>
        <div>{text}</div>
        <Area />
      </div>
    )
  }
}
