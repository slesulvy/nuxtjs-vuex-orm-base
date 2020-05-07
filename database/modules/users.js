import User from '@/models/User'

const state = {
  fetching: false,
  isShowForm: false,
  isLoading: false,
  isEdit: false,
  formData: {
    id: null,
    name: '',
    email: '',
    isActive: false,
  }
}

const mutations = {
  SET_FORM (state) {
    state.isShowForm = true;
  },

  CLOSE_FORM (state) {
    state.isShowForm = false;
  },

  SHOW_UPDATE (state, payload) {
    state.formData = payload
  },

  SET_EDIT (state, payload) {
    state.isEdit = payload;
  }
}

const getters = {

  allUsers () {
    return User.all();
  }

}
 

const actions = {

  setForm ({ commit }) {
    commit('SET_FORM');
  },

  closeForm ({ commit }) {
    commit('CLOSE_FORM');
  },

  showUpdate ({ commit }, newUpdate) {
    commit('SHOW_UPDATE', newUpdate);
  },

  setEdit({ commit }, payload) {
    commit('SET_EDIT', payload);
  },

  addUser (payload) {
    return User.api().post('/users', payload).then(response => {
      console.log('response post: ', response);
    })
  },

  getUsers () {
      return this.$axios.$get('/users')
        .then(response => {
            return response;
        })
        .catch(error => {
            return Promise.reject(error);
        })
        .finally(final => {
            console.log('final: ', final)
        })
  },

  getAll () {
    return User.api().get('/users')
      .then(response => {
        return response;
      })
      .catch(error => {
        return Promise.reject(error);
      })
  },

  getById (id) {
    return User.api().get(`/users/${id}`)
      .then(response => {
        return response;
      })
      .catch(error => {
        return Promise.reject(error);
      })
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
