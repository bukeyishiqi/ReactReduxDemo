/*
 * @Author: chenqi 
 * @Date: 2017-11-22 11:37:16 
 * @Last Modified by: chenqi
 * @Last Modified time: 2017-11-23 11:42:55
 */

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Main from '../pages/MainPage/Main'

// 获取当前容器Actions
import * as actionCreator from '../actions/read'


class MainContainer extends React.Component {
    static navigationOptions = {
        title: '首页',
    }

    render() {
        return <Main {...this.props} />;
    }
}

const mapStateToProps = (state) => {
    // 通过reducer 获取state
    const { read } = state;
    return {
        read
    };
}

// 绑定Actions,生成新Action生成器
const mapDispatchToProps = (dispatch) => {
    const actions = bindActionCreators(actionCreator , dispatch);
    return {
        actions
    };
}

// 导出数据层容器（通过MainContainer自动生成新的容器）
export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);