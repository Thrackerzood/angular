const { Router } = require('express')
const router = Router()

router.get('/', (req, res) => {
   res.send('authentication')
})

module.exports = router
