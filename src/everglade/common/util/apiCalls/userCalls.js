//Contains all the api calls related to users

import { apiUrl } from '../constants'

/**
 * Gets info of the user associated with the auth token
 * @param {string} authToken The auth token
 */
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

/**
 * Alters the user info of the user associated with the auth token
 * @param {string} authToken The auth token
 * @param {string} displayName The display name of the user
 * @param {string} description The description of the user
 * @param {string} picture The pictureKey of the user's profile picture
 */
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

/**
 * Calls the api to get info of multiple users
 * @param {string[]} userUids The uids of the desired user 
 * @param {string} authToken The auth token
 */
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

/**
 * Calls the api to get the user info of the user with the desired display name
 * @param {string} displayName The display name of the user
 */
export async function fetchUserByDisplayName(displayName) {
    return fetch(apiUrl + 'users/' + displayName + "/name")
        .then(response => response.json())
        .catch(err => console.log(err))
}

/**
 * Sends a friend request to the user
 * @param {string} userUID The uid of the user
 * @param {string} authToken The auth token
 */
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

/**
 * Calls the api to accept the friend request of the desired user
 * @param {string} userUID The uid of the user
 * @param {string} authToken The auth token
 */
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

/**
 * Calls the api to decline the friend request
 * @param {string} userUID The uid of the user
 * @param {string} authToken The auth token
 */
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

/**
 * Removes the friend off of the friend list
 * @param {string} userUID The uid of the user
 * @param {string} authToken The auth token
 */
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