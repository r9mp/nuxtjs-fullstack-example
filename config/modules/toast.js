/*
 * Toast - Simple feedback module configuration (display text in a small popup after operation)
 * https://github.com/nuxt-community/modules/tree/master/packages/toast
 */

export default {
  position: 'top-center',
  register: [
    // Register custom toasts
    {
      name: 'error',
      message: 'Oops... Something went wrong!',
      options: {
        type: 'error'
      }
    },
    {
      name: 'success',
      message: 'Done... Something went well!',
      options: {
        type: 'success'
      }
    }
  ]
}
