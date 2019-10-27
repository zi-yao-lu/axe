class Player extends GuaImage {
    constructor (game) {
        super(game, 'player')
        this.setUp()
    }
    setUp() {
        this.speed = config.player_speed
        this.cooldown = 0
        this.alive = true
    }
    update() {
        this.speed = config.player_speed
        if (this.cooldown > 0) {
            this.cooldown--
        }
    }
    fire() {
        if (this.cooldown == 0) {
            this.cooldown = config.fire_cooldown
            var x = this.x + this.w / 2
            var y = this.y
            var b = Bullet.new(this.game)
            b.x = x
            b.y = y
            b.firer = this
            this.scene.addElement(b)
        }
    }
    moveLeft() {
        this.x -= this.speed
        if (this.x < -50) {
            this.x = -50
        }
    }
    moveRight() {
        this.x += this.speed
        if (this.x > 520) {
            this.x = 520
        }
    }
    moveUp() {
        this.y -= this.speed
        if (this.y < 0) {
            this.y = 0
        }
    }
    moveDown() {
        this.y += this.speed
        if (this.y > 1000) {
            this.y = 1000
        }
    }
}
