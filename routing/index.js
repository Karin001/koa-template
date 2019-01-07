const router = require('koa-router')()
const home = require('../app/home/router')
const upload = require('../api/upload/router')
router.redirect('/','/home')
router.use('/home',home)
router.use('/api',upload)
module.exports = router