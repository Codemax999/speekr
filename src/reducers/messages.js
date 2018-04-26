// @flow
import { UPDATE_MESSAGES } from '../actions/messages'
import type { UPDATE_MESSAGES_TYPE } from '../actions/messages'

type State = {
  messages: Object[]
}

const initialState: State = {
  messages: []
}

type Action = UPDATE_MESSAGES_TYPE

export default function messageReducer(state: State = initialState, action: Action): State {
  const { type, payload } = action
  switch (type) {
    case UPDATE_MESSAGES: {
      const { messages } = payload
      return {
        ...state,
        messages
      }
    }
    default: {
      return state
    }
  }
}