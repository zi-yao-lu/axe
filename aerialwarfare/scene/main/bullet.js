class Bullet extends GuaImage {
    constructor(game) {
        super(game, 'bullet')
        this.setUp()
    }
    setUp() {
        this.firer = null
        this.speed = config.bullet_speed
    }
    update() {
        if (this.firer instanceof Player) {
            this.y -= this.speed
            var b = this
            this.scene.enemies.forEach(
                function (enemy) {
                    if (rectIntersects(b, enemy) || rectIntersects(enemy, b)) {
                        enemy.alive = false
                    }
                }
            )
        }
        else if (this.firer instanceof Enemy) {
            this.y += this.speed
            var p = this.scene.player
            if (rectIntersects(this, p) || rectIntersects(p, this)) {
                p.alive = false
            }
        }
        if (this.y < 0 || this.y > 1100) {
            this.scene.removeElement(this)
        }
    }
}
