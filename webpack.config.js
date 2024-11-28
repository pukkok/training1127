import path from 'path'
import { fileURLToPath } from 'url'

// __dirname 대체
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default {
  entry: './src/index.js', // 엔트리 파일
  output: {
    path: path.resolve(__dirname, 'dist'), // 결과물 저장 디렉토리
    filename: 'bundle.js', // 번들 파일 이름
  },
  module: {
    rules: [
      {
        test: /\.css$/, // CSS 파일 로드 규칙
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  mode: 'development', // 개발 모드
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'public'), // HTML 파일 위치
    },
    compress: true, // 파일 압축
    port: 5000, // 개발 서버 포트
    open: true, // 서버 실행 후 브라우저 자동 열기
    hot: true, // 변경 시 브라우저 자동 갱신
  },
}
