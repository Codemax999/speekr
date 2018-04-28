// @flow
import React, { Component } from 'react'
import { Redirect } from 'react-router'
import { connect } from 'react-redux'
import { 
  signOut, 
  addMessage, 
  getMessages, 
  detachListener 
} from '../../services/firebase'
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

// --- Speech Recognition ---
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const recognition = new SpeechRecognition()
recognition.continuous = true

type State = {
  landing: boolean,
  newMessage: boolean,
  visible: boolean,
  msg: string,
  recordingStatus: string
}

type Props = {
  user: Object,
  onGetMessages: void => void,
  messages: Object[]
}

class Chat extends Component<Props, State> {
  
  state: State = {
    landing: false,
    newMessage: false,
    visible: false,
    msg: 'Say another something...',
    username: '',
    recordingStatus: ''
  }

  componentDidMount() {

    // get list of messages
    this.props.onGetMessages()
  }

  componentWillUnmount() {

    // stop listening for data changes
    detachListener()
  }

  // --- Sign Out ---
  onSignOut = () => {

    // sign out and redirect to landing page
    signOut().then(() => this.setState({ landing: true }))
  }


  // --- New Message Modal ---
  // show
  showModal = () => {

    const self = this

    // display modal and start recording
    this.setState({ visible: true })
    recognition.start()

    // record start
    recognition.onstart = () => {
      self.setState({ recordingStatus: 'Recording new message' })
    }

    // record end
    recognition.onspeechend = () => {
      self.setState({ recordingStatus: 'Finished recording' })
    }

    // record error
    recognition.onerror = (event: Object) => {
      if (event.error === 'no-speech') {
        self.setState({ recordingStatus: 'No speech detected' })
      }
    }

    // record result
    recognition.onresult = (event: Object) => {

      // captured text
      const index = event.resultIndex
      const transcript = event.results[index][0].transcript

      // prevent repeat on some mobile devices
      const repeat = (index === 1 && transcript === event.results[0][0].transcript)
      if (!repeat) self.onTextChange(transcript)
    }
  }

  onTextChange = (transcript: string) => {

    // new message
    let newMsg = ''
    const { msg } = this.state
    const initText = 'Say another something...'
    newMsg = msg === initText ? msg.replace(initText, '') : msg

    // update state
    this.setState({ msg: `${newMsg} ${transcript}` })
  }

  // add message
  handleOk = () => {

    recognition.stop()
    this.setState({ 
      visible: false,
      msg: 'Say another something...',
      recordingStatus: ''
    })
    addMessage(this.state.msg)
  }

  // cancel message
  handleCancel = () => {

    recognition.stop()
    this.setState({ 
      visible: false,
      msg: 'Say another something...',
      recordingStatus: ''
    })
  }

  render() {

    // state
    const { landing, visible, msg, recordingStatus } = this.state
    const { user, messages } = this.props

    // modal icon
    const getIcon = (): string => {

      let icon = ''
      icon = recordingStatus === 'Recording new message' ? 'loading' : icon
      icon = recordingStatus === 'Finished recording' ? 'check-circle-o' : icon
      icon = recordingStatus === 'No speech detected' ? 'warning' : icon
      return icon
    }

    // handle route change on success or no user logged in
    if (!!landing || localStorage.getItem('isLoggedIn') === null) return <Redirect to='/' />

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
                <StyledAvatar>{user.displayName[0].toUpperCase()}</StyledAvatar>
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
            <MessageList messages={messages} />
          </Messages>

          {/* Record new message modal */}
          <Modal
            title={
              <span>
                <ModalIcon type={getIcon()} />
                {recordingStatus}
              </span>}
            destroyOnClose={true}
            closable={false}
            okText='Send'
            visible={visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}>
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
  user: state.user.user,
  messages: state.messages.messages
})

const mapDispatchToProps = (dispatch) => ({
  onGetMessages() {
    getMessages(dispatch)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Chat)