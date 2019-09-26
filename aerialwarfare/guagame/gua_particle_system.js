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
        this.duration = 20
        this.x = 150
        this.y = 200
        this.numberOfParticles = 6
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
