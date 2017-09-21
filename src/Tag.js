import React from 'react'
import PropTypes from 'prop-types'

// import './style.css'

export default class Tag extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    size: PropTypes.object,
    style: PropTypes.object,
  }

  static defaultProps = {
    text: '7 折',
    size: {
      width: '85px',
      height: '55px',
    }
  }

  render() {
    const { text, size, style } = this.props

    return (
      <div className={'area'} style={size}>
        <div className={'discount'} style={style}>{text}</div>
      </div>
    )
  }
}
