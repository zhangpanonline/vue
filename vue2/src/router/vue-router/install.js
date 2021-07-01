'use strict'

import RouterLink from './RouterLink'
import RouterView from './RouterView'

export var _Vue
export function install(Vue) {
  if (_Vue) return false
  _Vue = Vue
  Vue.mixin({
    beforeCreate() {
      if (this.$options.router) {
        Vue.util.defineReactive(Vue.prototype, '$router', this.$options.router)
      }
    }
  })

  Vue.component(RouterLink.name, RouterLink)
  Vue.component(RouterView.name, RouterView)
}
