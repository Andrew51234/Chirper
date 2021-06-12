import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './Components/App'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './Reducers'
import Middleware from './Middleware'

const store = createStore(reducer, Middleware)

ReactDOM.render(
    <Provider store = {store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)