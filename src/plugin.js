import Hello from './components/Hello'

const CEPlugin = {}

CEPlugin.install = function (Vue) {
  // browsers compatibility
//   window.AudioContext = window.AudioContext || window.webkitAudioContext || window.mozAudioContext || window.msAudioContext
//   window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame
  // Components
  Vue.component(Hello.name, Hello)
}

export default CEPlugin