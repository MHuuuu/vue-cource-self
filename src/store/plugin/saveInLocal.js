export default store => {
  //console.log('saveInLocal初始化');
  //如果state已存在
  if(localStorage.state) store.replaceState(JSON.parse(localStorage.state))
  store.subscribe((mutation,state)=>{
    // console.log('提交mutation');
    //localStorage当前实例
    localStorage.state=JSON.stringify(state)
  })
}
