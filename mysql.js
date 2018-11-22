const mysql = require('mysql')

const connection = mysql.createConnection({
    host     : 'mysql995.umbler.com',
    port     : 41890,
    user     : 'trabalho',
    password : 'trabalho123',
    database : 'trabalho'
})

module.exports = connection