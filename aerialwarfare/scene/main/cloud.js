class Cloud extends GuaImage {
    constructor (game) {
        super(game, 'cloud')
        this.setUp()
    }
    setUp() {
        this.speed = 1
        this.x = randomBetween(0, 500)
        this.y = -randomBetween(0, 200)
    }
    update() {
        this.y += this.speed
        if (this.y > 1100) {
            this.setUp()
        }
    }
    debug() {
        this.speed = config.cloud_speed
    }
} 
