import firebase from 'firebase'

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyARGpFnOJe3D0LrJROKQj199i-U3VrlC2Y',
  authDomain: 'turnout-5b731.firebaseapp.com',
  databaseURL: 'https://turnout-5b731.firebaseio.com',
  projectId: 'turnout-5b731',
  storageBucket: 'turnout-5b731.appspot.com',
  messagingSenderId: '466509961863'
}

export const firebaseApp = firebase.initializeApp(config)
