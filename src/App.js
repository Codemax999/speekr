// @flow
import React, { Component } from 'react'
import { Tabs } from 'antd'
import Auth from './components/auth/auth'
import Register from './components/register/register'

const TabPane = Tabs.TabPane

type Props = { }
type State = { }

class App extends Component<Props, State> {

  render() {
    return (
      <Tabs defaultActiveKey="1">
        <TabPane tab="SIGN UP" key="1">
          <Auth />
        </TabPane>
        <TabPane tab="LOGIN" key="2">
          <Register />
        </TabPane>
      </Tabs>
    )
  }
}


export default App
