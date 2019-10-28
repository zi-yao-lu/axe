class SceneTitle extends GuaScene {
    constructor(game) {
        super(game)
        // background
        var bg = GuaImage.new(game, 'background')
        this.addElement(bg)
        var ready = GuaImage.new(game, 'ready')
        ready.x = 100
        ready.y = 20
        var tap = GuaImage.new(game, 'tap')
        tap.x = 140
        tap.y = 80
        this.addElement(ready)
        this.addElement(tap)

        var label = GuaLabel.new(game, 'Press j or tap to start game', 150, 250)
        this.addElement(label)

        // add bird
        var bird = GuaAnimation.new(game)
        bird.vy = bird.gy = 0
        bird.still = true
        bird.x = 180
        bird.y = 200
        this.addElement(bird)

        // add ground
        this.grounds = []
        for (var i = 0; i < 18; i++) {
            var ground = GuaImage.new(game, 'ground')
            ground.x = i * 25
            ground.y = 500
            this.addElement(ground)
            this.grounds.push(ground)
        }
        this.skipCount = 4

        this.setupInputs()
    }
    update() {
        super.update()
        // move ground
        this.skipCount--
        this.offset = -5
        if (this.skipCount == 0) {
            this.skipCount = 4
            this.offset = 15
        }
        for (var i = 0; i < 18; i++) {
            var g = this.grounds[i]
            g.x += this.offset
        }
    }
    start() {
        this.game.canvas.removeEventListener('mousedown', this.start_game)
        var s = Scene.new(this.game)
        this.game.replaceScene(s)
    }
    setupInputs() {
        var self = this
        this.start_game = function() {
            self.start()
        }
        self.game.registerAction('j', this.start_game)
        self.game.canvas.addEventListener('mousedown', this.start_game)
    }
} 