// @flow
import React, { Component } from 'react'
import { Redirect } from 'react-router'
import { connect } from 'react-redux'
import { updateUser } from '../../actions/user'
import { signOut } from '../../services/firebase'
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
  msg: string
}

type Props = {
  user: Object
}

class Chat extends Component<Props, State> {
  
  state: State = {
    landing: false,
    newMessage: false,
    visible: false,
    msg: 'Say something...',
    username: ''
  }

  // --- Sign Out ---
  onSignOut = () => {

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
    const { landing, visible, msg } = this.state
    const { user } = this.props

    // handle route change on success
    if (!!landing) return <Redirect to='/' />

    return (
      <StyledLayout>

        {/* Username and logout button (small screen) */}
        <StyledHeader>
          <section className="chatHeader">
            <div>SPEEKR</div>
            <div>
              <Icon type="ellipsis" onClick={this.onSignOut} />
            </div>
          </section>
        </StyledHeader>

        {/* Sider for (large screen) */}
        {
          !!user &&
          <StyledSider width={250}>
            <section>
              <StyledUserInfo>
                <StyledAvatar>C</StyledAvatar>
                <h3>{user.displayName}</h3>
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
        }

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

const mapStateToProps = (state) => ({
  user: state.user
})

const mapActionsToProps = {
  onUpdateUser: updateUser
}

export default connect(mapStateToProps, mapActionsToProps)(Chat)