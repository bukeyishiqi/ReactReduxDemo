/*
 * @Author: chenqi 
 * @Date: 2017-11-22 15:47:07 
 * @Last Modified by: chenqi
 * @Last Modified time: 2017-11-23 16:27:38
 */

import {take, call, put, fork} from 'redux-saga/effects';
import * as types from '../constants/ActionTypes'

import { fetchList, reciveList } from '../actions/read'

export function * watchRequestList() {
    while(true) {
        // 匹配到对应Action
        const { isRefreshing, loading } = yield take(types.REQUEST_LIST);
        // 发起业务
        yield fork(requestBussinessList,isRefreshing,loading);
    }
}

// 业务请求
export function * requestBussinessList(
    isRefreshing,
    loading
) {
    console.log('requestBussinessList', isRefreshing, loading);
    try {
        // 发起action
        yield put(fetchList(isRefreshing, loading));

    } catch (error) {
         yield put(fetchList(false, false));
    }
}