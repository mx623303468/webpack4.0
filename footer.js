function Footer() {
	var dom = document.getElementById('root')
	var footer = document.createElement('div')

	footer.innerText = '这是footer.js'

	dom.append(footer)
}