class SceneTitle extends GuaScene {
    constructor(game) {
        super(game)
        game.registerAction('k', function () {
            var s = Scene(game)
            game.replaceScene(s)
        })
    }
    draw() {
        // draw labels
        this.game.context.fillText('Press k to Start Game', 100, 260)
    }
}