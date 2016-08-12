import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxPromise from 'redux-promise';


import App from './components/app';
import reducers from './reducers';

//redux
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  //react-redux
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App/>
  </Provider>,
  document.querySelector('.container')
);