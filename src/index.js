// import _ from 'lodash'
// import printMe from './print';
import { cube } from './math';
// import style  from './style.css'

function component() {
    var ele = document.createElement('pre')

    ele.innerHTML = [
        'hello webpack!',
        '5 的立方是：' + cube(5)
    ].join('\n\n')


    return ele;
}

document.body.appendChild(component())
