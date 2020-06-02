import React, { Component } from 'react'
import { Segment, Form, Container, Grid, Button, Divider, Header, Menu } from 'semantic-ui-react'

import authorizeLogin from '../common/util/loginAuth'

class LoginPage extends Component {

    state = {
        email: "", submittedEmail: "",
        password: "", submittedPassword: ""
    }

    login = () => {
        console.log(`Logging in with ${this.state.submittedEmail} and ${this.state.submittedPassword}`)
        authorizeLogin(this.state.submittedEmail, this.state.submittedPassword)
    }

    handleFormChange = (e, {key, value}) => this.setState({[key]: value})
    handleFormSubmit = () => {
        const {email, password} = this.state

        this.setState({submittedEmail: email, submittedPassword: password}, this.login)
    }

    render() {
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
                        <Menu.Item position='right'>
                            <Header as='h4' style={{color:'white'}}>Don't have an account?</Header>
                        </Menu.Item>
                        <Menu.Item>
                            <Button as ='a' inverted primary={false}>Sign Up</Button>
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
                            onChange={(e, d) => console.log(d)}
                        />
                        <Form.Input
                            label='Password'
                            placeholder='Password'
                            type='password'
                            name='password'
                            value={this.state.password}
                            onChange={this.handleFormChange}
                        />
                        <Form.Checkbox label='Remember Me'/>
                        <Form.Button content='Submit'>Login</Form.Button>
                    </Form>
                </Container>
            </div>
        )
    }
}

export default LoginPage;