import Experience from "./js/experience"

import "./style/global.css"

const canvas = document.querySelector("canvas#webgl")

const experience = new Experience(canvas)

window.experience = experience
