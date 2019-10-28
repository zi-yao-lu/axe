class GuaAnimation {
    constructor(game) {
        this.game = game
        // hard code animiation here
        this.animations = {
            bird: [],
        }
        for (var i = 0; i < 3; i++) {
            var name = `bird${i}`
            var t = game.textureByName(name)
            this.animations['bird'].push(t)
        }
        this.animationName = 'bird'
        this.texture = this.frames()[0]
        this.w = this.texture.width
        this.h = this.texture.height
        this.frameIndex = 0
        this.frameCount = 3

        // rotation and movement
        this.flipX = false
        this.rotation = 0
        this.still = false

        // gravity
        this.gy = 10
        this.vy = 0

        // alive
        this.alive = true
    }
    static new(game) {
        return new this(game)
    }
    frames() {
        return this.animations[this.animationName]
    }
    update() {
        // update speed y
        this.y += this.vy
        this.vy += this.gy * 0.2
        var h = 470
        if (this.y > h) {
            this.y = h
            this.alive = false
        }
        // update rotation
        if (!this.still && this.rotation <= 45) {
            this.rotation += 5
        }
        
        this.frameCount--
        if (this.frameCount == 0) {
            this.frameCount = 3
            this.frameIndex = (this.frameIndex + 1) % this.frames().length
            this.texture = this.frames()[this.frameIndex]
        }
    }
    draw() {
        var context = this.game.context

        context.save()
        
        var w2 = this.w / 2
        var h2 = this.h / 2
        // Set the origin to the center of the image
        context.translate(this.x + w2, this.y + h2)
        if (this.flipX) {
            context.scale(-1, 1)
        }

        context.rotate(this.rotation * Math.PI / 180)
        context.translate(-w2, -h2)
        // Draw the image
        context.drawImage(this.texture, 0, 0)
        context.restore()
    }
    jump() {
        this.vy = -5
        if (this.y < 0) {
            this.y = 0
        }
        this.rotation = -45
    }
    move(x) {
        this.flipX = (x < 0)
        this.x += x
    }
    changeAnimation(name) {
        this.animationName = name
    }
}