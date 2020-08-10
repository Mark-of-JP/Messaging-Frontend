import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

class ChangeInfoForm extends Component {

    state = {
        displayName: "",
        description: "",

    }

    componentDidMount() {
        this.setState({
            displayName: this.props.displayName,
            description: this.props.description
        })

    }

    onSubmit = () => {
        if (this.state.displayName !== "") {
            this.props.updateUserInfo(this.state.displayName, this.state.description)
        }
    }

    render() {
        return (
            <Form style={{margin: '0.5em 0em'}}>
                <Form.Input
                    label="Display Name"
                    placeholder="Display Name..."
                    name="displayName"
                    value={this.state.displayName}
                    onChange={(e, v) => this.setState({ displayName: v['value'] })}
                    error={this.state.displayName === "" ? { content: 'Display name can not be blank', pointing: 'below' } : undefined}
                />
                <Form.TextArea
                    label="Description"
                    placeholder="Description..."
                    value={this.state.description}
                    onChange={(e, v) => this.setState({ description: v['value'] })}
                />
                <Form.Button content="Submit" color="green"
                    onClick={this.onSubmit}
                >
                    Update Info
                </Form.Button>
            </Form>
        )
    }
}

export default ChangeInfoForm