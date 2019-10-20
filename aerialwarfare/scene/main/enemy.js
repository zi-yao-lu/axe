class Enemy extends GuaImage {
    constructor (game) {
        var type = randomBetween(0, 4)
        var name = 'enemy' + type
        super(game, name)
        this.setUp()
    }
    setUp() {
        this.speed = randomBetween(2, 5)
        this.cooldown = 100
        this.alive = true
        this.x = randomBetween(0, 500)
        this.y = -randomBetween(0, 200)
    }
    fire() {
        if (this.cooldown == 0) {
            this.cooldown = 100
            var x = this.x + this.w / 2
            var y = this.y + 40
            var b = Bullet.new(this.game)
            b.x = x
            b.y = y
            b.firer = this
            b.speed = 7
            this.scene.addElement(b)
        }
    }
    update() {
        // move
        this.y += this.speed
        if (this.y > 1100) {
            this.setUp()
        }

        // fire
        this.fire()
        if (this.cooldown > 0) {
            this.cooldown--
        }

        // check collision with player
        var p = this.scene.player
        if (rectIntersects(this, p) || rectIntersects(p, this)) {
            p.alive = false
        }
    }
}
