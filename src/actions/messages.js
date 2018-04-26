// @flow
export const UPDATE_MESSAGES = 'messages:updateMessages'

export type UPDATE_MESSAGES_TYPE = {
  type: 'messages:updateMessages',
  payload: {
    messages: Object[]
  }
}

export function updateMessages(messages: Object[]): UPDATE_MESSAGES_TYPE {
  return {
    type: UPDATE_MESSAGES,
    payload: { messages }
  }
}
