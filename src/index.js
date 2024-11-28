import './style.css'

console.log('작동 확인')
const root = document.getElementById('root')

const div = document.createElement('div')
const h1 = document.createElement('h1')
h1.innerText = 'hello CSR!'
div.append(h1)
root.append(div)