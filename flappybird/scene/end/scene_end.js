class SceneEnd extends GuaScene {
    constructor(game) {
        super(game)
        var label_1 = GuaLabel.new(game, 'Game Over', 100, 260)
        var label_2 = GuaLabel.new(game, 'Press r to restart', 100, 300)
        this.addElement(label_1)
        this.addElement(label_2)
        game.registerAction('r', function () {
            var s = Scene.new(game)
            game.replaceScene(s)
        })
    }
}