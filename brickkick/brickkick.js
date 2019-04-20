var __main = function () {

    var images = {
        ball: 'ball.png',
        brick: 'brick.png',
        paddle: 'paddle.png',
    }

    var loadLevel = function (game, n) {
        var level = levels[n - 1]
        var bricks = []
        for (var i = 0; i < level.length; i++) {
            var p = level[i]
            var b = Brick(game, p)
            bricks.push(b)
        }
        return bricks
    }

    var bricks = []

    var enableDebugMode = function (game, enable) {
        if (!enable) {
            return
        }
        window.paused = false
        window.addEventListener('keydown', function (event) {
            var k = event.key
            if (k == 'p') {
                window.paused = !window.paused
            } else if ('1234567'.includes(k)) {
                bricks = loadLevel(game, Number(k))
            }
        })
        // control speed
        document.querySelector('#id-input-speed').addEventListener('input', function (event) {
            var input = event.target
            // log(event, input.value)
            window.fps = Number(input.value)
        })
    }

    var game = GuaGame(60, images, function (g) {
        var paddle = Paddle(game)
        var ball = Ball(game)

        var score = 0

        bricks = loadLevel(game, 1)
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
            if (window.paused) {
                return
            }

            ball.move()

            if (paddle.collide(ball)) {
                ball.bounce()
            }

            for (var i = 0; i < bricks.length; i++) {
                var brick = bricks[i]
                if (brick.collide(ball)) {
                    brick.kill()
                    ball.bounce()
                    // update score
                    score += 10
                }
            }
        }

        // mouse event
        var enableDrag = false
        game.canvas.addEventListener('mousedown', function (event) {
            var x = event.offsetX
            var y = event.offsetY
            // log(x, y, event)
            // check if ball is clicked
            if (ball.hasPoint(x, y)) {
                // set drag mode
                enableDrag = true
            }
        })
        game.canvas.addEventListener('mousemove', function (event) {
            var x = event.offsetX
            var y = event.offsetY
            if (enableDrag) {
                // log(x, y, 'drag')
                ball.x = x
                ball.y = y
            }
        })
        game.canvas.addEventListener('mouseup', function (event) {
            enableDrag = false
        })

        game.draw = function () {
            // draw background
            game.context.fillStyle = "#654"
            game.context.fillRect(0, 0, 800, 600)

            // draw game objects
            game.drawImage(paddle)
            game.drawImage(ball)

            for (var i = 0; i < bricks.length; i++) {
                var brick = bricks[i]
                if (brick.alive) {
                    game.drawImage(brick)
                }
            }

            // draw labels
            game.context.fillText('score: ' + score, 10, 600)
        }
    })

    enableDebugMode(game, true)

}

__main()