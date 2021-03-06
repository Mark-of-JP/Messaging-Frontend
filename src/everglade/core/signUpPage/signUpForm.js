import React, { Component } from 'react'
import { Form, Message } from 'semantic-ui-react'

/**
 * Handles the form logic and display of the logic form
 */
class SignUpForm extends Component {

    state = {
        email: "",
        display_name: "",
        password: "",
        secondPassword: "",
        validEmail: true,
        validPassword: true,
        validPasswordMatch: true
    }

    handleFormChange = (e, { name, value }) => this.setState({ [name]: value })

    isEmailValid = (email) => /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email)
    isPasswordValid = (password) => password !== ''
    isPasswordMatch = (password, secondPassword) => password === secondPassword

    submitSignUp = () => {
        const {email, display_name, password, secondPassword} = this.state

        let invalidValues = {validEmail: true, validPassword: true, validPasswordMatch: true}

        if(!this.isEmailValid(email)) {
            invalidValues['validEmail'] = false
        }

        if(!this.isPasswordValid(password)) {
            invalidValues['validPassword'] = false
        }

        if(!this.isPasswordMatch(password, secondPassword)) {
            invalidValues['validPasswordMatch'] = false
        }

        this.setState(invalidValues, () => {
            if(this.state.validEmail && this.state.validPassword && this.state.validPasswordMatch) {
                this.props.onSubmit(email, password, display_name)
            }
        })
    }

    render() {

        return (
            <Form error onSubmit={this.submitSignUp}>
                <Form.Input
                    label='Email'
                    placeholder='Email'
                    name='email'
                    value={this.state.email}
                    onChange={this.handleFormChange}
                    error={!this.state.validEmail ? {content:'Please provide a proper email.', pointing: 'below'} : undefined}
                />
                <Form.Input
                    label='Display Name'
                    placeholder='Display Name'
                    name='display_name'
                    value={this.state.display_name}
                    onChange={this.handleFormChange}
                    error={!this.state.validEmail ? {content:'Please provide a proper email.', pointing: 'below'} : undefined}
                />
                <Form.Input
                    label='Password'
                    placeholder='Password'
                    type='password'
                    name='password'
                    value={this.state.password}
                    onChange={this.handleFormChange}
                    error={!this.state.validPassword ? {content:'Please provide a proper password.', pointing: 'below'} : undefined}
                />
                <Form.Input
                    label='Re-type Password'
                    placeholder='Re-type Password'
                    type='password'
                    name='secondPassword'
                    value={this.state.secondPassword}
                    onChange={this.handleFormChange}
                    error={!this.state.validPasswordMatch ? {content:'Passwords do not match.', pointing: 'below'} : undefined}
                />

                {this.props.authError !== null && <Message error header='Sign Up Failed' content={this.props.authError.message} />}

                <Form.Button content='Submit'>Sign Up</Form.Button>
            </Form>
        )
    }
}

export default SignUpForm