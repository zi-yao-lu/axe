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
        // animation
        walk1: 'img/walk/walk1.png',
        walk2: 'img/walk/walk2.png',
        walk3: 'img/walk/walk3.png',
        walk4: 'img/walk/walk4.png',
        walk5: 'img/walk/walk5.png',
        walk6: 'img/walk/walk6.png',
        walk7: 'img/walk/walk7.png',
        walk8: 'img/walk/walk8.png',
        walk9: 'img/walk/walk9.png',
        walk10: 'img/walk/walk10.png',
        walk11: 'img/walk/walk11.png',
        walk12: 'img/walk/walk12.png',
        walk13: 'img/walk/walk13.png',
        walk14: 'img/walk/walk14.png',
        walk15: 'img/walk/walk15.png',
        walk16: 'img/walk/walk16.png',
        walk17: 'img/walk/walk17.png',
        walk18: 'img/walk/walk18.png',
        walk19: 'img/walk/walk19.png',
        walk20: 'img/walk/walk20.png',
        // idle
        idle1: 'img/idle/idle1.png',
        idle2: 'img/idle/idle2.png',
        idle3: 'img/idle/idle3.png',
        idle4: 'img/idle/idle4.png',
        idle5: 'img/idle/idle5.png',
        idle6: 'img/idle/idle6.png',
        idle7: 'img/idle/idle7.png',
        idle8: 'img/idle/idle8.png',
        idle9: 'img/idle/idle9.png',
        idle10: 'img/idle/idle10.png',
        idle11: 'img/idle/idle11.png',
        idle12: 'img/idle/idle12.png',
        idle13: 'img/idle/idle13.png',
        idle14: 'img/idle/idle14.png',
        idle15: 'img/idle/idle15.png',
        idle16: 'img/idle/idle16.png',
    }
    var game = GuaGame.instance(60, images, function (g) {
        var s = SceneTitle.new(g)
        g.runWithScene(s)
    })

    enableDebugMode(game, true)

}

__main()