const julian = require('julian');

function al() {
    document.getElementById('chn').innerHTML = document.getElementById('item1').value
}
function time() {
    let now = Date.now()

    document.getElementById('og').innerHTML = now
    document.getElementById('ogg').innerHTML = julian(now)

}