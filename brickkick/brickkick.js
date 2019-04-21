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

var __main = function () {

    var images = {
        ball: 'ball.png',
        brick: 'brick.png',
        paddle: 'paddle.png',
    }
    var game = GuaGame(60, images, function (g) {
        var s = Scene(g)
        g.runWithScene(s)
    })

    enableDebugMode(game, true)

}

__main()