const router = require('koa-router')()
const home = require('../app/home/router')
const contact = require('../app/contact/router')
const upload = require('../api/upload/router')
const sendMail = require('../api/sendMail/router')
router.redirect('/','/home')
router.use('/home',home)
router.use('/contact',contact)
router.use('/api',upload)
router.use('/sendmail',sendMail)

module.exports = router