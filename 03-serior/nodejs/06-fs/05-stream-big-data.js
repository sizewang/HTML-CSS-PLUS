


const fs = require('fs');

const rs = fs.createReadStream('./a.mov')




/*
rs.on('open',()=>{
	console.log('read stream open.....')
})
rs.on('close',()=>{
	console.log('read stream close.....')
})

rs.on('end',()=>{
	console.log('read stream end.....')
})


rs.on('data',(chunk)=>{
	console.log('chunk',chunk)
})


*/