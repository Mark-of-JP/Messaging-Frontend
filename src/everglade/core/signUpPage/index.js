import React from 'react'
import { Segment, Container, Button, Header, Menu, Image } from 'semantic-ui-react'
import { useHistory } from 'react-router-dom'
import SignUpForm from './signUpForm'
import { authorizeSignUp } from '../../common/util/loginAuth'
import { signInAction, setAuthErrorAction, removeAuthErrorAction } from '../../common/util/redux/actions'
import { useDispatch, useSelector } from 'react-redux'

import { EvergladeMini } from '../../common/images/logos'

function SignUpPage() {

    const history = useHistory()
    const dispatch = useDispatch()
    const authError = useSelector(state => state.authError)

    let signUp = (email, password) => {
        console.log(`Signing Up with ${email} and ${password}`)
        authorizeSignUp(email, password)
            .then(response => {
                dispatch(signInAction(response))
                dispatch(removeAuthErrorAction())
                history.push('/messaging')
            })
            .catch(error => {
                dispatch(setAuthErrorAction(error))
            })
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