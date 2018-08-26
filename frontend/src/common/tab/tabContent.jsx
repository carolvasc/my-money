import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class TabContent extends React.Component {
    render() {
        const selected = this.props.tab.selected === this.props.id
        return (
            <div id={this.props.id}
                className={`tab-pane ${selected ? 'active' : ''}`}>
                {this.props.children}
            </div>
        )
    }
}

const mapStateToProps = store => ({ tab: store.tab })
export default connect(mapStateToProps)(TabContent)