import axios from 'axios'

export const state = () => ({
  stars: [],
  sidebarOpen: false
})

export const actions = {
  fetchStars ({ commit }, user) {
    console.log('Running action for fetch stars')

    axios.get(`https://api.github.com/users/${user}/starred?per_page=1000`)
      .then(response => {
        commit('FETCH_STARS', response.data)
      }).catch(error => {
        console.log('Error fetching user stars', error);
      })
  },
  createNewCluster({ commit }) {
    commit('OPEN_SIDEBAR')
  },
  closeSidebar({ commit }) {
    commit('CLOSE_SIDEBAR')
  }
}

export const getters = {
  getSidebarOpen: state => {
    return state.sidebarOpen
  },
}

export const mutations = {
  FETCH_STARS (state, stars) {
    state.stars = stars
  },
  OPEN_SIDEBAR (state) {
    state.sidebarOpen = true
  },
  CLOSE_SIDEBAR (state) {
    state.sidebarOpen = false
  },
}

