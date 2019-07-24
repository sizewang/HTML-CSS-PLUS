
// -----------------------------有误--------------------------------------------

const EventEmitter = require('events')
class CustomEmitter extends EventEmitter{

}

//1.用 on
const emitter = new EventEmitter()


emitter listener =()=>{
	console.log('execute test fn1...')
}


emitter.on('test',listener)
emitter.off('test')
emitter.emit('test')