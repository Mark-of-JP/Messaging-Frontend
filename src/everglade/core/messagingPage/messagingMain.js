import React, { Component } from 'react'
import { TextArea, Form, Divider, Comment, Header, Button, Icon } from 'semantic-ui-react'
import PerfectScrollbar from 'react-perfect-scrollbar'

import { UserMain } from './users'
import { ChatMain } from './chats'

/**
 * The messaging area of the messaging page
 */
class MessagingMain extends Component {

    fetchingChats = []

    render() {

        if (this.props.urlOption === 'users') {
            if (this.props.selectedUID === '@me')
                var currUser = this.props.user
            else if (this.props.selectedUID in this.props.cachedUsers)
                var currUser = this.props.cachedUsers[this.props.selectedUID]
        }

        if (this.props.urlOption === 'chats') {
            if(!(this.props.selectedUID in this.props.cachedChats) || this.props.cachedChats[this.props.selectedUID]['simple'])
                if(!this.fetchingChats.includes(this.props.selectedUID)) {
                    this.fetchingChats.push(this.props.selectedUID)
                    this.props.updateChatData(this.props.selectedUID, 20)
                    return (<div></div>)
                }
            
            var currChat = this.props.cachedChats[this.props.selectedUID]
        }

        return (
            <div style={{ display: 'flex', flex: 4, flexDirection: 'column' }}>

                {this.props.urlOption == 'users' &&
                    <UserMain
                        user={currUser} />}

                {this.props.urlOption == 'chats' &&
                    <ChatMain
                        chat={currChat}
                        cachedUsers={this.props.cachedUsers} />}

            </div>
        )
    }
}

export default MessagingMain