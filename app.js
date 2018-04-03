/**
 * Created by lonelydawn on 2018-04-03.
 */

const Koa = require('koa')
const route = require('koa-route')
const serve = require("koa-static")
const sendfile = require("koa-sendfile")
const compress = require('koa-compress')
const json = require('koa-json')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const path = require("path")
const common = require("./routes/common")
const app = new Koa()

// middlewares
app.use(bodyparser())
app.use(json())
app.use(logger())
app.use(compress())
app.use(serve(path.join(__dirname, "dist")))
// 静态资源
app.use(serve(path.join(__dirname, "static")))

app.use(common.config)

// 初始请求返回 index.html 文件
app.use(route.get('/*',function * () {
  yield * sendfile.call(this, path.join(__dirname, 'dist/index.html'))
}))

app.listen(3000)
console.log("listening at port 3000!")

module.exports = app