require("dotenv").config();
const Koa = require('koa')
const path = require('path')
const app = new Koa()
app.use(require('koa-static')(path.join(__dirname, 'public')))
const render = require('koa-art-template')
const router = require('./routing')
render(app, {
    root: path.join(__dirname, 'views'),
    extname: '.html',
    debug: process.env.NODE_ENV !== 'production'
});
app.use(router.routes())
app.listen(3000)