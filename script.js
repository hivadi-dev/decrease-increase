const h1 = document.getElementById('h1')
const btn = document.querySelectorAll('button')
let num = 0
function _num(s) {
    num = document.getElementById('inp').value
    if (!num) {
        alert('please enter a number')
        return
    }
    else if (isNaN(num)) {
        alert('please enter just number')
        return
    }
    else {
        btn[1].style.display = 'block'
        btn[2].style.display = 'block'
        s.style.display = 'none'
        s.previousElementSibling.style.display = 'none'
    }
    changeColor()
}
function checkNum(op) {
    if (op == '+') {
        num++
    } else {
        num--
    }
    changeColor()
}
function changeColor() {
    h1.innerText = num
    if (num > 0) {
        h1.style.color = 'green'
    }
    else if (num == 0) {
        h1.style.color = 'black'
    }
    else {
        h1.style.color = 'red'
    }
}