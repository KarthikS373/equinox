import * as THREE from "three"
import gsap from "gsap"

import Experience from "../.."

class Particles {
  constructor() {
    this.components = new Experience()
    this.scene = this.components.scene
    this.sizes = this.components.sizes

    this.particles = 300
    this.speed = 0.05
    this.spread = 500
    this.interactive = true

    return this.container
  }

  initParticles() {
    this.vertices = []

    for (let i = 0; i < this.particles; i++) {
      const x = THREE.MathUtils.randFloatSpread(this.spread)
      const y = THREE.MathUtils.randFloatSpread(this.spread)
      const z = THREE.MathUtils.randFloatSpread(this.spread)

      this.vertices.push(x, y, z)
    }

    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute("position", new THREE.Float32BufferAttribute(this.vertices, 3))

    const material = new THREE.PointsMaterial({ color: 0x888888 })

    this.points = new THREE.Points(geometry, material)

    this.scene.add(this.points)

    this.initParallax()
  }

  initParallax() {
    let theta = 0
    window.addEventListener("mousemove", (e) => {
      const rand = Math.random()
      gsap.fromTo(
        this.points.rotation,
        { x: this.points.rotation.x },
        {
          x:
            this.points.rotation.x +
            ((e.clientX / this.sizes.width - 0.5) * 2 + 0.5 * Math.sin((theta * Math.PI) / 360)) * rand * 0.1,
          duration: 0.1,
        }
      )
      gsap.fromTo(
        this.points.rotation,
        { y: this.points.rotation.y },
        {
          y:
            this.points.rotation.y +
            ((e.clientX / this.sizes.width - 0.5) * 2 + 0.5 * Math.sin((theta * Math.PI) / 360)) * rand * 0.1,
          duration: 0.1,
        }
      )
    })
  }
}

export default Particles

// theta += 1;

// camera.position.x = mouse.lastCameraX + radius * Math.sin(theta * Math.PI / 360);
// camera.position.y = mouse.lastCameraY + radius * Math.sin(theta * Math.PI / 360);

// mouse.lastCameraZ += (depth - mouse.lastCameraZ) * 0.08;
// camera.position.z = mouse.lastCameraZ + radius * Math.cos(theta * Math.PI / 360);
