import React, { Component } from 'react'
import { Segment, Form, Container, Grid, Button, Divider, Header, Menu } from 'semantic-ui-react'

class LoginPage extends Component {

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
                    <Form>
                        <Form.Input
                            label='Email'
                            placeholder='Email'
                        />
                        <Form.Input
                            label='Password'
                            placeholder='Password'
                            type='password'
                        />
                        <Form.Checkbox label='Remember Me'/>
                        <Form.Button>Login</Form.Button>
                    </Form>
                </Container>
            </div>
        )
    }
}

export default LoginPage;