
const router = require('koa-router')()
const koaBody = require('koa-body')
const path = require('path')
const upload = require('./controller').upload
let i =0;
const dir = path.join(__dirname,'../../uploads');
router.post('/upload',koaBody({
    multipart: true,
    onError:function(err){console.log(err)},
    formidable: {
      uploadDir: dir,
      keepExtensions:true,
      maxFileSize:200*1024*1024,
      onFileBegin:function(name,file){
        file.name=++i
        file.path =`${dir}/${file.name}.${file.path.split('.')[1]}`
          console.log('name',name,file.name)
          
      }
    }
  }),upload)
  module.exports = router.routes()