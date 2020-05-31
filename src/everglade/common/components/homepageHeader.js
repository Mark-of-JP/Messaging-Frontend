import React, { Component } from 'react'
import {
    Grid,
    Button,
    Container,
    Segment,
    Menu,
    Visibility,
    Responsive,
    Sidebar
} from 'semantic-ui-react'

export default class HomepageHeader extends Component {

    render() {
        return (
            <Segment
                inverted
                textAlign='center'
                style={{ padding: '0.5em 4em' }}
                vertical
                raised>
                <Menu
                    fixed='top'
                    inverted
                    pointing
                    secondary={false}
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