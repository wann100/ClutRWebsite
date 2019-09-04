const state = {
  menuItem: null,
  currentUser: null,
  currentChannel: null,
  isPrivate: false
}

const getters = {
  menuItems: state => {
    return state.menuItems;
  },
  menuItem: state => {
    return state.menuItem;
  },
  currentUser: state =>{
   return state.currentUser;
  } ,
  currentChannel: state =>{
      return state.currentChannel;
  } ,
  isPrivate: state => {
    return state.isPrivate;
}
}

const mutations = {
  pushItem (state, item) {
    state.menuItems[0].dropdown.unshift(item)
  },
  popItem (state, item) {
    state.menuItems.splice(state.menuItems.indexOf(item), 1)
  },
  getMenuItem (state, path) {
    let item = state.menuItems[0].dropdown.filter(item => {
      return item.path === path
    })
    state.menuItem = item[0]
  },
  resetState: s => {
    const initial = state
    Object.keys(initial).forEach(key => {
      s[key] = initial[key]
    })
  },
  SET_USER(state, user) {
    state.currentUser = user
},
SET_CURRENT_CHANNEL(state, channel) {
    state.currentChannel = channel
},
SET_PRIVATE(state, isPrivate) {
    state.isPrivate = isPrivate
},

}

const actions = {
  pushMenuItem ({ commit }, item) {
    commit('pushItem', item)
  },
  popMenuItem ({ commit }, item) {
    commit('popItem', item)
  },
  getMenuItem ({ commit }, path) {
    commit('getMenuItem', path)
  },
  setUser({ commit }, user) {
    commit('SET_USER', user)
},
setCurrentChannel({ commit }, channel) {
    commit('SET_CURRENT_CHANNEL', channel)
},
setPrivate({ commit }, isPrivate) {
    commit('SET_PRIVATE', isPrivate)
}
}

export default {
  state,
  getters,
  mutations,
  actions
}
