/*
 * @Author: chenqi 
 * @Date: 2017-11-21 12:25:06 
 * @Last Modified by: chenqi
 * @Last Modified time: 2017-11-23 16:30:06
 */

import { all, frok}  from 'redux-saga/effects'

import { watchRequestList } from './read'


// 拦截Action
export default function* rootSaga() {
    yield watchRequestList()
}
