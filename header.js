function Header() {
    var dom = document.getElementById('root')
    var header = document.createElement('div')

    header.innerText = '这是header.js'

    dom.append(header)
}