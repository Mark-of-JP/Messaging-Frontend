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

export async function updateTokenUserInfo(authToken, displayName, description, picture) {
    return fetch(apiUrl + 'users/me', {
        method: 'PATCH',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'EVERGLADE-USER-TOKEN': authToken
        },
        body: JSON.stringify({
            "new_display_name": displayName,
            "description": description,
            "picture": picture
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

export async function callSendFriendRequest(userUID, authToken) {
    return fetch(apiUrl + 'users/' + userUID + '/invite', {
        method: 'PUT',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'EVERGLADE-USER-TOKEN': authToken
        }
    })
    .then(response => response.json())
    .catch(err => console.log(err))
}

export async function callAcceptFriendRequest(userUID, authToken) {
    return fetch(apiUrl + 'users/' + userUID + '/request', {
        method: 'PUT',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'EVERGLADE-USER-TOKEN': authToken
        }
    })
    .then(response => response.json())
    .catch(err => console.log(err))
}

export async function callDeclineFriendRequest(userUID, authToken) {
    return fetch(apiUrl + 'users/' + userUID + '/request', {
        method: 'DELETE',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'EVERGLADE-USER-TOKEN': authToken
        }
    })
    .then(response => response.json())
    .catch(err => console.log(err))
}

export async function callRemoveFriend(userUID, authToken) {
    return fetch(apiUrl + 'users/' + userUID + '/friends', {
        method: 'DELETE',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'EVERGLADE-USER-TOKEN': authToken
        }
    })
    .then(response => response.json())
    .catch(err => console.log(err))
}