function al() {
    document.getElementById('chn').innerHTML = document.getElementById('item1').value
}
function time() {
    document.getElementById('og').innerHTML = Date.now()
    let now = Date.now()
    document.getElementById('ogg').innerHTML = `${now.getDate()}/${now.getMonth()}/20`
}