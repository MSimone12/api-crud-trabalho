const conn = require('./mysql')

const insert = (name, cpf) => `INSERT INTO Clientes (Nome, CPF) values (${name}, ${cpf})`

const execSQLQuery = (sql, res) => {
    conn.query(sql, (error, results, fields) => {
        error ? res.json(error) : res.json(results)
    })
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

const update = (req, res) => {
    const id = req.params.id
    const name = req.body.nome
    const cpf = req.body.cpf
    if(!body.nome) return res.json({error: 10, msg: 'Faltando Nome'})
    if(!body.cpf) return res.json({error: 10, msg: 'Faltando CPF'})
    return execSQLQuery(`UPDATE Clientes SET Nome='${nome}' and CPF='${cpf}' WHERE ID=${id}`, res)
}

const deleteById = (req, res) => {
    const id = req.params.id
    return execSQLQuery(`DELETE FROM Clientes WHERE ID=${id}`)
}

module.exports = {
    create,
    update,
    deleteById, 
    listAll
}