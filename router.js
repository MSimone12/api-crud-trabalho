const express = require('express')
const router = express.Router()
const actions = require('./actions')

router.get('/', (req, res) => {
    return res.json({taokei: 'taokei'})
})

router.get('/fodase', (req, res) => res.send('Fodase Mermao'))

router.post('/create', actions.create)

module.exports = router