import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './app/app'
import './index.css'
import store from './redux/store'
import * as serviceWorker from './serviceWorker'

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'))

// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
