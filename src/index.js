import Experience from "./js/experience"
import Main from "./js/general"

import "./style/global.scss"

const canvas = document.querySelector("canvas#webgl")

const experience = new Experience(canvas)
const main = new Main()

window.experience = experience
window.main = main
