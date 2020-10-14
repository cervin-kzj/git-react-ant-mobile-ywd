import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "./assets/css/reset.css"
import 'antd-mobile/dist/antd-mobile.css'
import "./assets/js/scale.js"
import App from './App';
import { HashRouter as Router } from "react-router-dom"
import { Provider } from "react-redux"
import { store } from "./store"

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
