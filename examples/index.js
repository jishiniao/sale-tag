import printMe from './print.js'

function component() {
  const element = document.createElement('div')
  element.innerHTML = 'Hello world'

  const btn = document.createElement('button')
  btn.innerHTML = 'click me and check the console!'
  btn.onclick = printMe
  element.appendChild(btn)

  return element
}

document.getElementById('root').appendChild(component())

if (module.hot) {
  // module.hot.accept('./print.js', function() {
  //   console.log('Accepting the updated printMe module!')
  //   printMe()
  // })
  module.hot.accept()
}
