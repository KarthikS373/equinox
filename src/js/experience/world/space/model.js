import * as THREE from "three"
import gsap from "gsap"

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

    this.waveClip = THREE.AnimationUtils.subclip(this.gltf.animations[0], "wave", 0, 8, 2)
    this.technicalClip = THREE.AnimationUtils.subclip(this.gltf.animations[0], "technical", 9, 28, 2)
    this.culturalClip = THREE.AnimationUtils.subclip(this.gltf.animations[0], "culturalClip", 29, 50, 2)

    this.animate("wave")

    this.initParallax()
  }

  animate(animation = "wave") {
    if (!this.action && !this.waveClip && !this.culturalClip && !this.technicalClip) {
      console.log("Animations not ready")
      return
    }

    this.action.stop()

    switch (animation) {
      case "wave":
        this.action = this.mixer.clipAction(this.waveClip)
        break
      case "technical":
        this.action = this.mixer.clipAction(this.technicalClip)
        break
      case "cultural":
        this.action = this.mixer.clipAction(this.culturalClip)
        break

      default:
        this.action = this.mixer.clipAction(this.waveClip)
    }

    // this.action.fadeOut(600)
    // this.action.setEffectiveTimeScale(1)
    // this.action.setEffectiveWeight(1)
    // this.action.fadeIn(600)
    this.action.setLoop(THREE.LoopPingPong)
    this.action.play()
  }

  update(delta) {
    if (this.mixer) this.mixer.update(delta * 0.001)

    if (this.mesh) {
      // this.mesh.rotation.y += delta * 0.0001
      // this.mesh.rotation.x += Math.sin(delta * 0.0005)
      // this.mesh.position.z = Math.sin(delta * 0.005) + Math.cos(delta * 0.0003)
    }
  }

  spin() {
    gsap.fromTo(this.mesh.rotation, { y: this.mesh.rotation.y }, { y: this.mesh.rotation.y + Math.PI * 2, duration: 3 })
    
    const { x, y, z } = this.mesh.scale
    gsap.fromTo(this.mesh.scale, { x: x }, { x: x + 1, duration: 1.5 })
    gsap.fromTo(this.mesh.scale, { y: y }, { y: y + 1, duration: 1.5 })
    gsap.fromTo(this.mesh.scale, { z: z }, { z: z + 1, duration: 1.5 })

    gsap.fromTo(this.mesh.scale, { x: x + 1 }, { x: x, duration: 1.5, delay: 1.5 })
    gsap.fromTo(this.mesh.scale, { y: y + 1 }, { y: y, duration: 1.5, delay: 1.5 })
    gsap.fromTo(this.mesh.scale, { z: z + 1 }, { z: z, duration: 1.5, delay: 1.5 })
  }

  initParallax() {
    window.addEventListener("mousemove", (e) => {
      this.mesh.position.x = (e.clientX / this.sizes.width - 0.5) * 2
      this.mesh.position.z = (e.clientY / this.sizes.height - 0.5) * 2
    })
  }
}

export default Model
