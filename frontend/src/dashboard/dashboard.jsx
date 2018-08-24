import React from 'react'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'

class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <ContentHeader title='Dashboard' subtitle='Versão 1.0' />
                <Content>
                    Dashboard
                </Content>
            </div>
        )
    }
}

export default Dashboard