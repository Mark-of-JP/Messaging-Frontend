import React, { Component } from 'react'
import { Divider, Header, Icon } from 'semantic-ui-react'

class HomepageAbout extends Component {
    render() {
        return (
            <div>
                <Divider horizontal inverted>
                    <Header as='h4' inverted>
                        <Icon name='cogs' />
                            About
                    </Header>
                </Divider>

                <Header>Eat nut 3000</Header>
            </div>
        )
    }
}

export default HomepageAbout;