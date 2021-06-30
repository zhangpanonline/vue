'use strict'
import { _Vue, install } from './install'

export default class VueRouter {
  static install = install

  constructor(options = {}) {
    this.mode = options.mode || 'hash'
    this.routes = options.routes
  }
}
