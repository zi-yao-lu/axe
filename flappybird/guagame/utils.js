var e = sel => document.querySelector(sel)


var log = console.log.bind(console)


var rectIntersects = function (a, b) {
    var o = a
    if (b.y > o.y && b.y < o.y + o.texture.height) {
        if (b.x > o.x && b.x < o.x + o.texture.width) {
            return true
        }
    }
    return false
}


const randomBetween = function (start, end) {
    var n = Math.random() * (end - start + 1)
    return Math.floor(n + start)
}
