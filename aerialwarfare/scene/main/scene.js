class Scene extends GuaScene {
    constructor(game) {
        super(game)
        this.setup()
    }
    setup() {
        var game = this.game
        this.bg = GuaImage.new(game, 'sky')
        this.cloud = GuaImage.new(game, 'cloud')
        this.player = GuaImage.new(game, 'player')
        this.player.x = 220
        this.player.y = 950
        
        // this.game.registerAction('w', function () {
        //     paddle.()
        // })
        this.game.registerAction('a', function () {
            paddle.moveLeft()
        })
        this.game.registerAction('d', function () {
            paddle.moveRight()
        })
        this.game.registerAction('f', function () {
            ball.fire()
        })

        this.addElement(this.bg)
        this.addElement(this.player)
        this.addElement(this.cloud)
    }
    
    update () {
        this.cloud.y += 1
    }
}

// var Scene = function (game) {
//     var s = {
//         game: game,
//     }

//     // initilization
//     var paddle = Paddle(game)
//     var ball = Ball(game)

//     var score = 0

//     bricks = loadLevel(game, 1)

//     game.registerAction('a', function () {
//         paddle.moveLeft()
//     })
//     game.registerAction('d', function () {
//         paddle.moveRight()
//     })
//     game.registerAction('f', function () {
//         ball.fire()
//     })

//     s.draw = function () {
//         // draw background
//         game.context.fillStyle = "#654"
//         game.context.fillRect(0, 0, 800, 600)

//         // draw game objects
//         game.drawImage(paddle)
//         game.drawImage(ball)

//         for (var i = 0; i < bricks.length; i++) {
//             var brick = bricks[i]
//             if (brick.alive) {
//                 game.drawImage(brick)
//             }
//         }

//         // draw labels
//         game.context.fillText('score: ' + score, 10, 600)
//     }

//     s.update = function () {
//         if (window.paused) {
//             return
//         }

//         ball.move()
//         // check game over
//         if (ball.y > paddle.y) {
//             // switch to game over scene
//             var end = SceneEnd.new(game)
//             game.replaceScene(end)
//         }

//         // check paddle bounces ball
//         if (paddle.collide(ball)) {
//             ball.bounce()
//         }

//         // check ball hits brick
//         for (var i = 0; i < bricks.length; i++) {
//             var brick = bricks[i]
//             if (brick.collide(ball)) {
//                 brick.kill()
//                 ball.bounce()
//                 // update score
//                 score += 10
//             }
//         }
//     }

//     // mouse event
//     var enableDrag = false
//     game.canvas.addEventListener('mousedown', function (event) {
//         var x = event.offsetX
//         var y = event.offsetY
//         // log(x, y, event)
//         // check if ball is clicked
//         if (ball.hasPoint(x, y)) {
//             // set drag mode
//             enableDrag = true
//         }
//     })
//     game.canvas.addEventListener('mousemove', function (event) {
//         var x = event.offsetX
//         var y = event.offsetY
//         if (enableDrag) {
//             // log(x, y, 'drag')
//             ball.x = x
//             ball.y = y
//         }
//     })
//     game.canvas.addEventListener('mouseup', function (event) {
//         enableDrag = false
//     })
//     return s
// }