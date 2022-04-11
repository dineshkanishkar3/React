import Firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'


const config={
    apiKey: "AIzaSyAIt48UPXi8nvAhpVgPZ-mA_-PR6fkTn3s",
    authDomain: "mychatapp-336be.firebaseapp.com",
    projectId: "mychatapp-336be",
    storageBucket: "mychatapp-336be.appspot.com",
    messagingSenderId: "438404854894",
    appId: "1:438404854894:web:9b1f80892d7bca2bf1a27f",
    measurementId: "G-P6NXT0Q9VQ"
}

const firebase = Firebase.initializeApp(config)

export {firebase}

