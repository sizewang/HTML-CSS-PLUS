
const crypto = require('crypto')
const hmac = crypto.createHmac('sha512','sdfdsfjdslk12321')

//添加需要加密的明文
//123456
hmac.update('123456')

//输出密文
console.log(hmac.digest('hex'))