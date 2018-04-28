// @flow
import * as firebase from 'firebase'
import '@firebase/firestore'
import moment from 'moment'
import { updateMessages } from '../actions/messages'

export default firebase 

// --- Initialize Firebase ---
export const initialize = () => {

  var config = {
    apiKey: "AIzaSyBRmhIddhqIDJfDoffPuOAEJNJw3-0gv5o",
    authDomain: "speekr-3e70d.firebaseapp.com",
    databaseURL: "https://speekr-3e70d.firebaseio.com",
    projectId: "speekr-3e70d",
    storageBucket: "",
    messagingSenderId: "309773234635"
  }

  firebase.initializeApp(config)
}


// --- User ---
// register
export const registerNewUser = (email: string, password: string, username: string): firebase.Promise<void | string> => {

  // create user, add username to user and redirect to chat
  return firebase.auth()
    .createUserWithEmailAndPassword(email, password)
    .then((user: firebase.User) => user.updateProfile({ displayName: username }))
    .catch(({ code }) => code)
}

// authenticate
export const signIn = (email: string, password: string): firebase.Promise<firebase.user | string> => {
  
  return firebase.auth()
    .signInWithEmailAndPassword(email, password)
    .catch(({ code }) => code)
}


// sign out
export const signOut = (): firebase.Promise<void | string> => {

  return firebase.auth()
    .signOut()
    .catch(({ code }) => code)
}


// --- Messages ---
// create
export const addMessage = (message: string) => {

  firebase.firestore().collection('messages').add({
    message,
    username: firebase.auth().currentUser.displayName,
    createdAt: moment().valueOf()
  })
  .catch((err: string) => console.error(err))
}

// load messages
export const getMessages = (dispatch: Function) => {

  // get messages and listen for changes
  firebase.firestore().collection('messages')
    .orderBy('createdAt')
    .onSnapshot((snap) => {

      let allMessages = []

      // add each message to all messages
      snap.forEach((doc) => {
        allMessages = [...allMessages, doc.data()]
      })

      // dispatch messages
      dispatch(updateMessages(allMessages))
    })
}

// detach listener 
export const detachListener = () => {

  const unsubscribe = firebase.firestore().collection('messages').onSnapshot(() => {})
  unsubscribe()
}
