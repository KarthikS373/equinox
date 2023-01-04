import * as THREE from "three"

import Experience from "../index"

class Renderer {
  constructor() {
    this.components = new Experience()

    this.sizes = this.components.sizes
    this.scene = this.components.scene
    this.canvas = this.components.canvas
    this.debug = this.components.debug

    this.camera = this.components.camera
    this.perspectiveCamera = this.camera.camera.perspectiveCamera
    this.orthographicCamera = this.camera.camera.orthographicCamera

    this.showScissor = false

    this.initRenderer()
  }

  initRenderer() {
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      canvas: this.canvas,
    })

    // Renderer settings
    this.renderer.autoClear = false
    this.renderer.outputEncoding = THREE.sRGBEncoding
    this.renderer.physicallyCorrectLights = true
    this.renderer.shadowMap.enabled = true
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap
    this.renderer.toneMapping = THREE.CineonToneMapping
    this.renderer.toneMappingExposure = 1.5
    this.renderer.setClearColor(0x000000, 1)

    this.resize()
  }

  resize() {
    this.renderer.setSize(this.sizes.width, this.sizes.height)
    this.renderer.setPixelRatio(this.sizes.devicePixelRatio)
  }

  update() {
    this.renderer.render(this.scene, this.perspectiveCamera)
  }
}

export default Renderer
