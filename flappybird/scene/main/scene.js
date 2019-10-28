class Scene extends GuaScene {
    constructor(game) {
        super(game)
        // background
        var bg = GuaImage.new(game, 'background')
        this.addElement(bg)

        // add pipes
        this.pipes = Pipes.new(game)
        this.addElement(this.pipes)

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

        // bird
        this.birdSpeed = 2
        var b = GuaAnimation.new(game)
        b.x = 180
        b.y = 200
        this.bird = b
        this.addElement(b)

        this.setupInputs()
    }
    debug() {
        this.birdSpeed = config.bird_speed.value
    }
    update() {
        super.update()
        // check collision
        for (var p of this.pipes.pipes) {
            if (rectIntersects(this.bird, p) || rectIntersects(p, this.bird)) {
                this.bird.alive = false
            }
        }
        // game over
        if (!this.bird.alive) {
            this.end()
        }
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
    end() {
        var s = SceneEnd.new(this.game, this)
        this.game.replaceScene(s)
    }
    setupInputs() {
        var self = this
        var b = this.bird
        self.game.registerAction('a', function(keyStatus) {
            b.move(-self.birdSpeed, keyStatus)
        })
        self.game.registerAction('d', function(keyStatus) {
            b.move(self.birdSpeed, keyStatus)
        })
        self.game.registerAction('j', function() {
            b.jump()
        })
        self.game.canvas.addEventListener('mousedown', function () {
            b.jump()
        })
    }
} 