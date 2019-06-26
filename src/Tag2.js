import React from 'react'

const cssArea = {
  position: 'absolute',
  right: '-1px',
  top: '-1px',
  overflow: 'hidden',
}

const cssDiscount = {
  position: 'absolute',
  right: '-20px',
  top: '10px',
  height: '20px',
  lineHeight: '20px',
  textAlign: 'center',
  color: '#FFF',
  width: '100%',
  transform: 'rotate(40deg)',
  fontSize: '1em',
}

const Tag = ({
  text, width, height, style, disable
}) => {
  const areaStyle = {
    ...cssArea,
    width,
    height,
  }

  const disCountStyle = {
    ...cssDiscount,
    backgroundColor: disable ? '#DDD' : '#427AFB',
    ...style,
  }
  return (
    <div style={areaStyle}>
      <div style={disCountStyle}>{text}</div>
    </div>
  )
}

Tag.defaultProps = {
  text: '7 折',
  width: '85px',
  height: '55px',
  disable: true,
}

export {
  Tag,
}