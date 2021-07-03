'use strict'
export default {
  name: 'RouterLink',
  functional: true,
  render(h, context) {
    return h(
      'a',
      {
        style: {
          cursor: 'pointer'
        },
        // attrs: {
        //   href: '#' + context.props.to
        // }
        on: {
          click() {
            const router = context.parent.$router
            const path = context.props.to
            if (router.mode === 'hash') {
              window.location.hash = path
            } else if (router.mode === 'history') {
              history.pushState({}, '', path)
            }
            router.currentPath = context.props.to
          }
        }
      },
      [context.children]
    )
  }
}
