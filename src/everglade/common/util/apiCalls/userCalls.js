require('dotenv').config()

const apiUrl = process.env.REACT_APP_API_URL !== undefined ? process.env.REACT_APP_API_URL : 'https://everglade-messaging.web.app/'

export async function fetchTokenUser(authToken) {
    return fetch(apiUrl + 'users/me', {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'EVERGLADE-USER-TOKEN': authToken
        }
    })
    .then(response => response.json())
    .catch(err => console.log(err))
}