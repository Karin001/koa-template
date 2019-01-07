function renderHomePage(ctx,next){
    ctx.render('home')
    console.log('here')
    next()
}
module.exports = {
    renderHomePage
}