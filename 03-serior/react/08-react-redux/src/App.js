/*
 * @Author: TomChen
 * @Date:   2019-08-09 15:14:36
 * @Last Modified by:   TomChen
 * @Last Modified time: 2019-08-12 11:48:44
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Input, Row, Col, List } from 'antd';

import "./App.css"
import {
    getChangeItemAction,
    getAddItemAction,
    getDelItemAction,
    getRequestInitDataAction
} from './store/actionCreator.js'

class App extends Component {
    componentDidMount(){
        this.props.handleInit()
    }
    render() {
        const { handleChange,task,handleAdd,handleDel,list } = this.props
        return (
            <div className="App">
            <Row>
                <Col span={18}>
                    <Input 
                        onChange={handleChange}
                        value={task}
                    />
                </Col>
                <Col span={6}>
                    <Button 
                        type="primary"
                        onClick={handleAdd}
                    >
                        Primary
                    </Button>
                </Col>
            </Row>
            <List
              style={{marginTop:10}}
              bordered
              dataSource={list}
              renderItem={(item,index) => (
                <List.Item
                    onClick={()=>{handleDel(index)}}
                >
                   {item}
                </List.Item>
              )}
            />  
        </div>
        )          
    }
}

//映射属性到组件
const mapStateToProps = (state)=>({
    task:state.task,
    list:state.list      
})
//映射方法到组件
const mapDispatchToProps = (dispatch)=>({
    handleChange:(ev)=>{
        const task = ev.target.value
        dispatch(getChangeItemAction(task))
    },
    handleAdd:()=>{
        dispatch(getAddItemAction())
    },
    handleDel:(index)=>{
        dispatch(getDelItemAction(index))
    },
    handleInit:()=>{
        dispatch(getRequestInitDataAction())
    }
})


export default connect(mapStateToProps,mapDispatchToProps)(App)


