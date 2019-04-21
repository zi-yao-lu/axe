var SceneEnd = function (game) {
    var s = {
        game: game,
    }

    s.draw = function () {
        // draw labels
        game.context.fillText('Game Over', 100, 260)
    }
    s.update = function () {

    }
    return s
}