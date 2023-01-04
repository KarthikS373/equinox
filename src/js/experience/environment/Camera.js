import * as THREE from "three"

import Experience from ".."
import Renderer from "./Renderer"
import Sizes from "../utils/Sizes"
import Tick from "../utils/Time"

class Camera {
  constructor() {
    this.components = new Experience()

    this.time = this.components.time
    this.sizes = this.components.sizes
    this.scene = this.components.scene
    this.renderer = this.components.renderer

    this.initCamera()
      }

  initCamera() {
    this.camera = {
      perspectiveCamera: new THREE.PerspectiveCamera(this.sizes.fov, this.sizes.aspect, this.sizes.near, this.sizes.far),
      orthographicCamera: new THREE.OrthographicCamera(this.sizes.edges.left, this.sizes.edges.right, this.sizes.edges.top, this.sizes.edges.bottom, this.sizes.edges.near, this.sizes.edges.far),
    }

    this.camera.perspectiveCamera.position.set(0, 2, -20)
    this.camera.perspectiveCamera.lookAt(new THREE.Vector3())
    this.scene.add(this.camera.perspectiveCamera)
  }

  control() {
    this.camera.perspectiveCamera.fov = this.sizes.fov
    this.camera.perspectiveCamera.near = this.sizes.near
    this.camera.perspectiveCamera.far = this.sizes.far

    this.camera.orthographicCamera.near = this.sizes.edges.near
    this.camera.orthographicCamera.far = this.sizes.edges.far
  }

  resize() {
    // Resizing perspective camera
    this.camera.perspectiveCamera.aspect = this.sizes.aspect
    this.camera.perspectiveCamera.updateProjectionMatrix()

    // Resizing orthographic camera
    this.camera.orthographicCamera.left = (-1 * this.sizes.aspect * this.sizes.frustrum) / 2
    this.camera.orthographicCamera.right = (this.sizes.aspect * this.sizes.frustrum) / 2
    this.camera.orthographicCamera.top = this.sizes.frustrum / 2
    this.camera.orthographicCamera.bottom = (-1 * this.sizes.frustrum) / 2
    this.camera.orthographicCamera.updateProjectionMatrix()
  }

  update() {}
}

export default Camera
