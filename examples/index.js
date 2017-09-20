import React from 'react'
import ReactDOM from 'react-dom'

import Tag from '../src/index'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Tag />
      </div>
    )
  }

}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept()
}
