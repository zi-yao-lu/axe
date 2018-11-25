var log = console.log.bind(console)

var imageFromPath = function (path) {
    var img = new Image()
    img.src = path
    return img
}

var Paddle = function () {
    var image = imageFromPath('paddle.png')
    var o = {
        image: image,
        x: 250,
        y: 550,
        speed: 15,
    }
    o.moveLeft = function () {
        o.x -= o.speed
    }
    o.moveRight = function () {
        o.x += o.speed
    }
    o.collide = function (ball) {
        if (ball.y + ball.image.height > o.y) {
            if (ball.x > o.x && ball.x < o.x + o.image.width) {
                return true
            }
        }
        return false
    }
    return o
}

var Ball = function () {
    var image = imageFromPath('ball.png')
    var o = {
        image: image,
        x: 250,
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
    return o
}

var GuaGame = function () {
    var g = {
        actions: {},
        keydowns: {},
    }
    var canvas = document.querySelector('#id-canvas')
    var context = canvas.getContext('2d')
    g.canvas = canvas
    g.context = context
    // draw
    g.drawImage = function (guaImage) {
        g.context.drawImage(guaImage.image, guaImage.x, guaImage.y)
    }
    // events
    window.addEventListener('keydown', function (event) {
        g.keydowns[event.key] = true
    })
    window.addEventListener('keyup', function (event) {
        g.keydowns[event.key] = false
    })
    // 
    g.registerAction = function (key, callback) {
        g.actions[key] = callback
    }

    // timer

    setInterval(function () {
        // events
        var actions = Object.keys(g.actions)
        for (var i = 0; i < actions.length; i++) {
            var key = actions[i]
            if (g.keydowns[key]) {
                // if key is pressed down
                g.actions[key]()
            }
        }
        // update
        g.update()
        // clear
        context.clearRect(0, 0, canvas.width, canvas.height)
        // draw
        g.draw()
    }, 1000/60)

    return g
}

var __main = function () {
    var game = GuaGame()

    var paddle = Paddle()
    var ball = Ball()
    
    game.registerAction('a', function () {
        paddle.moveLeft()
    })
    game.registerAction('d', function () {
        paddle.moveRight()
    })
    game.registerAction('f', function () {
        ball.fire()
    })

    game.update = function () {
        ball.move()
        if (paddle.collide(ball)) {
            ball.speedY *= -1
        }
    }
    game.draw = function () {
        // draw
        game.drawImage(paddle)
        game.drawImage(ball)
    }
}

__main()