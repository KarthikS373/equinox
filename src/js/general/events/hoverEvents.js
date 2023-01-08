class HoverEvents {
  constructor() {
    this.hoverTechnical()
    this.hoverCultural()
  }

  hoverTechnical() {
    const element = document.querySelector("#technical-button")
    if (element) {
      element.addEventListener("mouseenter", () => {
        if (window.experience) {
          window.experience.world.model.animate("technical")
          window.experience.world.model.spin()
        }
      })
      element.addEventListener("mouseleave", () => {
        if (window.experience) {
          window.experience.world.model.animate("wave")
        }
      })
    }
  }

  hoverCultural() {
    const element = document.querySelector("#cultural-button")
    if (element) {
      element.addEventListener("mouseenter", () => {
        if (window.experience) {
          window.experience.world.model.animate("cultural")
          window.experience.world.model.spin()
        }
      })
      element.addEventListener("mouseleave", () => {
        if (window.experience) {
          window.experience.world.model.animate("wave")
        }
      })
    }
  }
}

export default HoverEvents
