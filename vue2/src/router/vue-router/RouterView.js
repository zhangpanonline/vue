'use strict'
export default {
  name: 'RouterView',
  functional: true,
  render(h, context) {
    const currentPath = context.parent.$router.currentPath
    return h(context.parent.$router.routesMap[currentPath])
  }
}
