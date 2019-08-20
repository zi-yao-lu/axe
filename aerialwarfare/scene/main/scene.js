const config = {
    player_speed: 10,
    cloud_speed: 1,
    enemy_speed: 5,
    bullet_speed: 5,
    fire_cooldown: 9,
}


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


class Player extends GuaImage {
    constructor (game) {
        super(game, 'player')
        this.setUp()
    }
    setUp() {
        this.speed = config.player_speed
        this.cooldown = 0
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
            this.scene.addElement(b)
        }
    }
    moveLeft() {
        this.x -= this.speed
    }
    moveRight() {
        this.x += this.speed
    }
    moveUp() {
        this.y -= this.speed
    }
    moveDown() {
        this.y += this.speed
    }
} 


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
        if (this.y > 800) {
            this.setUp()
        }
    }
    debug() {
        this.speed = config.cloud_speed

    }
} 


class Scene extends GuaScene {
    constructor(game) {
        super(game)
        this.setup()
        this.setupInputs()
    }
    setup() {
        var game = this.game
        this.numberOfEnemies = 10
        this.bg = GuaImage.new(game, 'sky')
        this.cloud = Cloud.new(this.game)

        this.player = Player.new(game)
        this.player.x = 220
        this.player.y = 950
        
        this.addElement(this.bg)
        this.addElement(this.cloud)
        this.addElement(this.player)

        // 
        this.addEnemies()
    }
    addEnemies() {
        var es = []
        for (var i = 0; i < this.numberOfEnemies; i++) {
            var e = Enemy.new(this.game)
            es.push(e)
            this.addElement(e)
        }
        this.enemeis = es
    }
    setupInputs() {
        var g = this.game
        var s = this
        g.registerAction('a', function() {
            s.player.moveLeft()
        })
        g.registerAction('d', function() {
            s.player.moveRight()
        })
        g.registerAction('w', function() {
            s.player.moveUp()
        })
        g.registerAction('s', function() {
            s.player.moveDown()
        })
        g.registerAction('j', function() {
            s.player.fire()
        })
    }
    
    update () {
        super.update()
        this.cloud.y += 1
    }
}
