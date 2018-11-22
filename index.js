const express = require('express')
const app = express()
const mysql = require('mysql')
const bodyParser = require('body-parser')
const router = require('./router')

const port = 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(router)
app.listen(port)
console.log(`servidor rodando na porta ${port}`)