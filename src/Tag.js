import React from 'react'
import PropTypes from 'prop-types'

// import './style.css'

export default class Tag extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    width: PropTypes.string,
    height: PropTypes.string,
    style: PropTypes.object,
  }

  static defaultProps = {
    text: '7 折',
    width: '85px',
    height: '55px',
  }

  render() {
    const { text, width, height, style } = this.props

    const areaStyle = {
      width,
      height,
    }

    return (
      <div className={'area'} style={areaStyle}>
        <div className={'discount'} style={style}>{text}</div>
      </div>
    )
  }
}
