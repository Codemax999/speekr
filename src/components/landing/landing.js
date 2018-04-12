// @flow
import React, { Component } from 'react'
import { Tabs } from 'antd'
import Auth from '../auth/auth'
import Register from '../register/register'

const TabPane = Tabs.TabPane

type Props = {}
type State = {}

class Landing extends Component<Props, State> {
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

export default Landing