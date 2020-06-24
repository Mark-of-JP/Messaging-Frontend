import React, { Component } from 'react'
import {
    Button,
    Segment,
    Menu,
    Header,
} from 'semantic-ui-react'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-scroll'

const menuOptions = [
    {
        text: 'Home',
        link: 'home'
    },
    {
        text: 'About',
        link: 'about'
    },
    {
        text: 'Contact',
        link: 'contact'
    }
]

/**
 * The Header menu for a widescreen window
 */
class HomepageHeader extends Component {

    state = {
        redirect: undefined
    }

    setRedirect = (link) => {
        this.setState({ redirect: link })
    }

    checkVisionState = currentState => {
        return {
            home: (currentState === 'home'),
            about: (currentState === 'about'),
            contact: (currentState === 'contact')
        }
    }

    generateMenuOptions = () => (menuOptions.map(menuItem => (
        <Menu.Item as='a' active={this.checkVisionState(this.props.visionState)[menuItem.link]} style={{ padding: '0em 0em' }}>
            <Link activeClass="active"
                to={menuItem.link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                style={{ width: '100px', height: '100%', justifyContent: 'center', alignContent: 'center', display: 'flex' }}>
                <Header style={{ userSelect: 'none', color: 'white', alignSelf: 'center' }}>{menuItem.text}</Header>
            </Link>
        </Menu.Item>
    )))

    render() {

        if (this.state.redirect !== undefined) {

            return <Redirect push to={'/' + this.state.redirect} />
        }

        return (
            <div>
                <Segment
                    inverted
                    textAlign='center'
                    vertical
                    raised>
                    <Menu
                        fixed='top'
                        inverted
                        pointing
                        secondary={false}
                        size='large'>
                        {this.generateMenuOptions()}

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
                    {this.props.children}
                </Segment>


            </div>
        )
    }

}

export default HomepageHeader;