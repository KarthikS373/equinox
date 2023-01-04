import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import * as THREE from "three"

import Experience from ".."

class Controls {
  constructor() {
    this.components = new Experience()

    this.sizes = this.components.sizes
    this.scene = this.components.scene
    this.canvas = this.components.canvas
    this.debug = this.components.debug

    this.camera = this.components.camera
    this.perspectiveCamera = this.camera.camera.perspectiveCamera
    this.orthographicCamera = this.camera.camera.orthographicCamera

    this.renderer = this.components.renderer

    this.initControls()
  }

  initControls() {
    this.orbitControls = new OrbitControls(this.perspectiveCamera, this.canvas)
    this.orbitControls.enabled = true
    this.orbitControls.enableDamping = true
    this.orbitControls.dampingFactor = 0.02
  }

  update() {
    this.orbitControls.update()
  }
}

export default Controls
