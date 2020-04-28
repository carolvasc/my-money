import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'
import { showTabs, selectTab } from '../common/tab/tabActions'

const BASE_URL = 'https://my-money-b.herokuapp.com/api'
const INITIAL_VALUES = { credits: [{}], debts: [{}] }

export function getList() {
    const request = axios.get(`${BASE_URL}/billingCycles`)
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}

export function create(values) {
    return submit(values, 'post')
}

export function update(values) {
    return submit(values, 'put')
}

export function remove(values) {
    return submit(values, 'delete')
}

function submit(values, method) {
    return dispatch => {
        const id = values._id ? values._id : ''
        axios[method](`${BASE_URL}/billingCycles/${id}`, values)
            .then(resp => {
                toastr.success('Sucesso', 'Operação realizada com sucesso.')
                // dispara um array de actions
                dispatch(init())
            })
            .catch(err => {
                err.response.data.errors.forEach(error => toastr.error('Erro', error))
            })
    }
}

export function showUpdate(billingCycle) {
    return showTab('tabUpdate', billingCycle)
}

export function showDelete(billingCycle) {
    return showTab('tabDelete', billingCycle)
}

function showTab(tab, bc) {
    if (bc.credits.length < 1) {
        bc.credits = [{}]
    }

    if (bc.debts.length < 1) {
        bc.debts = [{}]
    }

    return [
        showTabs(tab),
        selectTab(tab),
        initialize('billingCycleForm', bc)
    ]
}

export function init() {
    return [
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize('billingCycleForm', INITIAL_VALUES)
    ]
}