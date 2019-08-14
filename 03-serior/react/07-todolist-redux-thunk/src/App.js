/*
 * @Author: TomChen
 * @Date:   2019-08-09 15:14:36
 * @Last Modified by:   TomChen
 * @Last Modified time: 2019-08-12 11:48:44
 */
import React, { Component } from 'react'
import store from './store'
import {
    getChangeItemAction,
    getAddItemAction,
    getDelItemAction,
    getRequestInitDataAction
} from './store/actionCreator.js'


import AppUI from './AppUI.js'

//容器组件
class App extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleDel = this.handleDel.bind(this)

        this.state = store.getState()
        store.subscribe(() => { this.setState(store.getState()) })
    }

    ComponentDidMout(){
        //发送ajax请求
        store.dispatch(getRequestInitDataAction())
    }
    //添加部分
    handleAdd() {
        store.dispatch(getAddItemAction())
    }
    handleChange(ev) {
        const task = ev.target.value
        store.dispatch(getChangeItemAction(task))
    }
    //删除部分
    handleDel(index) {
       store.dispatch(getDelItemAction(index))
    }
    render() {
        return (
            <AppUI 
                task={this.state.task}
                list={this.state.list}
                handleChange={this.handleChange}
                handleDel={this.handleDel}
                handleAdd={this.handleAdd}
            />
        )
    }
}

export default App