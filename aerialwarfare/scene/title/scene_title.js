class SceneTitle extends GuaScene {
    constructor(game) {
        super(game)
        var label = GuaLabel.new(game, 'hello')
        this.addElement(label)
        // game.registerAction('k', function () {
        //     var s = Scene.new(game)
        //     game.replaceScene(s)
        // })        
        var ps = GuaParticleSystem.new(game)
        this.addElement(ps)
    }
    // draw() {
        // draw labels
        // this.game.context.fillText('Press k to Start Game', 100, 260)
    // }
}