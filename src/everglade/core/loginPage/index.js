import React from 'react'
import { Segment, Container, Header, Menu, Button, Image } from 'semantic-ui-react'
import { useSelector, useDispatch } from 'react-redux'
import { signInAction } from '../../common/util/redux/actions'
import LoginForm from './loginForm'

import { EvergladeMini } from '../../common/images/logos'

import authorizeLogin from '../../common/util/loginAuth'
import { useHistory } from 'react-router-dom'

function LoginPage() {
    const dispatch = useDispatch()

    const history = useHistory()

    const login = (email, password) => {

        console.log(`Logging in with ${email} and ${password}`)
        authorizeLogin(email, password)
            .then(response => dispatch(signInAction(response)))
            .catch(e => console.log('unpog'))
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

            <Container style={{
                position: 'absolute', left: '50%', top: '50%',
                transform: 'translate(-50%, -50%)',
                width: '500px',
            }}>
                <LoginForm onSubmit={login} />
            </Container>
        </div>
    )

}

export default LoginPage;