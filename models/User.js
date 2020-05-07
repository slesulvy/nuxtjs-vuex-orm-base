// User Model

import { Model } from '@vuex-orm/core'

export default class User extends Model {
  // This is the name used as module name of the Vuex Store.
  static entity = 'users'

  static state ()  {
    return {
      testing: 'Hello world',
    }
  }


  static fields () {
    return {
      id: this.attr(null),
      name: this.attr(''),
      email: this.attr(''),
      isActive: this.attr(false),
    }
  }
}