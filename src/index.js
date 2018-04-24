import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { initialize } from './services/firebase'

initialize()
ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
