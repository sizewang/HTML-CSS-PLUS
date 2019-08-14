/*
* @Author: TomChen
* @Date:   2019-08-12 15:11:47
* @Last Modified by:   TomChen
* @Last Modified time: 2019-08-12 15:16:08
*/
import {
    ADD_ITEM,
    CHANGE_ITEM,
    DEL_ITEM,
    LOAD_DATA
} from './actionTypes.js'

import axios from 'axios'

export const getChangeItemAction = (task)=>({
    type: CHANGE_ITEM,
    payload: task    
})

export const getAddItemAction = ()=>({
    type:ADD_ITEM
})

export const getDelItemAction = (index)=>({
    type: DEL_ITEM,
    payload: index   
})


export const getLoadInitData = ()=>({
	type:LOAD_DATA,
	payload
})


