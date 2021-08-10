const { Router } = require("express")
const router = Router()

router.get('/', (req, res)=>{
   res.end('home page!')
})

module.exports = router