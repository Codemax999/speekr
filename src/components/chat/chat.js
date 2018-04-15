// @flow
import React, { Component } from 'react'
import { Redirect } from 'react-router'
import { Layout, Icon, Button } from 'antd'
const { Header, Content } = Layout

type Props = {}
type State = {
  landing: boolean
}

class Chat extends Component<Props, State> {
  
  state: State = {
    landing: false
  }

  render() {

    // handle route change on success
    if (!!this.state.landing) return <Redirect to='/' />

    return (
      <Layout>

        {/* Username and logout button */}
        <Header style={{ position: 'fixed', width: '100%', padding: 0 }}>
          <nav style={{ 
            background: '#F8F8F8', 
            boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
            lineHeight: '64px', 
            width: '100%'}}>
            
            <section style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              padding: '0 20px'
            }}>
              <div style={{ color: '#2A5BA4', fontWeight: 500, letterSpacing: 0.3 }}>codemax</div>
              <div>
                <Icon type="ellipsis" onClick={() => this.setState({ landing: true })} />
              </div>
            </section>
          </nav>
        </Header>
        <Content style={{ marginTop: 64 }}>

          {/* List of MSGs */}
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
            <h2>Content</h2>
          </div>

          {/* Footer with REC btn */}
          <section style={{
            display: 'flex',
            height: 70,
            justifyContent: 'center',
            position: 'absolute',
            bottom: 0,
            width: '100%'
          }}>
            <Button
              shape="circle"
              icon="plus"
              size='large'
              style={{
                background: '#2699A6',
                border: 0,
                color: '#fff',
                height: 50,
                width: 50,
                boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)'
              }}
            />
          </section> 
        </Content>
      </Layout>
    )
  }
}

export default Chat