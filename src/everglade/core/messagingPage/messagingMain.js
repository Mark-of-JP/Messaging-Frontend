import React, { Component } from 'react'
import { TextArea, Form } from 'semantic-ui-react'

class MessagingMain extends Component {

    render() {
        return (
            <div style={{display:'flex', flex: 4, flexDirection:'column'}}>

                <div style={{ flex: 1}}>

                </div>

                <div style={{ flex: 6}}>

                </div>

                <Form style={{ flex: 1, padding:'1em 2em' }}>
                    <TextArea placeholder='Send a message...' style={{resize:'none'}}/>
                </Form>
            </div>
        )
    }
}

export default MessagingMain