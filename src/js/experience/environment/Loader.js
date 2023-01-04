import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js"
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js"

class Loader {
  constructor() {
    this.initLoaders()
  }

  initLoaders() {
    // Draco - Models (DRC)
    this.dracoLoader = new DRACOLoader()
    this.dracoLoader.setDecoderConfig({ type: "js" })
    this.dracoLoader.setDecoderPath("/draco/")

    // GLTF - Models (GLTF, GLB, GLTF-Embedded, GLTF-Draco compressed)
    this.gltfLoader = new GLTFLoader()
    this.gltfLoader.setDRACOLoader(this.dracoLoader)

    // FBX - Models (FBX)
    this.fbxLoader = new FBXLoader()
  }
}

export default Loader
