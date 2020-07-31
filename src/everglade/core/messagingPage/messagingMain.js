import React, { Component } from 'react'

import { UserMain } from './users'
import { ChatMain } from './chats'

/**
 * The messaging area of the messaging page
 */
class MessagingMain extends Component {

    fetchingChats = []

    state = {
        isUserLoading: false,
        isChatsLoading: false
    }

    render() {

        if (this.props.urlOption === 'users') {
            if (this.props.selectedUID === '@me')
                var currUser = this.props.user
            else if (this.props.selectedUID in this.props.cachedUsers)
                currUser = this.props.cachedUsers[this.props.selectedUID]
        }

        if (this.props.urlOption === 'chats') {
            if (!(this.props.selectedUID in this.props.cachedChats) || this.props.cachedChats[this.props.selectedUID]['simple'])
                if (!this.fetchingChats.includes(this.props.selectedUID)) {
                    this.fetchingChats.push(this.props.selectedUID)
                    this.setState({ isChatsLoading: true })
                    this.props.updateChatData(this.props.selectedUID, 20)
                        .then(() => this.setState({ isChatsLoading: false }))

                }

            var currChat = this.props.cachedChats[this.props.selectedUID]
        }

        return (
            <div style={{ display: 'flex', flex: 4, flexDirection: 'column' }}>

                {this.props.urlOption === 'users' &&
                    <UserMain
                        user={currUser} />}

                {this.props.urlOption === 'chats' &&
                    <ChatMain
                        setMessagingUrl={this.props.setMessagingUrl}
                        sendMessage={this.props.sendChatMessage}
                        user={this.props.user}
                        auth={this.props.auth}
                        chat={currChat}
                        chatUID={this.props.selectedUID}
                        cachedUsers={this.props.cachedUsers}
                        friendsInfo={this.props.friendsInfo}

                        isChatsLoading={this.state.isChatsLoading} />}

            </div>
        )
    }
}

export default MessagingMain