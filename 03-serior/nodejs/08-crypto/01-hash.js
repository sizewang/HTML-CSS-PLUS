
const crypto = require('crypto')
//md5  加密算法->不可逆
// const hash = crypto.createHash('md5')
// const hash = crypto.createHash('sha256')
const hash = crypto.createHash('sha512')

//添加需要加密的明文
//123456
// hash.update('123456')
hash.update('654321')

//输出密文
console.log(hash.digest('hex'))

