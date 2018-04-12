// @flow
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Landing from './components/landing/landing'
import Chat from './components/chat/chat'

type Props = {}
type State = {}

class App extends Component<Props, State> {

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route path='/chat' component={Chat} />
        </Switch>
      </Router>
    )
  }
}


export default App
