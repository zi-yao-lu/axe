class GuaScene {
    constructor(game) {
        this.game = game
        this.debugModeEnabled = true
        this.element_id = 0
        this.elements = new Map()
    }
    static new(game) {
        var i = new this(game)
        return i
    }
    addElement(img) {
        this.element_id += 1
        img.id = this.element_id
        img.scene = this
        this.elements.set(img.id, img)
    }
    removeElement(img) {
        this.elements.delete(img.id)
    }
    draw() {
        this.elements.forEach(
            function (element) {
                element.draw()
            }
        )
    }
    update() {
        if (this.debugModeEnabled) {
            this.elements.forEach(
                function (element) {
                    element.debug && element.debug()
                }
            )
        }

        this.elements.forEach(
            function (element) {
                element.update()
            }
        )
    }
}