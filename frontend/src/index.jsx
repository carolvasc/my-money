import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './main/app'
import reducers from './main/reducers'

const store = createStore(reducers)
ReactDOM.render(
    <Provider>
        <App />
    </Provider>
    , document.getElementById('app'))