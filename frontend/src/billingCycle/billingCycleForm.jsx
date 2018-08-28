import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'

import { init } from './billingCycleActions'
import labelAndInput from '../common/form/labelAndInput'

class BillingCycleForm extends React.Component {
    render() {
        const { handleSubmit, readOnly } = this.props
        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field name='name' component={labelAndInput} autoComplete='off' readOnly={readOnly}
                        label='Nome' cols='12 6' placeholder='Informe uma descrição' />
                    <Field name='month' component={labelAndInput} type='number' autoComplete='off'
                        readOnly={readOnly} label='Mês' cols='12 3' placeholder='Informe o mês' />
                    <Field name='year' component={labelAndInput} type='number' autoComplete='off'
                        readOnly={readOnly} label='Ano' cols='12 3' placeholder='Informe o ano' />
                </div>
                <div className="box-footer">
                    <button type='button' className="btn btn-default pull-right"
                        onClick={this.props.init}>Cancelar</button>
                    <button type='submit' className={`btn btn-${this.props.submitClass} pull-right`}>
                        {this.props.submitLabel}
                    </button>
                </div>
            </form>
        )
    }
}

BillingCycleForm = reduxForm({ form: 'billingCycleForm', destroyOnUnmount: false })(BillingCycleForm)
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)
export default connect(null, mapDispatchToProps)(BillingCycleForm)