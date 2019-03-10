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
  SET_USER_NAME(state,params){
    state.userName=params
  }
}

const actions = {
  //commit提交实例，state当前实例（user.js），rootState根实例（index.js）
  updateUserName({commit,state,rootState,dispatch}){
    //rootState.appName
    dispatch('xxx',xxx)
  },
  xxx(){

  }
  //
}

export default {
  //namespaced密闭，防干扰
  //namespaced: true,
  state,
  getters,
  mutations,
  actions,
  modules:{
    //
  }
}
