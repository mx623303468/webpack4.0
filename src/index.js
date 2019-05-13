import _ from 'lodash'
import './style.css'
import avatar from './avatar.jpg'

function component() {
    var ele = document.createElement('div')
    ele.innerHTML = _.join(['Hello', 'webpack'], ' ')
    ele.classList.add('hello')

    var icon = new Image();
    icon.src = avatar;

    ele.appendChild(icon)

    return ele;
}

document.body.appendChild(component());
