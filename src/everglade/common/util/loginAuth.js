import firebase from 'firebase/app'
import 'firebase/auth'

require('dotenv').config()

let firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
}

if (firebaseConfig.apiKey === undefined) {
    try {
        firebaseConfig = require('./ignore/config').default
    } catch (e) {
        console.log('Are you missing the config file or running on the production build?\n' + e)
    }
}



firebase.initializeApp(firebaseConfig);
const auth = firebase.auth()

export async function authorizeLogin(email, password) {

    const response = await fetch('https://everglade-messaging.web.app/login', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: {
            "email": email,
            "password": password
        }
    })

    // const response = await fetch('https://everglade-messaging.web.app/', {
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    // })

    return response.json()

    //return auth.signInWithEmailAndPassword(email, password).then(() => auth.currentUser)
}

export async function authorizeSignUp(email, password) {

    return auth.createUserWithEmailAndPassword(email, password).then(() => auth.currentUser)
}