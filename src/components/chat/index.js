// @flow
import React, { Component } from 'react'
import { Redirect } from 'react-router'
import { currentUser, signOut } from '../../services/firebase'
import { 
  StyledSider,
  NewMessageButton,
  StyledUserInfo,
  StyledAvatar,
  StyledLayout,
  StyledHeader, 
  Messages,
  Footer,
  FabBtn,
  ModalIcon
} from './style'
import MessageList from '../message-list'
import { Layout, Icon, Modal } from 'antd'
const { Content } = Layout

type State = {
  landing: boolean,
  newMessage: boolean,
  visible: boolean,
  msg: string,
  username: string
}

class Chat extends Component<{}, State> {
  
  state: State = {
    landing: false,
    newMessage: false,
    visible: false,
    msg: 'Say something...',
    username: ''
  }

  componentDidMount() {
    const user = currentUser()
    console.log(user)
    if (user) this.setState({ username: user.displayName})
  }

  // --- Sign Out ---
  signOutUser = () => {

    // sign out and redirect to landing page
    signOut().then(() => this.setState({ landing: true }))
  }


  // --- New Message Modal ---
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

    // state
    const { landing, username, visible, msg } = this.state

    // handle route change on success
    if (!!landing) return <Redirect to='/' />

    return (
      <StyledLayout>

        {/* Username and logout button (small screen) */}
        <StyledHeader>
          <section className="chatHeader">
            <div>SPEEKR</div>
            <div>
              <Icon type="ellipsis" onClick={this.signOutUser} />
            </div>
          </section>
        </StyledHeader>

        {/* Sider for (large screen) */}
        <StyledSider width={250}>
          <section>
            <StyledUserInfo>
              <StyledAvatar>C</StyledAvatar>
              <h3>{username}</h3>
            </StyledUserInfo>
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
            visible={visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            <p>{msg}</p>
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