
export const strict = false
import VuexORM from '@vuex-orm/core'
import VuexORMAxios from '@vuex-orm/plugin-axios'
import database from '@/database'

VuexORM.use(VuexORMAxios, {
  database,
//   http: {
//     // baseURL: `${process.env.baseURL}/`,
//     baseURL: 'http://localhost:8000',
//     access_token: () => window.localStorage['auth._token.local'].replace('Bearer ', ''),
//     onResponse (response) {
//       if (response.data === null) {
//         return response
//       }

//       return response.data.data
//     }
//   }
})

export const plugins = [
  VuexORM.install(database)
]
