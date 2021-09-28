const express = require('express')
const app = express()
const { tokens,users } = require('./user')
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', req.headers.origin || '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization,\'Origin\',Accept,X-Requested-With');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header('Access-Control-Allow-Credentials', true);
  next();

})

app.get('/', function (req, res) {
  res.send('Hello GET');
})

app.post('/login', (req, res) => {
  const { username } = req.query
  const token = tokens[username]
  if (!token) {
    res.send({
      code: 'E00001',
      message: '账户或秘密错误'
    })
    return
  }
  res.send({
    code: '000000',
    data: token
  })
})

app.post('/userInfo', (req, res) => {
  const { token } = req.query
  console.log(token)
  const info = users[token]
  if (!info) {
    res.send({
      code: 'E00001',
      message: '登陆失败，无法获取用户信息'
    })
    return
  }
  res.send({
      code: '000000',
      data: info
    }) 
})
app.post('/loginOut', (req, res) => {
  res.send({
      code: '000000',
      data: 'success'
    }) 
})

const server = app.listen(8081, function () {
  const host = server.address().address;
  const port = server.address().port;
  console.log(server)
  console.log("应用实例，访问地址为 http://%s:%s", host, port);
})