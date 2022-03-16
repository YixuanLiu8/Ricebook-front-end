import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import {createLogger} from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'


import Reducer from './reducers'
import App from './App'

require('./styles.css')
// eslint-disable-next-line import/no-webpack-loader-syntax
//require('expose?$!expose?jQuery!jquery')
const logger = createLogger()
const store = createStore(Reducer, applyMiddleware(logger))
render(
    <Provider store={store}>
        <App title='Front-End-App'/>
    </Provider>,
    document.getElementById('app')
)
