import axios from 'axios'
const Http = {}
Http.install = function (Vue) {
  Vue.prototype.$http = axios
}
export default Http
