var Brick = function (game, position) {
    // position format: [x, y]
    var p = position
    var img = game.imageByName('brick')
    var o = {
        x: p[0],
        y: p[1],
        alive: true,
        lifes: p[2] || 1,
    }
    o.image = img.image
    o.w = img.w
    o.h = img.h
    o.kill = function () {
        o.lifes--
        if (o.lifes < 1) {
            o.alive = false
        }
    }
    o.collide = function (b) {
        return o.alive && (rectIntersects(o, b) || rectIntersects(b, o))
    }
    return o
}