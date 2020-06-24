import React, { Component } from 'react'
import { TextArea, Form, Divider, Comment, Header, Button, Icon } from 'semantic-ui-react'
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

/**
 * The messaging area of the messaging page
 */
class MessagingMain extends Component {

    render() {
        return (
            <div style={{ display: 'flex', flex: 4, flexDirection: 'column' }}>

                <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', padding: '0em 1em', flexDirection: 'row', justifyContent:'space-between' }}>
                    <Header as='h2' inverted>The Bean Squad</Header>
                    <Button inverted icon style={{alignSelf:'center'}}><Icon name='cog' /></Button>
                </div>

                <div style={{ flex: 0.1, position: 'relative' }}>
                    <Divider inverted />
                </div>

                <PerfectScrollbar style={{ maxHeight: '100%', marginRight: '15px', flex: 6, backgroundColor: '#424547' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-end', minHeight: '100%' }}>
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
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <TextArea placeholder='Send a message...' style={{ resize: 'none', marginRight: '2em' }} />
                        <Button inverted style={{ margin: '1em 0em' }}>Send</Button>
                    </div>

                </Form>
            </div>
        )
    }
}

export default MessagingMain