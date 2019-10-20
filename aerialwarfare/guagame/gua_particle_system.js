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
    constructor(game, x, y) {
        this.game = game
        this.setUp(x, y)
    }
    static new(game, x, y) {
        return new this(game, x, y)
    }
    setUp(x, y) {
        this.duration = 20
        this.x = x
        this.y = y
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
            this.scene.removeElement(this)
            return
        }
        for (var p of this.particles) {
            p.draw()
        }
    }
}
