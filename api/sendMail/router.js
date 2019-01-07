const router = require('koa-router')()
const koaBody = require('koa-body')
const sendMail = require('./controller').sendMail
router.post('/',koaBody(),async (ctx,next)=>{
      const data = ctx.request.body
      await sendMail(data,ctx)
      next()
  })
  module.exports = router.routes()