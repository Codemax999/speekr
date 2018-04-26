// @flow
import React, { Component } from 'react'
import Message from '../message'
import type { MessageType } from '../../types/message'
import { List } from 'antd'

type Props = {
  messages: MessageType[]
}

class MessageList extends Component<Props> {
  render() {
    // --- List of Message Items ---
    return (
      <List
        itemLayout="horizontal"
        dataSource={this.props.messages}
        renderItem={item => <Message key={item.id} data={item} />}
      />
    )
  }
}

export default MessageList