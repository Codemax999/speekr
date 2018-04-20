// @flow
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Register from './components/register/register'
import Auth from './components/auth/auth'
import Chat from './components/chat/chat'

type Props = {}
type State = {}

class App extends Component<Props, State> {

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Register} />
          <Route path='/auth' component={Auth} />
          <Route path='/chat' component={Chat} />
        </Switch>
      </Router>
    )
  }
}


export default App
