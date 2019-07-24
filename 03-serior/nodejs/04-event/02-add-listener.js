
const EventEmitter = require('events')
class CustomEmitter extends EventEmitter{

}
// ----------------------------------事件监听-----------------------------------------
//1.用 on
const emitter = new EventEmitter()
emitter.on('test',()=>{
	console.log('execute test fn...')
})
emitter.emit('test')

//2.用 addListener
emitter.on('addListener',()=>{
	console.log('execute test666 fn6...')
})
emitter.emit('test')


//3.用once
emitter.once('test',()=>{
	console.log('execute test fn3...')
})
emitter.emit('test')




















































































