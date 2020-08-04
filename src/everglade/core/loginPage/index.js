import React, { useEffect, useState } from 'react'
import { Segment, Container, Header, Menu, Button, Image, Dimmer, Loader } from 'semantic-ui-react'
import { useSelector, useDispatch } from 'react-redux'
import { signInAction, signOutAction, setAuthErrorAction, removeAuthErrorAction } from '../../common/util/redux/actions'
import LoginForm from './loginForm'

import { EvergladeMini } from '../../common/images/logos'

import { authorizeLogin } from '../../common/util/apiCalls/loginAuth'
import { useHistory } from 'react-router-dom'

/**
 * The login page of the website
 */
function LoginPage() {

    const [isLoggingIn, toggleLoggingIn] = useState(false)

    //Hooks
    const dispatch = useDispatch()
    const authError = useSelector(state => state.authError)
    const history = useHistory()

    //Resets the auth error when component unmounts
    useEffect(() => (() => dispatch(removeAuthErrorAction())), [dispatch])

    const login = (email, password) => {
        toggleLoggingIn(true)

        authorizeLogin(email, password)
            .then(response => {
                dispatch(signInAction(response))
                toggleLoggingIn(false)
                history.push('/messaging')
            })
            .catch(error => {
                dispatch(setAuthErrorAction(error))
                toggleLoggingIn(false)
                dispatch(signOutAction())
            })
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
                        <Image src={EvergladeMini} size='mini' as='a' onClick={() => history.push('/')} />
                    </Menu.Item>
                    <Menu.Item position='right'>
                        <Header as='h4' style={{ color: 'white' }}>Don't have an account?</Header>
                    </Menu.Item>
                    <Menu.Item>
                        <Button
                            onClick={() => history.push('/signup')}
                            as='a'
                            inverted
                        >
                            Sign Up
                        </Button>
                    </Menu.Item>
                </Menu>
            </Segment>

            <Dimmer active={isLoggingIn} >
                <Loader>Logging In...</Loader>
            </Dimmer>

            <Container style={{
                position: 'absolute', left: '50%', top: '50%',
                transform: 'translate(-50%, -50%)',
                width: '500px',
            }}>
                <LoginForm onSubmit={login} authError={authError} />
            </Container>
        </div>
    )

}

export default LoginPage;