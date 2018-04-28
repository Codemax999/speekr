// @flow
import React, { Component } from 'react'
import type { MessageType } from '../../types/message'
import { LikeButton, StyledAvatar } from './style'
import { List } from 'antd'
const { Item } = List

type Props = {
  data: MessageType
}

class Message extends Component<Props> {

  readMessage = (message: string) => {

    // text to speech
    const msg = new SpeechSynthesisUtterance(message)
    window.speechSynthesis.speak(msg)
  }

  render() {

    const { username, message } = this.props.data

    return (
      <Item 
        actions={[<LikeButton shape='circle' icon='caret-right' />]}
        onClick={() => this.readMessage(message)}>

        <Item.Meta
          avatar={
            <StyledAvatar size='large'>
              {username[0].toUpperCase()}
            </StyledAvatar>
          }
          title={username}
          description={message}
        />
      </Item>
    )
  }
}

export default Message