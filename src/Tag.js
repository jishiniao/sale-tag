import React from 'react'
import PropTypes from 'prop-types'

export default class Tag extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    width: PropTypes.string,
    height: PropTypes.string,
    style: PropTypes.object,
    disable: PropTypes.bool,
  }

  static defaultProps = {
    text: '7 折',
    width: '85px',
    height: '55px',
    disable: true,
  }

  render() {
    const { text, width, height, style, disable } = this.props

    const areaStyle = {
      width,
      height,
    }

    const disCountStyle = {}

    if(disable) {
      disCountStyle.backgroundColor = '#DDD'
    }

    return (
      <div className='sale-tag-area' style={areaStyle}>
        <div className='sale-tag-discount' style={disCountStyle}>{text}</div>
      </div>
    )
  }
}
