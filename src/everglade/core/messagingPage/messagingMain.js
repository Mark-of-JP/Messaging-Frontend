import React, { Component } from 'react'
import { TextArea, Form, Divider, Comment } from 'semantic-ui-react'
import PerfectScrollbar from 'react-perfect-scrollbar'

function generateMessage(author, message) {
    return (
        <Comment>
            <Comment.Avatar />
            <Comment.Content>
                <Comment.Author as='a'>{author}</Comment.Author>
                <Comment.Metadata>
                    <div>Today at 4:20AM</div>
                </Comment.Metadata>
                <Comment.Text>{message}</Comment.Text>
            </Comment.Content>
        </Comment>
    )
}

class MessagingMain extends Component {

    render() {
        return (
            <div style={{ display: 'flex', flex: 4, flexDirection: 'column' }}>

                <div style={{ flex: 1 }}>

                </div>

                <PerfectScrollbar style={{ maxHeight: '100%', marginRight: '15px', flex: 6, backgroundColor: '#424547' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-end', minHeight:'100%' }}>
                        <Comment.Group>
                            {generateMessage('SoftBoiUwu', 'Eat Nut 12')}
                            {generateMessage('Bean', 'BEANZ')}
                            {generateMessage('SoftBoiUwu', 'Eat Nut 12')}
                            {generateMessage('SoftBoiUwu', 'Eat Nut 12')}
                            {generateMessage('SoftBoiUwu', 'Eat Nut 12')}
                            {generateMessage('SoftBoiUwu', 'Eat Nut 12')}
                            {generateMessage('SoftBoiUwu', 'Eat Nut 12')}
                            {generateMessage('SoftBoiUwu', 'Eat Nut 12')}
                            {generateMessage('SoftBoiUwu', 'Eat Nut 12')}
                            {generateMessage('SoftBoiUwu', 'Eat Nut 12')}
                            {generateMessage('SoftBoiUwu', 'Eat Nut 12')}
                            {generateMessage('SoftBoiUwu', 'Eat Nut 12')}
                            {generateMessage('SoftBoiUwu', 'Eat Nut 12')}


                        </Comment.Group>
                    </div>
                </PerfectScrollbar>


                <div style={{ flex: 0.1, position: 'relative' }}>
                    <Divider inverted />
                </div>

                <Form style={{ flex: 1, padding: '1em 2em' }}>
                    <TextArea placeholder='Send a message...' style={{ resize: 'none' }} />
                </Form>
            </div>
        )
    }
}

export default MessagingMain