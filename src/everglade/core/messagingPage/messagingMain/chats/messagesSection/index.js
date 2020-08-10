import React, { Component } from 'react'
import { TextArea, Form, Divider, Comment, Button } from 'semantic-ui-react'
import PerfectScrollbar from 'react-perfect-scrollbar'

import EditModal from './editModal'
import AreYouSureModel from '../../../../../common/components/areYouSureModal' 

import { getProfilePictureInfo } from '../../../../../common/images/profilePictures'
import formatTime from '../../../../../common/util/basics/formatTime'

class MessagesSection extends Component {

    state = {
        message: "",
        lastMessage: {}
    }

    componentDidUpdate() {
        if (this.props.chat.messages) {
            const lastMessage = this.props.chat.messages[this.props.chat.messages.length - 1]

            if (!this.props.isChatLoading && this.state.lastMessage != lastMessage) {
                this.psRef.scrollTop = Number.MAX_SAFE_INTEGER
                this.setState({ lastMessage: lastMessage })
            }
        }
    }

    visitProfile(userUID) {
        if (userUID === this.props.user['uid'])
            this.props.visitUser('@me')
        else
            this.props.visitUser(userUID)
    }

    generateMessages() {

        if (this.props.chat.messages)
            return this.props.chat.messages.map(messageInfo => {

                const authorInfo = this.props.cachedUsers[messageInfo['author']]

                return (
                    <Comment key={messageInfo['uid']} style={{ paddingLeft: '1em' }} >
                        <Comment.Avatar src={getProfilePictureInfo(authorInfo['picture'])['picture']} />
                        <Comment.Content>
                            <Comment.Author as='a' onClick={() => this.visitProfile(messageInfo.author)}>
                                {messageInfo['is_editted'] ? authorInfo['display_name'] + " (Editted)" : authorInfo['display_name']}</Comment.Author>
                            <Comment.Metadata>
                                <div>{formatTime(parseInt(messageInfo.time))}</div>
                            </Comment.Metadata>
                            <Comment.Text>{messageInfo.message}</Comment.Text>
                        </Comment.Content>
                        {this.props.user.uid === messageInfo['author'] && (
                            <Comment.Actions>
                                <EditModal
                                    trigger={<Comment.Action>Edit</Comment.Action>}
                                    message={messageInfo.message}
                                    onSubmit={edit => this.props.editMessage(messageInfo['uid'], edit)}
                                />
                                <AreYouSureModel 
                                    trigger={<Comment.Action>Delete</Comment.Action>}
                                    onConfirm={() => this.props.deleteMessage(messageInfo['uid'])}
                                />
                            </Comment.Actions>
                        )}
                    </Comment>)
            })
    }

    render() {
        return (
            <div style={{ flex: 7, flexDirection: 'column', maxHeight: '87.5%' }}>
                <PerfectScrollbar style={{ marginRight: '15px', maxHeight: '75%', backgroundColor: '#424547' }}
                    containerRef={ref => {
                        if (this.psRef === undefined) {
                            this.psRef = ref
                            this.setState({})
                        }
                    }}>
                    <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                        <Comment.Group>

                            {this.generateMessages()}

                        </Comment.Group>
                    </div>
                </PerfectScrollbar>


                <div style={{ flex: 0.1, position: 'relative' }}>
                    <Divider inverted />
                </div>

                <Form style={{ flex: 1, padding: '1em 2em' }}>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <TextArea placeholder='Send a message...' style={{ resize: 'none', marginRight: '2em' }}
                            value={this.state.message}
                            onChange={(e, v) => this.setState({ message: v['value'] }, () => { })} />
                        <Button inverted style={{ margin: '1em 0em' }}
                            onClick={() => {
                                if (this.state.message === "")
                                    return

                                this.props.sendMessage(this.props.chatUID, this.state.message)
                                this.setState({ message: "" })
                            }}>
                            Send
                        </Button>
                    </div>

                </Form>
            </div>
        )
    }
}

export default MessagesSection