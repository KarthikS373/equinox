import * as THREE from "three"

import Experience from ".."
import Model from "./space/model"

class World {
  constructor() {
    this.components = new Experience()

    this.container = new THREE.Object3D()
    this.container.matrixAutoUpdate = false

    this.initScene()
  }

  initScene() {
    this.model = new Model()
    this.model.loadModel()
  }
}

export default World
