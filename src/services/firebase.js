// @flow
import { connect } from 'react-redux'
import { updateUser } from '../actions/user'
import * as firebase from 'firebase'

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

// --- Register New User ---
export const registerNewUser = (email: string, password: string, username: string): firebase.Promise<void | string> => {

  // create user, add username to user and redirect to chat
  return firebase.auth()
    .createUserWithEmailAndPassword(email, password)
    .then((user: firebase.User) => user.updateProfile({ displayName: username }))
    .catch(({ code }) => code)
}


// --- Sign In ---
export const signIn = (email: string, password: string): firebase.Promise<firebase.user | string> => {
  
  return firebase.auth()
    .signInWithEmailAndPassword(email, password)
    .catch(({ code }) => code)
}


// --- Sign Out ---
export const signOut = (): firebase.Promise<void | string> => {
  return firebase.auth()
    .signOut()
    .catch(({ code }) => code)
}