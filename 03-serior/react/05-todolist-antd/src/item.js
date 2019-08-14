/*
* @Author: TomChen
* @Date:   2019-08-09 17:42:43
* @Last Modified by:   TomChen
* @Last Modified time: 2019-08-11 10:40:37
*/
import React,{ Component } from 'react'

import PropTypes from 'prop-types'

class Item extends Component{
    constructor(props){
        super(props)
    }   
    render(){
        const { handleDel,task } = this.props
        return(
            <li onClick={handleDel}>{task}</li>
        )
    }
}

//类型检查
/*
PropTypes
	定义父组件传入子组件数据的校验规则
	注意点
		使用前需要先引入
			import PropTypes from 'prop-types';
		安装react时会默认安装prop-types,所以无需安装
*/

Item.propTypes = {
	handleDel:PropTypes.func,
	task:PropTypes.string.isRequired

}
Item.defaultProps = {
	test:'Hello...'
}




export default Item












