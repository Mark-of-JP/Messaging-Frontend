//Contains all the api calls related to authorization

import { apiUrl } from '../constants'

/**
 * Logs in to the username and password using our api backend
 * @param {string} email The users email
 * @param {string} password The users password
 * @return {Promise<JSON>} 
 */
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

/**
 * Signs up a user using their username and password
 * @param {string} email The users email
 * @param {string} password The users password
 * @return {Promise<JSON>} 
 */
export async function authorizeSignUp(email, password, display_name) {

    const response = await fetch(apiUrl + 'signup', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "email": email,
            "password": password,
            "display_name": display_name
        })
    })

    if (Math.floor(response.status / 100) === 4) {
        await response.json()
            .then(err => { throw new Error(err.message) })
    }

    return response.json()
}