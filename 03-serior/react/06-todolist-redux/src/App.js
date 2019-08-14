/*
 * @Author: TomChen
 * @Date:   2019-08-09 15:14:36
 * @Last Modified by:   TomChen
 * @Last Modified time: 2019-08-12 11:48:44
 */
import React, { Component } from 'react'

import store from './store'
import axios from 'axios'

import {
    getChangeItemAction,
    getAddItemAction,
    getDelItemAction
    getLoadInitDataAction
} from './store/actionCreator.js'


import AppUI from './APPUI.js'

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
        axios.get('http://127.0.0.1:3000')
        .then(result=>{
            // console.log(result)
            store.dispatch(getLoadInitDataAction(result.data))
        })
        .catch(err=>{
            console.log(err)
        })
    }
    //添加部分
    handleAdd() {
        /*const action = {
            type:'add_item'
        }
        store.dispatch(action)*/
        store.dispatch(getAddItemAction())
    }
    handleChange(ev) {
        const task = ev.target.value
        //派发action
        //action就是一个对象
        /*const action = {
            type: "change_item",
            payload: task
        }
        store.dispatch(action)*/
        store.dispatch(getChangeItemAction(task))
    }
    //删除部分
    handleDel(index) {
        
       /*const action = {
            type: "del_item",
            payload: index        
       }
       store.dispatch(action)*/
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