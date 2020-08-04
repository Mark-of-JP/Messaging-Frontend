import React, { useEffect, useState } from 'react'
import { Segment, Container, Button, Header, Menu, Image, Dimmer, Loader } from 'semantic-ui-react'
import { useHistory } from 'react-router-dom'
import SignUpForm from './signUpForm'
import { authorizeSignUp } from '../../common/util/apiCalls/loginAuth'
import { signInAction, setAuthErrorAction, removeAuthErrorAction } from '../../common/util/redux/actions'
import { useDispatch, useSelector } from 'react-redux'

import { EvergladeMini } from '../../common/images/logos'

/**
 * The sign up page of the website
 */
function SignUpPage() {

    const [isSigningUp, toggleSigningUp] = useState(false)

    //Hooks
    const history = useHistory()
    const dispatch = useDispatch()
    const authError = useSelector(state => state.authError)

    //Resets the auth error when the component dismounts
    useEffect(() => (() => dispatch(removeAuthErrorAction())), [dispatch])

    const signUp = (email, password, display_name) => {
        toggleSigningUp(true)
        authorizeSignUp(email, password, display_name)
            .then(response => {
                dispatch(signInAction(response))
                dispatch(removeAuthErrorAction())
                history.push('/messaging')
            })
            .catch(error => {
                dispatch(setAuthErrorAction(error))
            })
            .finally(() => toggleSigningUp(false))
    }

    return (<div>
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
                    <Image src={EvergladeMini} size='mini' as='a' onClick={() => history.push('/')} />
                </Menu.Item>
                <Menu.Item position='right'>
                    <Header as='h4' style={{ color: 'white' }}>Already have an account?</Header>
                </Menu.Item>
                <Menu.Item>
                    <Button as='a' inverted primary={false} onClick={() => history.push('/login')}>Login</Button>
                </Menu.Item>
            </Menu>
        </Segment>

        <Dimmer active={isSigningUp} >
            <Loader >Signing Up...</Loader>
        </Dimmer>

        <Container style={{
            position: 'absolute', left: '50%', top: '50%',
            transform: 'translate(-50%, -50%)',
            width: '500px',
        }}>
            <SignUpForm onSubmit={signUp} authError={authError} />
        </Container>
    </div>)
}

export default SignUpPage;