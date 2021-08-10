const { Router } = require('express')
const router = Router()

router.get('/:id', (req, res) => {
   res.json({user : req.params.id})
})

module.exports = router