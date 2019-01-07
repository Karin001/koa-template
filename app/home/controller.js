function renderHomePage(ctx,next){
    ctx.render('index')
    console.log('here')
    next()
}
module.exports = {
    renderHomePage
}