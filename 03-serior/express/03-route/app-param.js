
const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))


// /users/34/books/8888
app.get('/users/:userId/books/:bookId', (req, res) => {
    console.log(req.params)//{ userId: '34', bookId: '8888' }
    res.send('get response data!')
})

app.get('/',(req,res)=>{
    console.log(req.query)
    res.send('get response data!')    
})


app.listen(port, () => console.log(`app listening on port ${port}!`))