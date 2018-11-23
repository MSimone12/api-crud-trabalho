const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'mysql995.umbler.com',
    user: 'trabalho',
    password: 'abc123456',
    database: 'trabalho123'
})

module.exports = connection