// @flow
import { UPDATE_USER } from '../actions/user'
import type { UPDATE_USER_TYPE } from '../actions/user'
import firebase from '../services/firebase'

type State = {
  user: firebase.User
}

const initialState: State = {
  user: null
}

type Action = UPDATE_USER_TYPE

export default function userReducer(state: State = initialState, action: Action): State {
  const { type, payload } = action
  switch (type) {
    case UPDATE_USER: {
      const { user } = payload
      return {
        ...state,
        user
      }
    }
    default: {
      return state
    }
  }
}