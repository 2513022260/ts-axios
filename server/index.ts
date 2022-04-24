const Koa = require('koa')
const Router = require('koa-router')
const Bodyparser = require('koa-bodyparser')

const app = new Koa()
const router = new Router()
const bodyparser = new Bodyparser() // 获取body请求体 ctx.request.body访问到请求报文的报文实体

// 处理成异步
app.use(async (ctx, next) => {
  console.log(`Process ${ctx.request.method} ${ctx.request.url}`);
  await next()
})

// api
router.get('/api/base/get', async (ctx, next) => {
  ctx.response.body = `<h1>GET 请求</h1>`
})
// router
router.post('/api/base/post', async (ctx, next) => {
  ctx.response.body = `<h1>POST 请求</h1>`
})

// 需先引用bodyparser
app.use(router.routes())

const prot = 9000
app.listen(prot)
console.log(`server in localhost:${prot}`)