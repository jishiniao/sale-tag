import React from 'react'
import ReactDOM from 'react-dom'

import {
  Tag
} from './src'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Tag disable={false} />
      </div>
    )
  }

}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)