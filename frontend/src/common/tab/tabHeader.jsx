import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { selectTab } from './tabActions'

class TabHeader extends React.Component {
    render() {
        const selected = this.props.tab.selected === this.props.target
        return (
            <li className={selected ? 'active' : ''}>
                <a href='javascript:;'
                    data-toggle='tab'
                    onClick={() => this.props.selectTab(this.props.target)}
                    data-target={this.props.target}>
                    <i className={`fa fa-${this.props.icon}`}
                        style={{ paddingRight: '4px' }}></i>{this.props.label}
                </a>
            </li>
        )
    }
}

const mapStateToProps = store => ({ tab: store.tab })
const mapDispatchToProps = dispatch => bindActionCreators({ selectTab }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TabHeader)