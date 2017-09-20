import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Div = ({className, children}) => (
  <div className={className}>
    {children}
  </div>
)

const Area = styled(Div)`
  width: 65px;
  height: 55px;
  background-color: #F00;
`
export default Area
