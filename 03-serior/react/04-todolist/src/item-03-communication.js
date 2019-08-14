



import React,{ Component } from 'react'

class Item extends Component{
    constructor(props){
        super(props)
    } 

    /*handleDel(index){
    	console.log('this',this)
    	console.log(this.props.list)

    }*/

    render(){

        return(
        	//绑定事件
            // <li onClick={this.handleDel.bind(this,this.props.index)}>{this.props.task}</li>
            //绑定事件
            <li onClick={this.props.handleDel} >{this.props.task}</li>
        )
    }
}

export default Item











