function component() {
    var ele = document.createElement('div')
    ele.innerHTML = '<h1>hello webpack</h1>'

    return ele;
}

document.body.appendChild(component());
