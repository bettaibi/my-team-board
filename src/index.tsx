import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from 'axios';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import appReducer from './store';
import { Provider } from 'react-redux';
import { createStore } from "redux";

import 'emoji-mart/css/emoji-mart.css';
import Cookies from 'universal-cookie';
 
const cookies = new Cookies();

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
axios.defaults.withCredentials = true;

axios.interceptors.response.use(response => {
  return response;
}, error => {
 if (error.response.status === 401) {
    localStorage.clear();
    sessionStorage.clear();
    cookies.remove("isLogged");
    window.location.reload();
 }
 return error;
});

const store = createStore(appReducer);

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();