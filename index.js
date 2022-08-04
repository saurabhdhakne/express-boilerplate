const express = require('express')
const app = express()
const {argv} = require('process')

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(argv[2],()=>{
    console.log(`Server started at ${argv[2]}`);
})