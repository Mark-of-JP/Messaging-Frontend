import React, { Component } from 'react'
import {
    Button,
    Segment,
    Menu,
    Header,
} from 'semantic-ui-react'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-scroll'

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
                    <Menu.Item as ='a' active={visionState.home} style={{padding: '0em 0em'}}>
                        <Link activeClass="active"
                            to="home"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            style={{width: '100px', height: '100%', justifyContent:'center', alignContent:'center', display:'flex'}}>
                            <Header style={{ userSelect: 'none', color: 'white', alignSelf:'center' }}>Home</Header>
                        </Link>
                    </Menu.Item>
                    <Menu.Item as ='a' active={visionState.about} style={{padding: '0em 0em'}}>
                        <Link activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            style={{width: '100px', height: '100%', justifyContent:'center', alignContent:'center', display:'flex'}}>
                            <Header style={{ userSelect: 'none', color: 'white', alignSelf:'center' }}>About</Header>
                        </Link>
                    </Menu.Item>
                    <Menu.Item as ='a' active={visionState.contact} style={{padding: '0em 0em'}}>
                        <Link activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-60}
                            duration={500}
                            style={{width: '100px', height: '100%', justifyContent:'center', alignContent:'center', display:'flex'}}>
                            <Header style={{ userSelect: 'none', color: 'white', alignSelf:'center' }}>Contact</Header>
                        </Link>
                    </Menu.Item>

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