const $ = document

const hourelem = $.querySelector('.hour')
const minuteelem = $.querySelector('.minute')
const secondelem = $.querySelector('.second')

setInterval( () => {
const date = new Date()

let hourResult = date.getHours()
let minuteResult = date.getMinutes()
let secondResult = date.getSeconds()

if (hourResult < 10) {
    hourResult = '0' + hourResult
}

if (minuteResult < 10) {
    minuteResult = '0' + minuteResult
}

if (secondResult < 10) {
    secondResult = '0' + secondResult
}

hourelem.innerHTML = hourResult
minuteelem.innerHTML = minuteResult
secondelem.innerHTML = secondResult


},1000)


