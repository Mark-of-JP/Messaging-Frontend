import React, { Component } from 'react'
import { Form, Message } from 'semantic-ui-react'

class LoginForm extends Component {

    state = {
        email: "",
        password: "",
        attemptedLogin: false
    }

    handleFormChange = (e, {name, value}) => this.setState({[name]: value})

    render() {

        return (
            <Form error onSubmit={() => {
                this.props.onSubmit(this.state.email, this.state.password)
                this.setState({attemptedLogin: true})
            }}>
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
                <Form.Checkbox label='Remember Me' />

                {(!this.props.hasUser && this.state.attemptedLogin) && <Message error header='Login Failed' content='Credentials are invalid'/>}

                <Form.Button content='Submit'>Login</Form.Button>
            </Form>
        )
    }
}

export default LoginForm