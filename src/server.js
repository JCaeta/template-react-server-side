import React from 'react'
import { renderToString } from 'react-dom/server'
import App from './components2/app'

module.exports = function render() {
  // render the App store static markup ins content variable
  let content = renderToString(<App/>);
  return {content};
}
