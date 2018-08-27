import React from 'react'
import { reduxForm, Field } from 'redux-form'
import labelAndInput from '../common/form/labelAndInput'

class BillingCycleForm extends React.Component {
    render() {
        const { handleSubmit } = this.props
        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field name='name' component={labelAndInput} autoComplete='off'
                        label='Nome' cols='12 6' placeholder='Informe uma descrição' />
                    <Field name='month' component={labelAndInput} type='number' autoComplete='off'
                        label='Mês' cols='12 3' placeholder='Informe o mês' />
                    <Field name='year' component={labelAndInput} type='number' autoComplete='off'
                        label='Ano' cols='12 3' placeholder='Informe o ano' />
                </div>
                <div className="box-footer">
                    <button type='submit' className="btn btn-primary">Submit</button>
                </div>
            </form>
        )
    }
}

export default reduxForm({ form: 'billingCycleForm' })(BillingCycleForm)