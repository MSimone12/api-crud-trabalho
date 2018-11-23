const execSQLQuery = require('./mysql')

const create = (req, res) => {
	const nome = req.body.nome
	const cpf = req.body.cpf
	if (!nome) return res.json({
		error: 10,
		msg: 'Faltando Nome'
	})
	if (!cpf) return res.json({
		error: 11,
		msg: 'Faltando CPF'
	})
	return execSQLQuery(`INSERT INTO Clientes (Nome, CPF) values ('${nome}', '${cpf}')`, res)
}

const listAll = (req, res) => {
	return execSQLQuery('Select * from Clientes', res)
}

const update = (req, res) => {
	const id = parseInt(req.params.id)
	if(!id) return res.status(400).json({error: 9, msg: 'Faltando Id'})
	const name = req.body.nome
	const cpf = req.body.cpf
	if (!name && !cpf) return res.send({ error: 10,	msg: 'Requisição Inválida' })
	let query = ''
	if(!!name || !!cpf) {
		query = query.concat('UPDATE Clientes SET ', name ? `Nome='${name}' ` : '', name && cpf ? ', ' : '', cpf ? `CPF='${cpf}' ` : '', `WHERE Id=${id}`)
		return execSQLQuery(query, res)
	}
	return res.send('OK')
}

const deleteById = (req, res) => {
	const id = req.params.id
	return execSQLQuery(`DELETE FROM Clientes WHERE Id=${id}`, res)
}

const searchClient = (req, res) => {
	const id = req.params.id
	return execSQLQuery(`select * from Clientes where Id=${id}`, res)
}

module.exports = {
	create,
	update,
	deleteById,
	listAll,
	searchClient
}