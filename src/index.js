import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { initialize } from './services/firebase'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import messageReducer from './reducers/messages'
import userReducer from './reducers/user'

const allReducers = combineReducers({
  messages: messageReducer,
  user: userReducer
})

const store = createStore(
  allReducers, 
  {},
  window.devToolsExtension && window.devToolsExtension()
)

initialize()
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'))
registerServiceWorker()
