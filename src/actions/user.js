// @flow
export const UPDATE_USER = 'users:updateUser'

type UPDATE_USER_TYPE = {
  type: 'users:updateUser',
  payload: Object | null
}

export function updateUser(user: Object | null): UPDATE_USER_TYPE {
  return {
    type: UPDATE_USER,
    payload: { user }
  }
}
