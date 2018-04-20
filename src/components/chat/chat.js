// @flow
import React, { Component } from 'react'
import { Redirect } from 'react-router'
import MessageList from '../message-list/message-list'
import { Layout, Icon, Button, Modal } from 'antd'
const { Header, Content } = Layout

type Props = {}
type State = {
  landing: boolean,
  newMessage: boolean,
  visible: boolean,
  msg: string
}

class Chat extends Component<Props, State> {
  
  state: State = {
    landing: false,
    newMessage: false,
    visible: false,
    msg: 'Say something...'
  }
  showModal = () => {
    this.setState({ visible: true })
  }
  handleOk = () => {
    this.setState({ visible: false })
  }
  handleCancel = () => {
    this.setState({ visible: false })
  }
  render() {

    // handle route change on success
    if (!!this.state.landing) return <Redirect to='/' />

    return (
      <Layout>

        {/* Username and logout button */}
        <Header style={{ position: 'fixed', width: '100%', padding: 0, zIndex: 2 }}>
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
        <Content>

          {/* List of MSGs */}
          <section style={{ background: '#fff', padding: '64px 24px', minHeight: 280 }}>
            <MessageList />
          </section>

          {/* Footer with REC btn */}
          <section style={{
            display: 'flex',
            height: 70,
            justifyContent: 'center',
            position: 'fixed',
            bottom: 0,
            width: '100%',
            pointerEvents: 'none'
          }}>
            <Button
              shape="circle"
              icon="plus"
              size='large'
              onClick={this.showModal}
              style={{
                background: '#2699A6',
                border: 0,
                color: '#fff',
                height: 50,
                width: 50,
                boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
                pointerEvents: 'auto'
              }}
            />
          </section> 
          <Modal
            title={<span><Icon type='loading' style={{ marginRight: 8 }} />Recording new message</span>}
            destroyOnClose={true}
            closable={false}
            okText='Send'
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            <p>{this.state.msg}</p>
          </Modal>
        </Content>
      </Layout>
    )
  }
}

export default Chat