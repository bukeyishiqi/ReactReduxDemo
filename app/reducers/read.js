/*
 * @Author: chenqi 
 * @Date: 2017-11-22 15:38:35 
 * @Last Modified by: chenqi
 * @Last Modified time: 2017-11-23 16:22:45
 */

import * as types from '../constants/ActionTypes'


// 初始State

const initialState = {
    isRefreshing: false,
    loading: true,
};

export default function read(state=initialState, action) {  
    switch(action.type) {
        case types.REQUEST_LIST:
            return Object.assign({}, state,{
                isRefreshing: true,
                loading: false,
                isLoadMore: true,
            });
        case types.FETCH_LIST:
            return Object.assign({}, state,{
                isRefreshing: true,
                loading: false,
                isLoadMore: true,
            });
        case types.RECIVE_LIST:
             return Object.assign({}, state,{
                isRefreshing: true,
                loading: false,
                isLoadMore: true,
            });
        default:
            return state;
    }
    
}