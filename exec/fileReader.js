import fs from 'fs'
import path from 'path'

const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.txt': 'text/plain',
}

const fileReader = (filePath, res, contentType, errMsg = "파일 읽기 실패") => {
    const ext = path.extname(filePath).toLowerCase() // 파일 확장자 추출
    const resolvedPath = path.resolve(filePath)

    const type = contentType || mimeTypes[ext] || 'application/octet-stream' // 기본 MIME 타입 설정

    fs.readFile(resolvedPath, (err, readFile) => {
        if (err) {
            if (err.code === 'ENOENT') {
                res.writeHead(404, { 'Content-Type': 'text/plain' })
                res.end('404 Not Found')
            } else {
                res.writeHead(500, { 'Content-Type': 'text/plain' })
                res.end('500 Internal Server Error')
                console.error(errMsg, err.message)
            }
            return
        }
        res.writeHead(200, { 'Content-Type': type })
        res.end(readFile)
    })
}

export default fileReader
