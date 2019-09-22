class GuaLabel {
    constructor(game, text) {
        this.game = game
        this.text = text
    }
    static new(game, text) {
        return new this(game, text)
    }
    draw() {
        this.game.context.fillText(this.text, 100, 260)
    }
    update() {

    }
}


class GuaParticle extends GuaImage {
    constructor(game) {
        super(game, 'particle')
        this.setUp()
    }
    setUp() {
        this.life = 10
    }
    init(x, y, vx, vy) {
        this.x = x
        this.y = y
        this.vx = vx
        this.vy = vy
    }
    update() {
        this.life--
        this.x += this.vx
        this.y += this.vy
        var factor = 0.01
        this.vx += factor * this.vx
        this.vy += factor * this.vy
    }
}


class GuaParticleSystem {
    constructor(game) {
        this.game = game
        this.setUp()
    }
    static new(game) {
        return new this(game)
    }
    setUp() {
        this.duration = 50
        this.x = 150
        this.y = 200
        this.numberOfParticles = 200
        this.particles = []
    }
    update() {
        // add spark
        this.duration--
        if (this.duration < 0) {

        }
        if (this.particles.length < this.numberOfParticles) {
            var p = GuaParticle.new(this.game)
            // set initial position
            var s = 2
            var vx = randomBetween(-s, s)
            var vy = randomBetween(-s, s)
            p.init(this.x, this.y, vx, vy)
            this.particles.push(p)
        }
        // update all sparks
        for (var p of this.particles) {
            p.update()
        }
        // remove dead spark
        this.particles = this.particles.filter(p => p.life > 0)
    }
    draw() {
        if (this.duration < 0) {
            // TODO: remove particles from scene
            return
        }
        for (var p of this.particles) {
            p.draw()
        }
    }
}


class SceneTitle extends GuaScene {
    constructor(game) {
        super(game)
        var label = GuaLabel.new(game, 'hello')
        this.addElement(label)
        // game.registerAction('k', function () {
        //     var s = Scene.new(game)
        //     game.replaceScene(s)
        // })        
        var ps = GuaParticleSystem.new(game)
        this.addElement(ps)
    }
    // draw() {
        // draw labels
        // this.game.context.fillText('Press k to Start Game', 100, 260)
    // }
}