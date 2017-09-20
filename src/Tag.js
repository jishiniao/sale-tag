import React from 'react'
import PropTypes from 'prop-types'

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
      <div>{text}</div>
    )
  }
}
