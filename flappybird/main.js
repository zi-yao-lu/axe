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
        // scece title
        background: 'img/background.png',
        bird0: 'img/bird0.png',
        bird1: 'img/bird1.png',
        bird2: 'img/bird2.png',
        ready: 'img/ready.png',
        tap: 'img/tap.png',
        ground: 'img/ground.png',
        pipe: 'img/pipe.png',
    }
    var game = GuaGame.instance(60, images, function (g) {
        var s = SceneTitle.new(g)
        g.runWithScene(s)
    })

    enableDebugMode(game, true)

}

__main()