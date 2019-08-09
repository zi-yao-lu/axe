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
}

var __main = function () {

    var images = {
        bullet: 'img/bullet.png',
        cloud: 'img/cloud.png',
        player: 'img/player.png',
        sky: 'img/sky.png',
    }
    var game = GuaGame.instance(60, images, function (g) {
        var s = Scene.new(g)
        g.runWithScene(s)
    })

    enableDebugMode(game, true)

}

__main()