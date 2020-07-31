import { apiUrl } from '../constants'

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
 * @param {string[]} chatUIDs 
 * @param {string} authToken 
 * @param {{}} currentChatInfo
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
        console.log('Fetching ' + chosenChatUids[i])
        await fetchSimpleChat(chosenChatUids[i], authToken)
            .then(response => {
                chatInfo[chosenChatUids[i]] = response
            })
    }

    return chatInfo
}

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