'use strict'

import RouterLink from './RouterLink'
import RouterView from './RouterView'

export var _Vue
export function install(Vue) {
  if (_Vue) return false
  _Vue = Vue
  // 这里的this指向VueRouter实例
  Vue.mixin({
    beforeCreate() {
      if (this.$options.router) {
        // 这里的 this 指向vue根实例
        Vue.prototype.$router = this.$options.router
      }
    }
  })

  Vue.component(RouterLink.name, RouterLink)
  Vue.component(RouterView.name, RouterView)
}
