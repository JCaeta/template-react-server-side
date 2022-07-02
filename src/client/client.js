import React from 'react'
import {hydrate} from 'react-dom'
import App from './components/app'


/**
 * hydrate the page to make sure both server and client
 * side pages are identical. This includes markup checking,
 * react comments to identify elements and more.
 */

hydrate(
     <App />, document.querySelector('#app')
)
