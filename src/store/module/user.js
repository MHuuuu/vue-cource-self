//用户相关
const state = {
  userName: 'zxx'
}

const getters = {
  firstUserName: state => {
    return state.userName.substr(0, 1)
  }
}

const mutations = {
  //
}

const actions = {
  //
}

export default {
  //namespaced密闭，防干扰
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
