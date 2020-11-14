const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose');
mongoose.connect(
    'mongodb+srv://jioneeu:test1234@boilerplate.v4yft.mongodb.net/boilerplate?retryWrites=true&w=majority', {
        useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('Mongoose - MongoDB Connected!'))
 .catch(err =>  console.log(err))

app.get('/', (req, res) => {
    res.send('Hello World!こんにちは')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})