import * as THREE from "three"

import Experience from ".."
import Particles from "./particles/particle"
import Model from "./space/model"

class World {
  constructor() {
    this.components = new Experience()

    this.initScene()
    this.initParticles()
  }

  initScene() {
    this.model = new Model()
    this.model.loadModel()
  }

  initParticles() {
    this.particles = new Particles()
    this.particles.initParticles()
  }
}

export default World
