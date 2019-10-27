class SceneTitle extends GuaScene {
    constructor(game) {
        super(game)
        // background
        var bg = GuaImage.new(game, 'background')
        this.addElement(bg)

        // move ground
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
        var b = GuaAnimation.new(game)
        b.x = 100
        b.y = 200
        this.bird = b
        this.addElement(b)

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
    setupInputs() {
        var self = this
        var b = this.bird
        self.game.registerAction('a', function(keyStatus) {
            b.move(-2, keyStatus)
        })
        self.game.registerAction('d', function(keyStatus) {
            b.move(2, keyStatus)
        })
        self.game.registerAction('j', function(keyStatus) {
           b.jump(2, keyStatus)
        })
    }
} 