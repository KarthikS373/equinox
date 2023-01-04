import { EventEmitter } from "events"

import Experience from ".."

class Sizes extends EventEmitter {
  constructor() {
    super()

    this.components = new Experience()

    this.width = window.innerWidth
    this.height = window.innerHeight
    this.aspect = this.width / this.height
    this.devicePixelRatio = Math.max(2, window.devicePixelRatio)

    this.debug = this.components.debug

    // Perspective camera
    this.fov = 75
    this.near = 0.1
    this.far = 1000

    // Orthographic camera
    this.frustrum = 5
    this.edges = {
      left: (-1 * this.aspect * this.frustrum) / 2,
      right: (this.aspect * this.frustrum) / 2,
      top: this.frustrum / 2,
      bottom: (-1 * this.frustrum) / 2,
      near: -50,
      far: 50,
    }

    this.resizeEvent()
  }

  resizeEvent() {
    window.addEventListener("resize", (_) => {
      this.width = window.innerWidth
      this.height = window.innerHeight
      this.aspect = this.width / this.height
      this.devicePixelRatio = Math.max(2, window.devicePixelRatio)

      this.emit("resize")
    })
  }
}

export default Sizes
