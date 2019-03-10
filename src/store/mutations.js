import vue from 'vue'

const mutations={
  SET_APP_NAME(state,params){
    state.appName=params
  },
  SET_APP_VERSION(state){
    state.appVersion='v1.1'
  }
}
export default mutations
