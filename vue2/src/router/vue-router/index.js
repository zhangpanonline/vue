'use strict'
import { _Vue, install } from './install'

export default class VueRouter {
  static install = install

  constructor(options = {}) {
    this.mode = options.mode || 'hash'
    this.routes = options.routes
    // 路由地址到组件的映射
    this.routesMap = this.routes.reduce((acc, cur) => { acc[cur.path] = cur.component; return acc }, {})

    let initial = '/'
    if (this.mode === 'hash') {
      initial = window.location.hash.slice(1) || initial
    } else if (this.mode === 'history') {
      initial = window.location.pathname
    }
    // 声明一个响应式的字段 currentPath，表示当前选中的路由
    _Vue.util.defineReactive(this, 'currentPath', initial)
    if (this.mode === 'hash') {
      // window.addEventListener('hashchange', () => {
      //   const path = window.location.hash.slice(1) || '/'
      //   this.currentPath = path
      // })
    }
  }
}
