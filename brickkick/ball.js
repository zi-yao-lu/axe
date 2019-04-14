var Ball = function (game) {
    var o = game.imageByName('ball')
    // var image = imageFromPath('ball.png')
    o.x = 350
    o.y = 550
    o.speedX = 5
    o.speedY = 5
    o.fired = false
    o.fire = function () {
        o.fired = true
    }
    o.move = function () {
        if (o.fired) {
            if (o.x < 0 || o.x > 800) {
                o.speedX = -o.speedX
            }
            if (o.y < 0 || o.y > 600) {
                o.speedY = -o.speedY
            }
            o.x += o.speedX
            o.y += o.speedY
        }
    }
    o.bounce = function () {
        o.speedY *= -1
    }
    return o
}