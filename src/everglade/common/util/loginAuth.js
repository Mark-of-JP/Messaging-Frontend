import runtimeEnv from '@mars/heroku-js-runtime-env'

function authorizeLogin(username, password) {

    const env = runtimeEnv();

    return {
        pog: process.env.API_KEY,
        pog2: process.env.apiKey,
        pog3: process.env,
        pog4: "Pog",
        pog5: process.env.EAT,
        unpog: env.API_KEY,
        unpog2: env.apiKey,
        unpog3: env,
        unpog4: "Unpog",
        unpog5: env.EAT,
    }
}

export default authorizeLogin;