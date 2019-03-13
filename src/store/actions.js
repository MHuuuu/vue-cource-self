import { getAppName } from '@/api/app'

const actions = {
    /*
    updatedAppName({commit}){}
    ES6->写法等于
    updatedAppName(paramsObj){
      const commit=paraObj.commit
    }
  */
  /*
  异步写法，太麻烦
  updateAppName({commit}) {
     getAppName().then(res=>{
      console.log(res)
      const {info:{appName}}=res
      commit('SET_APP_NAME',res.info.appName)
    }).catch(err=>{
      console.log(err)
    }) */
  async updateAppName ({ commit }) {
    try {
      const { info: { appName } } = await getAppName()
      commit('SET_APP_NAME', appName)
    } catch (err) {
      console.log(err)
    }
  }
}
export default actions
