
const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))


app.get('/',(req,res)=>{
    //res.send('get response data!')    
    //res.send('<h1>get response data!</h1>')    
    /*
    res.send({
        name:"Tom"
    })
    */
   
   // res.end('get response data!') 
   // res.end('<h1>get response data!</h1>') 
   /* 
    res.end({
        name:"Tom"
    })
    */
   /*
    res.json({
        name:"Tom"
    })
    */
    /*
    res.json('get response data!')
    */
   res.json('<h1>get response data!</h1>') 



})


app.listen(port, () => console.log(`app listening on port ${port}!`))