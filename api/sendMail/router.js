const router = require('koa-router')()
const koaBody = require('koa-body')
const sendMail = require('./controller').sendMail
router.post('/',koaBody(),async (ctx,next)=>{
      const data = ctx.request.body
      console.log('data!',data)
      await sendMail(JSON.parse(data),ctx)
      next()
  })
  module.exports = router.routes()