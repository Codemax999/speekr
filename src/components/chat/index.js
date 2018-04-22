// @flow
import React, { Component } from 'react'
import { Redirect } from 'react-router'
import { 
  StyledSider,
  NewMessageButton,
  StyledAvatar,
  StyledLayout,
  StyledHeader, 
  Messages,
  Footer,
  FabBtn,
  ModalIcon
} from './style'
import MessageList from '../message-list'
import { Layout, Icon, Modal, Button } from 'antd'
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
      <StyledLayout>

        {/* Username and logout button (small screen) */}
        <StyledHeader>
          <section className="chatHeader">
            <div>codemax</div>
            <div>
              <Icon type="ellipsis" onClick={() => this.setState({ landing: true })} />
            </div>
          </section>
        </StyledHeader>

        {/* Sider for (large screen) */}
        <StyledSider width={250}>
          <section>
            <StyledAvatar>C</StyledAvatar>
            <NewMessageButton 
              icon="plus" 
              size='large' 
              onClick={this.showModal}
              ghost>
              New Message
            </NewMessageButton>
          </section>
        </StyledSider>

        {/* Messages */}
        <Content>

          {/* List of MSGs */}
          <Messages>
            <MessageList />
          </Messages>

          {/* Record new message modal */}
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

        {/* Footer with REC btn (small screen) */}
        <Footer>
          <FabBtn
            shape="circle"
            icon="plus"
            onClick={this.showModal}
          />
        </Footer> 
      </StyledLayout>
    )
  }
}

export default Chat