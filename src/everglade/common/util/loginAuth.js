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

if(firebaseConfig.apiKey === undefined) {
    firebaseConfig = require('./ignore/config').default
}



firebase.initializeApp(firebaseConfig);
const auth = firebase.auth()

async function authorizeLogin(email, password) {

    const response = await auth.signInWithEmailAndPassword(email, password).catch(e => e)

    if(response instanceof Error)
        throw response
    
    console.log(response)
    return auth.currentUser
}

export default authorizeLogin;