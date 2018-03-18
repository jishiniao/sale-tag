import React from 'react'
import PropTypes from 'prop-types'

const cssArea = {
  position: 'absolute',
  right:'-1px',
  top: '-1px',
  overflow: 'hidden',
}

const cssDiscount = {
  position: 'absolute',
  right: '-20px',
  top:'10px',
  backgroundColor: '#427AFB',
  height: '20px',
  lineHeight: '20px',
  textAlign: 'center',
  color: '#FFF',
  width: '100%',
  transform:'rotate(40deg)',
  fontSize: '1em',
}

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
      ...cssArea,
      width,
      height,
    }

    const disCountStyle = {
      ...cssDiscount,
    }

    if(disable) {
      disCountStyle.backgroundColor = '#DDD'
    }

    return (
      <div style={areaStyle}>
        <div style={disCountStyle}>{text}</div>
      </div>
    )
  }
}
