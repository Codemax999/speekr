// @flow
import React, { Component } from 'react'
import type { MessageType } from '../../types/message'
import { List, Avatar, Button } from 'antd'

const { Item } = List

type Props = {
  data: MessageType
}
type State = {}

class Message extends Component<Props, State> {
  render() {
    const props: Props = this.props
    const IconText = ({ type, text }) => (
      <span>
        <Button shape='circle' icon={type} style={{ marginRight: 8, border: 0, pointerEvents: 'auto' }} />
        {text}
      </span>
    )

    return (
      <Item actions={[<IconText type="star-o" text="2" />]}>
        <Item.Meta
          avatar={
            <Avatar size='large' style={{ color: '#fff', backgroundColor: '#2A5BA4' }}>
              {props.data.username[0].toUpperCase()}
            </Avatar>
          }
          title={props.data.username}
          description={props.data.message}
        />
      </Item>
    )
  }
}

export default Message