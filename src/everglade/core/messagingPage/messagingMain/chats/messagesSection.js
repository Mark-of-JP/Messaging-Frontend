import React, { Component } from 'react'
import { TextArea, Form, Divider, Comment, Button } from 'semantic-ui-react'
import PerfectScrollbar from 'react-perfect-scrollbar'

import { MarkJP } from '../../../../common/images/developers'
import formatTime from '../../../../common/util/basics/formatTime'

class MessagesSection extends Component {

    state = {
        message: ""
    }

    componentDidMount() {
        this.psRef.scrollTop = Number.MAX_SAFE_INTEGER
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

                return (
                    <Comment key={messageInfo['uid']} style={{ paddingLeft: '1em' }} >
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
            <div style={{ flex: 7, display: 'flex', flexDirection: 'column',}}>
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

export default MessagesSection