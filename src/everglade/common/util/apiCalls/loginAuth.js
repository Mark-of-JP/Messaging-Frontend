require('dotenv').config()

const apiUrl = process.env.REACT_APP_API_URL !== undefined ? process.env.REACT_APP_API_URL : 'https://everglade-messaging.web.app/'

export async function authorizeLogin(email, password) {

    const response = await fetch(apiUrl + 'login', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "email": email,
            "password": password
        })
    })

    if (Math.floor(response.status / 100) === 4) {
        await response.json()
            .then(err => { throw new Error(err.message) })
    }

    return response.json()
}

export async function authorizeSignUp(email, password) {

    const response = await fetch(apiUrl + 'signup', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "email": email,
            "password": password
        })
    })

    if (Math.floor(response.status / 100) === 4) {
        await response.json()
            .then(err => { throw new Error(err.message) })
    }

    return response.json()
}