<template>
  <div>
    <input v-model="userName">
    <input v-model="password">
    <button @click="handleSubmit">登录</button>
  </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
  name:'login_page',
  data(){
    return{
      userName:'',
      password:''
    }
  },
  methods:{
    ...mapActions([
      'login'
    ]),
    handleSubmit(){
      this.login({
        userName:this.userName,
        password:this.password
      }).then(()=>{
        console.log("登陆成功");
        this.$router.push({
          name:'home'
        })
      }).catch(error=>{
        console.log("登陆失败");
        console.log(error);
      })
    }
  }
}
</script>
