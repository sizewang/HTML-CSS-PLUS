const EventEmitter = require('events')
class CustomEmitter extends EventEmitter{

}

//1.用 on
const emitter = new EventEmitter()


emitter.on('test',(arg1,arg2)=>{
	console.log('get arg1:',arg1)
	console.log('get arg2:',arg2)
})

emitter.emit('test','aa','bb')



// const agrs = ['bb','cc']

// emitter.emit('test',...args)



































