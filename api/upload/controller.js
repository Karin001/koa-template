function upload(ctx,next){
    ctx.body = {
        success:true,
        playload:JSON.stringify(ctx.request.files),
        user:ctx.request.body
    }
    next()
}
module.exports = {
    upload
}