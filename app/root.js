/*
 * @Author: chenqi 
 * @Date: 2017-11-20 11:30:52 
 * @Last Modified by: chenqi
 * @Last Modified time: 2017-11-23 11:28:06
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configure-store'
import App from './containers/app'
import rootSaga from './sagas/index'


const store = configureStore();

// run root saga
store.runSaga(rootSaga);

 // 构建根视图
const Root = () => (
    <Provider store = {store}>
        <App />
    </Provider>
);

export default Root;