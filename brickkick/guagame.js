var GuaGame = function (fps, images, runCallBack) {
    // images is an object of reference names and paths of pictures
    // the program would run after loading of all pictures
    var g = {
        actions: {},
        keydowns: {},
        images: {},
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
    // register actions
    g.registerAction = function (key, callback) {
        g.actions[key] = callback
    }

    // timer
    window.fps = fps
    var runloop = function () {
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
        // next run
        setTimeout(function () {
            runloop()
        }, 1000 / window.fps)
    }

    // an array to check if all pictures are loaded (asyncly)
    var loads = []
    // preload all pictures
    var names = Object.keys(images)
    for (var i = 0; i < names.length; i++) {
        let name = names[i]
        var path = images[name]
        let img = new Image()
        img.src = path
        img.onload = function () {
            // save to g.images
            g.images[name] = img
            // call run after all pictures are loaded successfully
            loads.push(1)
            if (loads.length == names.length) {
                g.run()
            }
        }
    }
    g.imageByName = function (name) {
        var img = g.images[name]
        var image = {
            w: img.width,
            h: img.height,
            image: img,
        }
        return image
    }
    g.run = function () {
        runCallBack(g)
        // start running program
        setTimeout(() => {
            runloop()
        }, 1000 / window.fps)
    }
    return g
}