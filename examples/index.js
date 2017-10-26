import React from 'react'
import ReactDOM from 'react-dom'

// import '../src/style.css'
import Tag, { TagStyle } from '../src/index'

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
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept()
}
