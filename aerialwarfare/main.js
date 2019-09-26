var enableDebugMode = function (game, enable) {
    if (!enable) {
        return
    }
    window.paused = false
    window.addEventListener('keydown', function (event) {
        var k = event.key
        if (k == 'p') {
            window.paused = !window.paused
        }
    })
}

var __main = function () {

    var images = {
        bullet: 'img/bullet.png',
        cloud: 'img/cloud.png',
        player: 'img/player.png',
        sky: 'img/sky.png',
        enemy0: 'img/enemy0.png',
        enemy1: 'img/enemy1.png',
        enemy2: 'img/enemy2.png',
        enemy3: 'img/enemy3.png',
        enemy4: 'img/enemy4.png',
        particle: 'img/fire.png',
    }
    var game = GuaGame.instance(60, images, function (g) {
        // var s = Scene.new(g)
        var s = Scene.new(g)
        g.runWithScene(s)
    })

    enableDebugMode(game, true)

}

__main()