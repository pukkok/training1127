import './style.css'

import $nt from './component/test1'

console.log('작동 확인')
const root = document.getElementById('root')

const div = $nt('div')
const h1 = $nt('h1')
h1.innerText = 'hello CSR!'
div.append(h1)
root.append(div)