class Pipes {
    constructor(game) {
        this.game = game
        this.pipes = []
        this.pipeSpace = 150
        this.pipeDistance = 200
        this.pipeColumns = 3
        for (var i = 0; i < this.pipeColumns; i++) {
            var p1 = GuaImage.new(game, 'pipe')
            p1.x = 600 + i * 200
            var p2 = GuaImage.new(game, 'pipe')
            p2.x = p1.x
            p2.flipY = true
            this.resetPipePosition(p1, p2)
            this.pipes.push(p1)
            this.pipes.push(p2)
        }
    }
    static new(game) {
        return new this(game)
    }
    resetPipePosition(p1, p2) {
        p1.y = randomBetween(-200, 0)
        p2.y = p1.y + p1.h + this.pipeSpace
    }
    debug() {
        this.pipeDistance = config.pipe_distance.value
        this.pipeSpace = config.pipe_space.value
        // debugger
    }
    update() {
        for (var i = 0; i < this.pipes.length; i += 2) {
            var p1 = this.pipes[i]
            var p2 = this.pipes[i + 1]
            p1.x -= 5
            p2.x -= 5
            if (p1.x < -100) {
                 p1.x += this.pipeDistance * this.pipeColumns
            } 
            if (p2.x < -100) {
                 p2.x += this.pipeDistance * this.pipeColumns
                 this.resetPipePosition(p1, p2)
            } 
        }
    }
    draw() {
        var context = this.game.context
        for (var p of this.pipes) {
            context.save()
            
            var w2 = p.w / 2
            var h2 = p.h / 2
            // Set the origin to the center of the image
            context.translate(p.x + w2, p.y + h2)
            var scaleX = p.flipX ? -1 : 1
            var scaleY = p.flipY ? -1 : 1
            context.scale(scaleX, scaleY)

            context.rotate(p.rotation * Math.PI / 180)
            context.translate(-w2, -h2)
            // Draw the image
            context.drawImage(p.texture, 0, 0)
            context.restore()
        }
    }
}