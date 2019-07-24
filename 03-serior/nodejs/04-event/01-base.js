

const EventEmitter = require('events')
console.log(EventEmitter)


const emitter = new EventEmitter()

// //事件的绑定/事件的添加监听
emitter.on('test',()=>{
	console.log('execute test fn...')
})

// //事件触发
emitter.emit('test')






// class CustomEmitter extends EventEmitter{

// }

// const emitter = new EventEmitter()

// emitter.on('test',()=>{
// 	console.log('execute test fn...')
// })
// emitter.emit('test')


