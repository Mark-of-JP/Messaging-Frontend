import React, { Component } from 'react'
import {
    Button,
    Segment,
    Menu,
} from 'semantic-ui-react'
import { Redirect } from 'react-router-dom'

class HomepageHeader extends Component {

    state = {
        redirect: undefined
    }

    checkVisionState = currentState => {
        return {
            home: (currentState === 'home'),
            about: (currentState === 'about'),
            contact: (currentState === 'contact')
        }
    }

    constructor(props) {
        super(props)

        this.state = { redirect: undefined }

        this.setRedirect = (link) => {
            this.setState({ redirect: link })
        }
    }

    render() {

        if (this.state.redirect !== undefined) {
            return <Redirect push to={'/' + this.state.redirect} />
        }

        var visionState = this.checkVisionState(this.props.visionState)

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
                    <Menu.Item as='a' active={visionState.home}>Home</Menu.Item>
                    <Menu.Item as='a' active={visionState.about}>About</Menu.Item>
                    <Menu.Item as='a' active={visionState.contact}>Contact</Menu.Item>

                    <Menu.Item position='right'>

                        <Button as='a' inverted primary={false} style={{ marginLeft: '0.5em' }}
                            onClick={() => { this.setRedirect('login') }}>
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