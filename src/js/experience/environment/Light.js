import * as THREE from "three"

class Light {
  constructor() {
    this.ambient = new THREE.AmbientLight("white", 1)
  }
}

export default Light
