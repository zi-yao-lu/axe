class SceneEnd extends GuaScene {
    constructor(game, scene_main) {
        super(game)
        for (var e of scene_main.elements) {
            e.update = function() {}
            this.addElement(e[1])
        }

        // game_over title
        var end_title = GuaImage.new(game, 'gameover')
        end_title.x = 100
        end_title.y = 150
        this.addElement(end_title)
        var label = GuaLabel.new(game, 'Press r to restart game', 150, 250)
        this.addElement(label)

        this.setupInputs()
    }
    static new(game, scece_main) {
        return new this(game, scece_main)
    }
    update() {}
    restart() {
        var s = SceneTitle.new(this.game)
        this.game.replaceScene(s)
    }
    setupInputs() {
        var self = this
        self.game.registerAction('a', function() {})
        self.game.registerAction('d', function() {})
        self.game.registerAction('j', function() {})
        self.game.registerAction('r', function() {
            self.restart()
        })
    }
} 