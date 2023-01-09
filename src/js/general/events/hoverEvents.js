import gsap from "gsap"

class HoverEvents {
  constructor() {
    this.playing = false

    this.hoverTechnical()
    this.hoverCultural()
    this.hoverAbout()
  }

  hoverTechnical() {
    const element = document.querySelector("#technical-button")
    if (element) {
      element.addEventListener("mouseenter", () => {
        if (window.experience) {
          if (!this.playing) {
            this.playing = true
            window.experience.world.model.animate("technical")
            window.experience.world.model.spin()

            setTimeout(() => {
              if (window.experience) {
                this.playing = false
                window.experience.world.model.animate("wave")
              }
            }, 19500)
          }
        }
      })
    }
  }

  hoverCultural() {
    const element = document.querySelector("#cultural-button")
    if (element) {
      element.addEventListener("mouseenter", () => {
        if (window.experience) {
          if (!this.playing) {
            this.playing = true
            window.experience.world.model.animate("cultural")
            window.experience.world.model.spin()

            setTimeout(() => {
              if (window.experience) {
                this.playing = false
                window.experience.world.model.animate("wave")
              }
            }, 19000)
          }
        }
      })
    }
  }

  hoverAbout() {
    const element = document.querySelector("#about-button")
    if (element) {
      element.addEventListener("mouseenter", () => {
        if (window.experience) {
          window.experience.world.model.spin()
          gsap.fromTo(window.experience.camera.camera.perspectiveCamera.position, { z: -20 }, { z: -5, duration: 2 })
          gsap.fromTo(window.experience.camera.camera.perspectiveCamera.position, { y: 2 }, { y: 6, duration: 2 })
        }
      })
      element.addEventListener("mouseleave", () => {
        if (window.experience) {
          gsap.fromTo(window.experience.camera.camera.perspectiveCamera.position, { z: -5 }, { z: -20, duration: 2 })
          gsap.fromTo(window.experience.camera.camera.perspectiveCamera.position, { y: 6 }, { y: 2, duration: 2 })
        }
      })
    }
  }
}

export default HoverEvents
