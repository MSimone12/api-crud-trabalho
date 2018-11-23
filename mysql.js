const mysql = require('mysql')

const connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: 'root',
	database: 'trabalho'
})

const execSQLQuery = (sql, res) => {
	connection.query(sql, (error, results, fields) => {
		console.log(typeof results)
		error ? res.json(error) : res.json(results)
	})
}

module.exports = execSQLQuery