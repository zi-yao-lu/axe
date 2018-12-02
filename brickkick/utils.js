var log = console.log.bind(console)

var imageFromPath = function (path) {
    var img = new Image()
    img.src = path
    return img
}

var rectIntersects = function (a, b) {
    var o = a
    if (b.y > o.y && b.y < o.y + o.image.height) {
        if (b.x > o.x && b.x < o.x + o.image.width) {
            return true
        }
    }
    return false
}

var loadLevel = function (n) {
    var level = levels[n - 1]
    var bricks = []
    for (var i = 0; i < level.length; i++) {
        var p = level[i]
        var b = Brick(p)
        bricks.push(b)
    }
    return bricks
}

var bricks = []

var enableDebugMode = function (enable) {
    if (!enable) {
        return
    }
    window.paused = false
    window.addEventListener('keydown', function (event) {
        var k = event.key
        if (k == 'p') {
            window.paused = !window.paused
        } else if ('1234567'.includes(k)) {
            bricks = loadLevel(Number(k))
        }
    })
    // control speed
    document.querySelector('#id-input-speed').addEventListener('input', function (event) {
        var input = event.target
        // log(event, input.value)
        window.fps = Number(input.value)
    })
}