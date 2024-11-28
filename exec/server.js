import http from 'http'
import {exec} from 'child_process'
import fileReader from './fileReader.js'

const port = 5000

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    fileReader('./public/index.html', res, 'text/html', 'HTML 전송 오류')
  } else if (req.url === '/bundle.js') {
    fileReader('./dist/bundle.js', res, 'application/javascript', 'JS 전송 오류')
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' })
    res.end('404 Not Found')
  }
})

server.listen(port, () => {
  exec(`start http://localhost:${port}`, () => {
    console.log('서버 동작')
  })
})