const { Router } = require("express")
const router = Router()

router.get('/', (req, res)=> {
   res.end('all users')
})

module.exports = router