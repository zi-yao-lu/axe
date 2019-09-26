class Enemy extends GuaImage {
    constructor (game) {
        var type = randomBetween(0, 4)
        var name = 'enemy' + type
        super(game, name)
        this.setUp()
    }
    setUp() {
        this.speed = randomBetween(2, 5)
        this.x = randomBetween(0, 500)
        this.y = -randomBetween(0, 200)
    }
    update() {
        this.y += this.speed
        if (this.y > 800) {
            this.setUp()
        }
    }
}
