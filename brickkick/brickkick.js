var __main = function () {
    enableDebugMode(true)
    var game = GuaGame(60)

    var paddle = Paddle()
    var ball = Ball()

    bricks = loadLevel(1)
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
            }
        }
    }

    game.draw = function () {
        // draw
        game.drawImage(paddle)
        game.drawImage(ball)

        for (var i = 0; i < bricks.length; i++) {
            var brick = bricks[i]
            if (brick.alive) {
                game.drawImage(brick)
            }
        }
    }
}

__main()