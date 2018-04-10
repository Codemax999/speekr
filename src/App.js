// @flow
import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Landing from './components/landing/landing'
import Chat from './components/chat/chat'

const App = () => (
  <Router>
    <div>

      {/* Links */}
      <ul>
        <li>
          <Link to='/'>Landing</Link>
        </li>
        <li>
          <Link to='/chat'>Chat</Link>
        </li>
      </ul>

      <hr />

      {/* Pages */}
      <Route exact path='/' component={Landing} />
      <Route exact path='/chat' component={Chat} />

    </div>
  </Router>
)

export default App
