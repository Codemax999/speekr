// @flow
import React, { Component } from 'react'
import Message from '../message'
import type { MessageType } from '../../types/message'
import { List } from 'antd'

type Props = {}
type State = {}

const msgData: MessageType[] = [
  { id: 0, username: 'codemax', message: 'Bacon ipsum dolor amet tongue jowl ball tip tri-tip swine brisket ham chuck sirloin filet mignon flank pork belly. Turkey salami frankfurter, kevin meatball drumstick beef ribeye pork loin cupim sausage rump. Buffalo corned beef bresaola, prosciutto alcatra picanha bacon doner.' },
  { id: 1, username: 'newuser1', message: 'Buffalo corned beef bresaola, prosciutto alcatra picanha bacon doner. Prosciutto jerky pork meatball drumstick chicken hamburger tri-tip andouille kevin. Ball tip salami meatball hamburger doner.' },
  { id: 2, username: 'codemax', message: 'Spicy jalapeno occaecat voluptate mollit shank turkey. Esse mollit adipisicing venison corned beef burgdoggen drumstick short ribs cupidatat ham hock pork belly laboris minim magna.' },
  { id: 3, username: 'newuser2', message: 'Prosciutto biltong elit ex aliquip incididunt drumstick. Deserunt dolor spare ribs velit jowl. Sirloin tail ground round, enim andouille velit landjaeger ut id t-bone cillum doner.' },
]

class MessageList extends Component<Props, State> {
  render() {
    // --- List of Message Items ---
    return (
      <List
        itemLayout="horizontal"
        dataSource={msgData}
        renderItem={item => <Message key={item.id} data={item} />}
      />
    )
  }
}

export default MessageList