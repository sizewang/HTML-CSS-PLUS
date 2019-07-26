

const EventEmitter = require('events')
class CustomEmitter extends EventEmitter{

}


const emitter = new EventEmitter()


//'newListener'事件,当有新的监听被添加是触发,回调函数接受两个参数分别是添加的事件名称和函数
emitter.on('newListener',(enventName,cb)=>{
	console.log('execute newListener fn...')
	console.log('enventName:::',enventName)
	cb()
})



emitter.on('test1',()=>{
	console.log('execute test1 fn...')
})
emitter.on('test2',()=>{
	console.log('execute test2 fn...')
})














































