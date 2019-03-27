// ES Module 语法
import Header from './header.js'

// CommonJS 语法
var Footer = require('./footer.js')

var dom = document.getElementById('root')

var el = document.createElement('div')
el.innerText = '这是index.js'
dom.append(el)

new Header();
new Footer();