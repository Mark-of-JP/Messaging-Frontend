import runtimeEnv from '@mars/heroku-js-runtime-env'
require('dotenv').config()

function authorizeLogin(username, password) {

    const env = runtimeEnv();

    return {
        pog: process.env.API_KEY,
        pog2: process.env.apiKey,
        pog3: process.env,
        pog4: "Pog",
        pog5: process.env.REACT_APP_EAT,
        unpog: env.API_KEY,
        unpog2: env.apiKey,
        unpog3: env,
        unpog4: "Unpog",
        unpog5: env.REACT_APP_EAT,
    }
}

export default authorizeLogin;