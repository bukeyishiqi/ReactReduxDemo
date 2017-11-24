/*
 * @Author: chenqi 
 * @Date: 2017-11-20 12:17:37 
 * @Last Modified by: chenqi
 * @Last Modified time: 2017-11-23 11:27:30
 */


import { createStore, applyMiddleware} from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';

import rootReducer from '../reducers/index'


const middlewares = [];
const { logger } = require('redux-logger');

// configuring saga middleware
const sagaMiddleware = createSagaMiddleware();

middlewares.push(sagaMiddleware);
/* global __DEV__  */
if (__DEV__) {
//   middlewares.push(logger);
}

//applymiddleware配置中间件
const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

export default function configureStore(initialState) {
    const store = createStoreWithMiddleware(rootReducer, initialState);
    store.runSaga = sagaMiddleware.run;
    store.close = () => store.dispatch(END);
    
    return store;
};
