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
  render() {
    const { likeCount, username, message } = this.props.data
    const IconText = ({ type, text }) => (
      <span>
        <LikeButton shape='circle' icon={type} />
        {text}
      </span>
    )

    return (
      <Item actions={[<IconText type="star-o" text={likeCount} />]}>
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