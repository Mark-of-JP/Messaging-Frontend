function authorizeLogin(username, password) {

    return {
        apiKey: process.env.apiKey
    }
}

export default authorizeLogin;