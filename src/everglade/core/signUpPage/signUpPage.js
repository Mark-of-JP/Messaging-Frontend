import React, { Component } from 'react'
import { Segment, Form, Container, Button, Header, Menu, Image } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom'

import EvergladeLogo from '../../common/images/logos/Everglade_Logo_2.jpg'

class LoginPage extends Component {

    state = {
        email: "", submittedEmail: "",
        password: "", submittedPassword: "",
        secondPassword: "",
        redirect: undefined
    }

    setRedirect = (url) => this.setState({redirect: url})

    login = () => {
        console.log(`Logging in with ${this.state.submittedEmail} and ${this.state.submittedPassword}`)
    }

    handleFormChange = (e, {name, value}) => this.setState({[name]: value})
    handleFormSubmit = () => {
        const {email, password} = this.state

        this.setState({submittedEmail: email, submittedPassword: password}, this.login)
    }

    render() {

        if (this.state.redirect !== undefined) {
            return <Redirect push to={'/' + this.state.redirect} />
        }

        return (
            <div>
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
                        <Menu.Item>
                            <Image src={EvergladeLogo} size='mini' as='a' onClick={() => {this.setRedirect('')}}/>
                        </Menu.Item>
                        <Menu.Item position='right'>
                            <Header as='h4' style={{color:'white'}}>Already have an account?</Header>
                        </Menu.Item>
                        <Menu.Item>
                            <Button as ='a' inverted primary={false} onClick={() => this.setRedirect('login')}>Sign Up</Button>
                        </Menu.Item>
                    </Menu>
                </Segment>

                <Container style={{
                    position: 'absolute', left: '50%', top: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '500px',
                }}>
                    <Form onSubmit={this.handleFormSubmit}>
                        <Form.Input
                            label='Email'
                            placeholder='Email'
                            name='email'
                            value={this.state.email}
                            onChange={this.handleFormChange}
                        />
                        <Form.Input
                            label='Password'
                            placeholder='Password'
                            type='password'
                            name='password'
                            value={this.state.password}
                            onChange={this.handleFormChange}
                        />
                        <Form.Input
                            label='Re-type Password'
                            placeholder='Re-type Password'
                            type='password'
                            name='secondPassword'
                            value={this.state.secondPassword}
                            onChange={this.handleFormChange}
                        />
                        <Form.Button content='Submit'>Sign Up</Form.Button>
                    </Form>
                </Container>
            </div>
        )
    }
}

export default LoginPage;