const conn = require('./mysql')

const insert = (name, cpf) => `INSERT INTO Clientes (Nome, CPF) values (${name}, ${cpf})`

const execSQLQuery = (sql, res) => {
    conn.query(sql, (error, results, fields) => {
        error ? res.json(error) : res.json(results) 
        conn.end()
    });
  }

const create = (req, res) => {
    const body = req.body
    if(!body.nome) return res.json({error: 10, msg: 'Faltando Nome'})
    if(!body.cpf) return res.json({error: 10, msg: 'Faltando CPF'})
    return execSQLQuery(insert(body.nome, body.cpf))
}

const listAll = (req, res) => {
    return execSQLQuery('Select * from Clientes', res)
}

module.exports = {
    create, 
    listAll
}