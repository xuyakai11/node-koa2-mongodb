const ipv4 = require('./cli_module/getIp.js')
const koa = require('koa')
const app = new koa()
const port = 3000;
app.use(async ctx => {
    ctx.body = 'hellow world'
})
app.listen(port,function(){
    const netWork = ipv4 + ':' + port;
    console.log('App running at: \n - Local: http://localhost:'+ port +' \n - Network: '+ netWork)
})