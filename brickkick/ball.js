var Ball = function () {
    var image = imageFromPath('ball.png')
    var o = {
        image: image,
        x: 350,
        y: 550,
        speedX: 5,
        speedY: 5,
        fired: false,
    }
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