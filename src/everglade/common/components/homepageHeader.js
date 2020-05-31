import React, { Component } from 'react'
import {
    Grid,
    Button,
    Container,
    Segment,
    Menu
} from 'semantic-ui-react'

export default class HomepageHeader extends Component {

    render() {
        return (
            <Segment
                inverted
                textAlign='center'
                style={{ minHeight: 700, padding: '1em 0em' }}
                vertical>
                <Menu
                    inverted
                    pointing
                    secondary
                    size='large'>
                    <Menu.Item as='a' active>Home</Menu.Item>
                    <Menu.Item as='a' onClick={() => console.log('Pog')}>About</Menu.Item>
                    <Menu.Item as='a'>Contact</Menu.Item>

                    <Menu.Item position='right'>
                        <Button as='a' inverted>Log In</Button>
                        <Button as='a' inverted primary={false} style={{ marginLeft: '0.5em' }}>
                            Sign Up
                        </Button>
                    </Menu.Item>
                </Menu>
            </Segment>
        )
    }

}