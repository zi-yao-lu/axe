class SceneEditor extends GuaScene {
    constructor(game) {
        super(game)
        var self = this
        
        self.level = 1
        self.bricks = loadLevel(game, self.level)

        window.addEventListener('keydown', event => {
            var k = event.key
            if ('1234567'.includes(k)) {
                self.level = Number(k)
                self.bricks = loadLevel(game,self.level)
            }
        })
        
        game.registerAction('c', function() {
            var s = SceneTitle.new(game)
            game.replaceScene(s)
        })

        // mouse event
        game.canvas.addEventListener('mousedown', function (event) {
            var x = event.offsetX
            var y = event.offsetY
            // log(x, y, event)
            var brick_clicked = false
            // check if a brick is clicked
            for (var i = 0; i < self.bricks.length; i++) {
                var brick = self.bricks[i]
                if (brick.hasPoint(x, y)) {
                    brick.enableDrag = true
                    brick_clicked = true
                }
            }

            // if no brick is clicked
            if (!brick_clicked) {
                var p = [x, y]
                var new_brick = Brick(self.game, p)
                self.bricks.push(new_brick)
            }

        })
        game.canvas.addEventListener('mousemove', function (event) {
            var x = event.offsetX
            var y = event.offsetY
            for (var i = 0; i < self.bricks.length; i++) {
                
                var brick = self.bricks[i]
                if (brick.enableDrag) {
                    // log(x, y, 'drag')
                    brick.x = x
                    brick.y = y
                }
            }
        })
        game.canvas.addEventListener('mouseup', function (event) {
            for (var i = 0; i < self.bricks.length; i++) {
                
                var brick = self.bricks[i]
                brick.enableDrag = false
            }
            self.save_level()
        })
    }

    draw() {
        // draw editor mode
        this.game.context.fillText('Editor Mode', 20, 20)
        this.game.context.fillText('Press number 1~7 to select level to edit', 20, 40)
        this.game.context.fillText('Press a brick to drag it, or press blank to add a brick', 20, 60)
        this.game.context.fillText('Press c to save and go to game title', 20, 80)
        this.game.context.fillText('Press k to save and start game', 20, 100)
        this.log_levels_data()

        for (var i = 0; i < this.bricks.length; i++) {
            var brick = this.bricks[i]
            this.game.drawImage(brick)
        }
    }

    log_levels_data() {
        this.textarea = e('#id-text-log')
        var levels_value = ''
        for (var i = 0; i < levels.length; i++) {
            var level = levels[i]
            levels_value += `Level ${(i + 1).toString()}:\n`
            levels_value += this.get_level_data(level) + '\n\n'
        }
        this.textarea.value = levels_value
    }

    get_level_data(level) {
        var level_data = 'bricks:\n'
        for (var i = 0; i < level.length; i++) {
            var brick = level[i]
            level_data += brick.toString() + '\n'
        }
        return level_data
    }

    save_level() {
        var edited_level = []
        for (var i = 0; i < this.bricks.length; i++) {
            var brick = this.bricks[i]
            var x = brick.x
            var y = brick.y
            var lifes = brick.lifes
            edited_level.push([x, y, lifes])
        }
        levels[this.level - 1] = edited_level
    }
}
