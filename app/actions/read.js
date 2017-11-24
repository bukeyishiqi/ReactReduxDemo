/*
 * @Author: chenqi 
 * @Date: 2017-11-22 11:54:09 
 * @Last Modified by: chenqi
 * @Last Modified time: 2017-11-23 16:23:01
 */

import * as types from '../constants/ActionTypes'

// 响应按钮事件发起请求
export function requestList(
    isRefreshing,
    loading
){
    return {
        type: types.REQUEST_LIST,
        isRefreshing,
        loading,
    };
}

export function fetchList(isRefreshing, loading, isLoadMore = false) {
    return {
        type: types.FETCH_LIST,
        isRefreshing,
        loading,
        isLoadMore
    };
}

export function reciveList(list) {
    return {
        type: types.RECIVE_LIST,
        list
    };
}