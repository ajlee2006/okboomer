function al() {
    document.getElementById('chn').innerHTML = document.getElementById('item1').value
}
function time() {
    let now = Date.now()
    document.getElementById('og').innerHTML = 'unix time:' + now
    dateObj = new Date(now);
    d8 = dateObj.toUTCString();
    let da = d8.split(/ +/)
    document.getElementById('ogg').innerHTML = `${da[1]} ${da[2]} ${da[3]}`
}