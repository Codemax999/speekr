// @flow
import React, { Component } from 'react'
import { Redirect } from 'react-router'
import { 
  StyledHeader, 
  Messages,
  Footer,
  FabBtn,
  ModalIcon
} from './style'
import MessageList from '../message-list'
import { Layout, Icon, Modal } from 'antd'
const { Content } = Layout

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
        <StyledHeader>
          <section className="chatHeader">
            <div>codemax</div>
            <div>
              <Icon type="ellipsis" onClick={() => this.setState({ landing: true })} />
            </div>
          </section>
        </StyledHeader>
        <Content>

          {/* List of MSGs */}
          <Messages>
            <MessageList />
          </Messages>

          {/* Footer with REC btn */}
          <Footer>
            <FabBtn
              shape="circle"
              icon="plus"
              onClick={this.showModal}
            />
          </Footer> 
          <Modal
            title={<span><ModalIcon type='loading' />Recording new message</span>}
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