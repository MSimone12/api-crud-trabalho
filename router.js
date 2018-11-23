const express = require('express')
const router = express.Router()
const actions = require('./actions')

router.get('/', (req, res) => {
    return res.json({taokei: 'taokei'})
})

router.post('/create', actions.create)

router.put('/update/:id', actions.update)

router.post('/delete/:id', actions.deleteById)

router.get('/clientes', actions.listAll)

router.get('/clientes/:id', actions.searchClient)

module.exports = router