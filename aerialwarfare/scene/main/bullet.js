class Bullet extends GuaImage {
    constructor(game) {
        super(game, 'bullet')
        this.setUp()
    }
    setUp() {
        this.speed = 5
        this.speed = config.bullet_speed
    }
    update() {
        this.y -= this.speed
        // if (this.y < 0) {
        //     destroy()
        // }
    }
}
