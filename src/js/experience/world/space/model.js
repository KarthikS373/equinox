import * as THREE from "three"

import Experience from "../.."
import SpaceModel from "../../../../assets/models/space.glb"
import RobotModel from "../../../../assets/models/robot.glb"

class Model {
  constructor() {
    this.components = new Experience()
    this.scene = this.components.scene
    this.sizes = this.components.sizes
  }

  loadModel() {
    this.components.loader.gltfLoader.load(RobotModel, (gltf) => {
      this.gltf = gltf

      this.mesh = this.gltf.scene
      this.mesh.scale.set(7, 7, 7)
      this.mesh.rotation.y = Math.PI
      this.mesh.position.y = -4

      this.scene.add(this.mesh)

      this.setAnimations()
    })
  }

  setAnimations() {
    this.mixer = new THREE.AnimationMixer(this.mesh)
    this.clips = this.gltf.animations

    this.action = this.mixer.clipAction(this.gltf.animations[0])
    this.animate()

    this.initParallax()
  }

  animate() {
    if (this.action) this.action.play()
  }

  update(delta) {
    if (this.mixer) this.mixer.update(delta * 0.001)

    if (this.mesh) {
      // this.mesh.rotation.y += delta * 0.0001
      // this.mesh.rotation.x += Math.sin(delta * 0.0005)
      // this.mesh.position.z = Math.sin(delta * 0.005) + Math.cos(delta * 0.0003)
    }
  }

  initParallax() {
    window.addEventListener("mousemove", (e) => {
      this.mesh.position.x += (e.clientX / this.sizes.width - 0.5) * 0.1
      this.mesh.position.y += (e.clientY / this.sizes.height - 0.5) * 0.1

      console.log(e.clientX / this.sizes.width)
    })
  }
}

export default Model
