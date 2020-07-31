import React, { Component } from 'react'
import { TextArea, Form, Divider, Comment, Header, Button, Icon, Dimmer, Loader } from 'semantic-ui-react'
import PerfectScrollbar from 'react-perfect-scrollbar'

import InviteModal from './inviteToChatModal'

import { MarkJP } from '../../../common/images/developers'
import formatTime from '../../../common/util/basics/formatTime'

class MainSection extends Component {

    state = {
        message: ""
    }

    componentDidMount() {
        this.psRef.scrollTop = Number.MAX_SAFE_INTEGER
    }

    visitProfile(userUID) {
        if (userUID === this.props.user['uid'])
            this.props.setMessagingUrl('users', '@me')
        else
            this.props.setMessagingUrl('users', userUID)
    }

    generateMessages() {

        if (this.props.chat.messages)
            return this.props.chat.messages.map(messageInfo => {

                return (
                    <Comment style={{ paddingLeft: '1em' }} >
                        <Comment.Avatar src={MarkJP} />
                        <Comment.Content>
                            <Comment.Author as='a' onClick={() => this.visitProfile(messageInfo.author)}>{this.props.cachedUsers[messageInfo.author].display_name}</Comment.Author>
                            <Comment.Metadata>
                                <div>{formatTime(parseInt(messageInfo.time))}</div>
                            </Comment.Metadata>
                            <Comment.Text>{messageInfo.message}</Comment.Text>
                        </Comment.Content>
                    </Comment>)
            })
    }

    render() {

        return (
            <div style={{ display: 'flex', flex: 4, flexDirection: 'column', height: '100%' }}>
                <Dimmer active={this.props.isChatsLoading}>
                    <Loader>Loading</Loader>
                </Dimmer>

                <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', padding: '0em 1em', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Header as='h2' inverted style={{ flex: 22 }} >{this.props.chat['chat_name']}</Header>
                    <InviteModal chatUID={this.props.chatUID} friendsInfo={this.props.friendsInfo} auth={this.props.auth} />
                    <Button inverted icon style={{ alignSelf: 'center', flex: 1, marginRight: '1em' }}><Icon name='cog' /></Button>
                </div>

                <div style={{ flex: 0.1, position: 'relative' }}>
                    <Divider inverted />
                </div>

                <PerfectScrollbar style={{ marginRight: '15px', flex: 6, backgroundColor: '#424547' }}
                    containerRef={ref => {
                        if (this.psRef === undefined) {
                            this.psRef = ref
                            this.setState({})
                        }
                    }}>
                    <div style={{ display: 'flex', alignItems: 'flex-end', minHeight: '100%' }}>
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
                            onChange={(e, v) => this.setState({ message: v['value'] }, () => { })} />
                        <Button inverted style={{ margin: '1em 0em' }}
                            onClick={() => this.props.sendMessage(this.props.chatUID, this.state.message)}>
                            Send
                        </Button>
                    </div>

                </Form>
            </div>
        )
    }
}

export default MainSection