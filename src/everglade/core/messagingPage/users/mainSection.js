import React, { Component } from 'react'
import { Divider, Header, Button, Icon, Image, Container } from 'semantic-ui-react'

import { MarkJP } from '../../../common/images/developers'

class MainSection extends Component {
    
    render() {

        return(
            <div style={{ display: 'flex', flex: 4, flexDirection: 'column' }}>
                <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', padding: '0em 1em', flexDirection: 'row', justifyContent:'space-between' }}>
                    <Header as='h2' inverted style={{flex: 22}} >{this.props.user.display_name}</Header>
                    <Button inverted icon style={{alignSelf:'center', flex: 1, marginRight: '1em'}}><Icon name='cog' /></Button>
                </div>

                <div style={{ flex: 0.1, position: 'relative' }}>
                    <Divider inverted />
                </div>

                <div style={{ display: 'flex', flex: 7, flexDirection: 'column' }}>
                    <div style={{ display: 'flex', flex: 2}}>
                        <Image circular size='medium' src={MarkJP} style={{marginLeft: '1em'}} />
                        <Container text style={{ padding: '1em' }} >
                            <Header as='h2' inverted>Description</Header>
                            <Header as='h4' inverted >
                                {this.props.user.description}
                            </Header>
                        </Container>
                    </div>
                    <div style={{ display: 'flex', flex: 3}}>

                    </div>
                </div>


                <div style={{ flex: 0.1, position: 'relative' }}>
                    <Divider inverted />
                </div>
            </div>
        )
    }
}

export default MainSection