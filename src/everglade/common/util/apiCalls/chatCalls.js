//Contains all the api calls related to chats

import { apiUrl } from '../constants'

/**
 * Get's the simple information for the chat (Name)
 * @param {string} chatUID The uid of the chat
 * @param {string} authToken The auth token
 */
export async function fetchSimpleChat(chatUID, authToken) {
    return fetch(apiUrl + 'chat/' + chatUID + '/simple', {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'EVERGLADE-USER-TOKEN': authToken
        }
    })
    .then(response => response.json())
    .then(response => {
        response['simple'] = true
        return response
    })
    .catch(err => console.log(err))
}

/**
 * Calls the api to get the info for multiple chats
 * @param {string[]} chatUIDs The uids of each chat
 * @param {string} authToken The auth token
 * @param {{}} currentChatInfo Used to ensure that we don't get duplicate chat info
 */
export async function fetchMultipleSimpleChats(chatUIDs, authToken, currentChatInfo = undefined) {
    let chosenChatUids = []

    if (currentChatInfo)
        chatUIDs.forEach(chatUID => {
            if (!Object.keys(currentChatInfo).includes(chatUID))
                chosenChatUids.push(chatUID)
        })
    else
        chosenChatUids = chatUIDs

    let chatInfo = {}

    for (let i = 0; i < chosenChatUids.length; i++){
        await fetchSimpleChat(chosenChatUids[i], authToken)
            .then(response => {
                chatInfo[chosenChatUids[i]] = response
            })
    }

    return chatInfo
}

/**
 * Gets information from the api with formatted message info
 * @param {string} chatUID The uid of the chat
 * @param {string} authToken The auth token
 * @param {number} messageLimit The maximum number of messages for the call
 */
export async function fetchChat(chatUID, authToken, messageLimit) {
    return fetch(apiUrl + 'chat/' + chatUID + "?message_limit=" + messageLimit, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'EVERGLADE-USER-TOKEN': authToken
        }
    })
    .then(response => response.json())
    .then(response => {
        response['simple'] = false

        if (response.messages === undefined)
            response.messages = []

        return {
            [chatUID]: response
        }
    })
    .catch(err => console.log(err))
}

/**
 * Sends a message to the chat
 * @param {string} chatUID The uid of the chat
 * @param {string} authToken The auth token
 * @param {string} message The message you want to send 
 */
export async function sendMessage(chatUID, authToken, message) {
    return fetch(apiUrl + 'chat/' + chatUID, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'EVERGLADE-USER-TOKEN': authToken
        },
        body: JSON.stringify({
            'message': message
        })
    })
    .then(response => response.json())
    .catch(err => console.log(err))
}

/**
 * Calls the api to create a chat and adds the current user to the chat
 * @param {string} authToken The auth token 
 * @param {string} chatName The name of the chat
 */
export async function callCreateChat(authToken, chatName) {
    return fetch(apiUrl + 'create/chat', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'EVERGLADE-USER-TOKEN': authToken
        },
        body: JSON.stringify({
            'chat_name': chatName
        })
    })
    .then(response => response.json())
    .catch(err => console.log(err))
}

/**
 * Calls the api to delete the chat
 * @param {string} chatUID The uid of the chat
 * @param {string} authToken The auth token
 */
export async function callDeleteChat(chatUID, authToken) {
    return fetch(apiUrl + 'chat/' + chatUID, {
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
 * Calls the api to invite a user to the chat
 * @param {string} chatUID The uid of the chat
 * @param {string} authToken The auth token
 * @param {string} receiver The uid of the user being invited
 */
export async function callInviteToChat(chatUID, authToken, receiver) {
    return fetch(apiUrl + 'chat/' + chatUID + '/invite', {
        method: 'PUT',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'EVERGLADE-USER-TOKEN': authToken
        },
        body: JSON.stringify({
            'receiver': receiver
        })
    })
    .then(response => response.json())
    .catch(err => console.log(err))
}

/**
 * Accepts the invite for the given chat
 * @param {string} chatUID The uid of the chat
 * @param {string} authToken The auth token
 */
export async function acceptInviteToChat(chatUID, authToken) {
    return fetch(apiUrl + 'chat/' + chatUID + '/request', {
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
 * Declines the invite for the given chat
 * @param {string} chatUID The uid of the chat
 * @param {string} authToken The auth token
 */
export async function declineInviteToChat(chatUID, authToken) {
    return fetch(apiUrl + 'chat/' + chatUID + '/request', {
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
 * Calls the api so the user can leave the chat
 * @param {string} chatUID The uid of the chat
 * @param {string} authToken The auth token
 */
export async function callLeaveChat(chatUID, authToken) {
    return fetch(apiUrl + 'chat/' + chatUID + '/leave', {
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
 * Calls the chat to edit one of the user's messages
 * @param {string} messageUID The uid of the message
 * @param {string} edit The new value of the message
 * @param {string} authToken The auth token 
 */
export async function callEditMessage(messageUID, edit, authToken) {
    return fetch(apiUrl + 'message/' + messageUID, {
        method: 'PATCH',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'EVERGLADE-USER-TOKEN': authToken
        },
        body: JSON.stringify({ "edit": edit })
    })
    .then(response => response.json())
    .catch(err => console.log(err))
}

/**
 * Calls the api to delete the message
 * @param {string} messageUID The uid of the message 
 * @param {string} authToken The auth token
 */
export async function callDeleteMessage(messageUID, authToken) {
    return fetch(apiUrl + 'message/' + messageUID, {
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

