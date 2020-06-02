require('dotenv').config()

function authorizeLogin(username, password) {

    return process.env.apiKey
}

export default authorizeLogin;