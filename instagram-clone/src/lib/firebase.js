import Firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const config={
  apiKey: "AIzaSyBMiVE72dMXsUNRxkug0dQjdrv8bCHBJ1s",
  authDomain: "instagram-clone-dkn.firebaseapp.com",
  projectId: "instagram-clone-dkn",
  storageBucket: "instagram-clone-dkn.appspot.com",
  messagingSenderId: "954178775857",
  appId: "1:954178775857:web:7fc0aba9cedfbf44125e10",
  measurementId: "G-Y3T1W5YLJ8"
}

const firebase = Firebase.initializeApp(config)

const { FieldValue } = Firebase.firestore

export {firebase,FieldValue}