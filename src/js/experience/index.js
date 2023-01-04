import Camera from "./environment/Camera"
import Controls from "./environment/Controls"
import Light from "./environment/Light"
import Loader from "./environment/Loader"
import Renderer from "./environment/Renderer"
import scene from "./environment/Scene"
import Sizes from "./utils/Sizes"
import Time from "./utils/Time"
import World from "./world/world"

class Experience {
  static instance

  constructor(canvas) {
    if (Experience.instance) {
      return Experience.instance
    }

    Experience.instance = this

    this.canvas = canvas

    this.time = new Time()
    this.sizes = new Sizes()

    this.scene = scene
    this.light = new Light()

    this.loader = new Loader()
    this.gltf = this.loader.gltfLoader

    this.camera = new Camera()
    this.renderer = new Renderer()

    this.world = new World()

    this.scene.add(this.light.ambient)
    this.scene.add(this.world.container)

    if (window.location.hash === "#controls") this.controls = new Controls()

    // Events
    this.time.on("update", (args) => {
      this.update(args.elapsed, args.delta)
    })

    this.sizes.on("resize", () => {
      this.resize()
    })

    this.sizes.on("control", () => {
      this.camera.control()
      this.resize()
    })
  }

  update(elapsed, delta) {
    this.camera.update()
    this.renderer.update()
    this.world.model.update(delta)

    if (this.controls) this.controls.update()
  }

  resize() {
    this.camera.resize()
    this.renderer.resize()
  }
}

export default Experience
