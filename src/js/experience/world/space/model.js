import * as THREE from "three"

import Experience from "../.."
import SpaceModel from "../../../../assets/models/space.glb"

class Model {
  constructor() {
    this.components = new Experience()
    this.scene = this.components.scene

    this.loadModel()
  }

  loadModel() {
    this.components.loader.gltfLoader.load(SpaceModel, (gltf) => {
      this.gltf = gltf

      this.mesh = this.gltf.scene
      this.mesh.scale.set(3, 3, 3)

      console.log(this.gltf.animations)
      this.scene.add(this.mesh)

      this.setAnimations()
    })
  }

  setAnimations() {
    this.mixer = new THREE.AnimationMixer(this.mesh)
    this.clips = this.gltf.animations

    const action = this.mixer.clipAction(this.gltf.animations[0])
    console.log(action)
    action.play()
  }

  update(delta) {
    if (this.mixer) this.mixer.update(delta * 0.001)

    if (this.mesh) this.mesh.rotation.y += delta * 0.0001
  }
}

export default Model
