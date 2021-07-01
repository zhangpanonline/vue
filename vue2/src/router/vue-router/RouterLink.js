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
        on: {
          click() {
            window.location.hash = context.props.to
          }
        }
      },
      [context.children]
    )
  }
}
