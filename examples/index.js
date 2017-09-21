import React from 'react'
import ReactDOM from 'react-dom'

// import '../src/style.css'
import Tag, { TagStyle } from '../lib/index'

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
