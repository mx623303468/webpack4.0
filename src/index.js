import _ from 'lodash'
import printMe from './print';

function component() {
    var ele = document.createElement('div')
    var btn = document.createElement('button')

    ele.innerHTML = _.join(['Hello', 'webpack'], ' ')

    btn.innerHTML = '点击这里，然后查看 console'
    btn.onclick = printMe

    ele.appendChild(btn)


    return ele;
}

let ele = component()
document.body.appendChild(ele)


if (module.hot) {
    module.hot.accept('./print.js', function () {
        console.log('引入的 printMe 模块更新了！')
        document.body.removeChild(ele)
        ele = component()

        document.body.appendChild(ele)
    })
}
