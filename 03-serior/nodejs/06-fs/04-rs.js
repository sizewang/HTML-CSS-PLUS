

const fs = require('fs');

const rs = fs.createReadStream('./rs.txt')

rs.on('open',()=>{
	console.log('read stream open.....')
})
rs.on('close',()=>{
	console.log('read stream close.....')
})

rs.on('end',(chunk)=>{
	console.log('read stream close.....')
})


rs.on('data',(chunk)=>{
	console.log('chunk',chunk)
})