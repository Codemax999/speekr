// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { updateUser } from './actions/user'
import firebase from './services/firebase'
import Register from './components/register'
import Auth from './components/auth'
import Chat from './components/chat'

type Props = {
  onUpdateUser: (Object | null) => void,
  user: Object
}

class App extends Component<Props> {

  // --- Watch for User Auth Change ---
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.props.onUpdateUser(user)
    })
  }

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

const mapStateToProps = (state) => ({
  user: state.user
})

const mapActionsToProps = {
  onUpdateUser: updateUser
}

export default connect(mapStateToProps, mapActionsToProps)(App)
