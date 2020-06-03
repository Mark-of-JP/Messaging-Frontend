import React, { Component } from 'react'
import {
    Button,
    Segment,
    Menu,
} from 'semantic-ui-react'
import { Redirect } from 'react-router-dom'

class HomepageHeader extends Component {

    state = { redirect: undefined}

    constructor(props){
        super(props)

        this.state = {redirect:undefined}

        this.setRedirect = (link) => {
            this.setState({redirect: link})
        }
    }

    render() {

        if (this.state.redirect !== undefined) {
            return <Redirect push to={'/' + this.state.redirect} />
        }

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
                        <Button as='a' inverted primary={false} style={{ marginLeft: '0.5em' }}
                        onClick={() => {this.setRedirect('login')}}>
                            Login
                        </Button>
                        <Button as='a' inverted primary={false} style={{ marginLeft: '0.5em' }}
                        onClick={() => this.setRedirect('signup')}>
                            Sign Up
                        </Button>
                    </Menu.Item>
                </Menu>
            </Segment>
        )
    }

}

export default HomepageHeader;