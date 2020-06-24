import React, { Component } from 'react'
import {
    Button,
    Segment,
    Menu,
    Header,
    Icon,
    Sidebar,
} from 'semantic-ui-react'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-scroll'

const sidebarOptions = [
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
 * The Header menu for a thin window
 */
class HomepageHeader extends Component {

    state = {
        redirect: undefined,
        isSidebarVisible: false
    }

    setRedirect = (link) => {
        this.setState({ redirect: link })
    }

    setVisible = (isVisible) => this.setState({ isSidebarVisible: isVisible })

    generateSidebarOptions = () => (sidebarOptions.map(config => (
        <Menu.Item as='a' style={{ padding: '0em 0em' }}>
            <Link activeClass="active"
                to={config.link}
                spy={true}
                smooth={true}
                offset={-10}
                duration={500}
                style={{ width: '100%', minHeight: '45px', justifyContent: 'center', alignContent: 'center', display: 'flex'}}
                onClick={() => this.setVisible(false)}>
                <Header style={{ userSelect: 'none', color: 'white', alignSelf: 'center' }}>{config.text}</Header>
            </Link>
        </Menu.Item>)))

    render() {

        if (this.state.redirect !== undefined) {

            return <Redirect push to={'/' + this.state.redirect} />
        }

        return (
            <Segment
                inverted
                textAlign='center'
                vertical
                raised>

                <Menu
                    inverted
                    pointing
                    secondary={false}
                    size='large'>
                    <Menu.Item as='a' onClick={() => this.setVisible(true)}>
                        <Icon name='bars' size='large' />
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

                <Sidebar.Pushable>
                    <Sidebar as={Menu}
                        animation='overlay'
                        inverted
                        onHide={() => this.setVisible(false)}
                        vertical
                        visible={this.state.isSidebarVisible}
                        width='thin'>
                        {this.generateSidebarOptions()}
                    </Sidebar>


                    <Sidebar.Pusher>
                        {this.props.children}
                    </Sidebar.Pusher>

                </Sidebar.Pushable>


            </Segment>
        )
    }

}

export default HomepageHeader;