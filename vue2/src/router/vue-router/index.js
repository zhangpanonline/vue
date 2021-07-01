'use strict'
import { _Vue, install } from './install'

export default class VueRouter {
  static install = install

  constructor(options = {}) {
    this.mode = options.mode || 'hash'
    this.routes = options.routes
    this.routesMap = this.routes.reduce((acc, cur) => { acc[cur.path] = cur.component; return acc }, {})
    _Vue.util.defineReactive(this, 'currentPath', '/')
    this.init()
  }

  init() {
    window.addEventListener('hashchange', this.hashchange.bind(this))
  }

  hashchange(e) {
    const path = window.location.hash.slice(1)
    this.currentPath = path
  }
}
