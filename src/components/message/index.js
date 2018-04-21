// @flow
import React, { Component } from 'react'
import type { MessageType } from '../../types/message'
import { LikeButton, StyledAvatar } from './style'
import { List } from 'antd'

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
        <LikeButton shape='circle' icon={type} />
        {text}
      </span>
    )

    return (
      <Item actions={[<IconText type="star-o" text="2" />]}>
        <Item.Meta
          avatar={
            <StyledAvatar size='large'>
              {props.data.username[0].toUpperCase()}
            </StyledAvatar>
          }
          title={props.data.username}
          description={props.data.message}
        />
      </Item>
    )
  }
}

export default Message