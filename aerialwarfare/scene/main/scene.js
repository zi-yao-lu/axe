class Scene extends GuaScene {
    constructor(game) {
        super(game)
        this.setup()
        this.setupInputs()
    }
    setup() {
        var game = this.game
        this.numberOfEnemies = 3
        this.bg = GuaImage.new(game, 'sky')
        this.cloud = Cloud.new(this.game)

        this.player = Player.new(game)
        this.player.x = 220
        this.player.y = 950
        
        this.addElement(this.bg)
        this.addElement(this.cloud)
        this.addElement(this.player)

        this.addEnemies()
    }
    addEnemies() {
        var es = []
        for (var i = 0; i < this.numberOfEnemies; i++) {
            var e = Enemy.new(this.game)
            es.push(e)
            this.addElement(e)
        }
        this.enemies = es
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

        // check enemies collision with bullets
        for (var i = 0; i < this.enemies.length; i++) {
            var enemy = this.enemies[i]
            if (!enemy.alive) {
                var x = enemy.x
                var y = enemy.y
                var ps = GuaParticleSystem.new(this.game, x, y)
                this.addElement(ps)
                enemy.setUp()
            }
        }

        // check player colision with bullets
        if (!this.player.alive) {
            var end = SceneEnd.new(this.game)
            this.game.replaceScene(end)
        }
    }
}
