import * as THREE from "three"

import Experience from "../.."
import SpaceModel from "../../../../assets/models/space.glb"

class Model {
  constructor() {
    this.components = new Experience()
    this.scene = this.components.scene
  }

  loadModel() {
    this.components.loader.gltfLoader.load(SpaceModel, (gltf) => {
      this.gltf = gltf

      this.mesh = this.gltf.scene
      this.mesh.scale.set(4, 4, 4)

      this.scene.add(this.mesh)

      this.setAnimations()
    })
  }

  setAnimations() {
    this.mixer = new THREE.AnimationMixer(this.mesh)
    this.clips = this.gltf.animations

    const action = this.mixer.clipAction(this.gltf.animations[0])
    action.play()
  }

  update(delta) {
    if (this.mixer) this.mixer.update(delta * 0.001)

    if (this.mesh) {
      this.mesh.rotation.y += delta * 0.0001
      this.mesh.rotation.x += Math.sin(delta * 0.0005)

      this.mesh.position.x = Math.sin(delta * 0.0005)
      this.mesh.position.z = Math.sin(delta * 0.0005) * 2
    }
  }
}

export default Model
