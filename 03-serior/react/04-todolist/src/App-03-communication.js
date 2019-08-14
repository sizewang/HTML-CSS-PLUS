




//导入文件
import React,{ Component } from 'react'
import Item from './Item.js'
import "./App.css"

class App extends Component{
	constructor(props){
		super(props)
		this.state = {
			list:["吃饭","睡觉","敲代码","跑步","唱歌"],
			task:''
		}
	}
	handleClick(){
		/*console.log(this)
		console.log('btn click ...')
		console.log(this.state)
		this.state.list.push(this.state.task)
		console.log(this.state)*/

		//数据驱动页面
		this.setState({
			list:[...this.state.list,this.state.task],
			task:''
		})
	}
	handleChange(ev){
		/*console.log(ev.target.value)
		console.log(this.state)
		this.state.task = ev.target.value
		console.log(this.state)*/

		const task = ev.target.value 
		this.setState(()=>({
			task:task
		}))
	}

	//删除部分
	handleDel(index){
		const list = [...this.state.list]
		list.splice(index,1)
		this.setState({
			list
		})

	}




	//获取输入框的数据
	// 给输入框添绑定onChange事件
	// 在onChange的事件函数中通过event.target.value获取值,将获取到的值赋值给this.state

	/*绑定事件
	< onClick = {this.handleClick.bind(this)} >
	注意点
		on后面的字母大写
		=号后面的{}中的是javascript代码
		事件函数中通常需要用当前的组件对象,所以需要在绑定事件时bind(this)*/

    render(){
        return(

        	//添加样式    className
        <div className="App">
        	<input onChange={this.handleChange.bind(this)} value={this.state.task}/>
        	<button onClick={this.handleClick.bind(this)}>提交</button>
        	<ul>
    			{
    				this.state.list.map((item,index)=>{
    					//老方法
    					// return(
    					// 	<li 
    					// 	key={index}
    					// 	onClick={this.handleDel.bind(this,index)}
    					// 	>
    					// 	{item}
    					// 	</li>
    					// 	)	
    					return <Item key={index} task={item} handleDel={this.handleDel.bind(this,index)} />
    				})
    			}
        	</ul>
        </div>
        )
    }
}



export default App





