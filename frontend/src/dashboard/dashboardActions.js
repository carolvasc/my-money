import axios from 'axios'

const BASE_URL = 'http://localhost:3003/api'
var request

export function getSummary() {
    axios.get(`${BASE_URL}/billingCycles/summary`)
        .then(resp => { request = resp.data })
    return {
        type: 'BILLING_SUMMARY_FETCHED',
        payload: request
    }
}