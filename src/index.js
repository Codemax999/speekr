import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import * as firebase from 'firebase'

// initialize firebase
var config = {
  apiKey: "AIzaSyBRmhIddhqIDJfDoffPuOAEJNJw3-0gv5o",
  authDomain: "speekr-3e70d.firebaseapp.com",
  databaseURL: "https://speekr-3e70d.firebaseio.com",
  projectId: "speekr-3e70d",
  storageBucket: "",
  messagingSenderId: "309773234635"
}
firebase.initializeApp(config)

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
