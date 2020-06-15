import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

class SignUpForm extends Component {

    state = {
        email: "",
        password: "",
        secondPassword: ""
    }

    handleFormChange = (e, { name, value }) => this.setState({ [name]: value })

    render() {

        return (
            <Form onSubmit={() => this.props.onSubmit(this.state.email, this.state.password)}>
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
        )
    }
}

export default SignUpForm