import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  area: {
    position: 'absolute',
    right:'-1px',
    top: '-1px',
    overflow: 'hidden',
  },
  discount: {
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

    styles.area.width = width
    styles.area.height = height

    if(disable) {
      styles.discount.backgroundColor = '#DDD'
    }

    return (
      <div style={styles.area}>
        <div style={styles.discount}>{text}</div>
      </div>
    )
  }
}
