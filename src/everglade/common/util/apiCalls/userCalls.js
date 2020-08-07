import { apiUrl } from '../constants'

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

export async function updateTokenUserInfo(authToken, displayName, description) {
    return fetch(apiUrl + 'users/me', {
        method: 'PATCH',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'EVERGLADE-USER-TOKEN': authToken
        },
        body: JSON.stringify({
            "new_display_name": displayName,
            "description": description
        })
    })
    .then(response => response.json())
    .catch(err => console.log(err))
}

export async function fetchMultipleUsers(userUids, authToken) {

    if (userUids.length === 0)
        return { 'users': {} }

    return fetch(apiUrl + 'users', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'EVERGLADE-USER-TOKEN': authToken
        },
        body: JSON.stringify({
            "users": userUids
        })
    })
    .then(response => response.json())
    .catch(err => console.log(err))
}

export async function fetchUserByDisplayName(displayName) {
    return fetch(apiUrl + 'users/' + displayName + "/name")
        .then(response => response.json())
        .catch(err => console.log(err))
}