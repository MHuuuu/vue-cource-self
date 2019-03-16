<template>
  <div class="home">
    <b>{{ food }}</b>
    <button @click="handleClick('back')">返回上一页</button>
    <button @click="handleClick('push')">跳转到parent</button>
    <button @click="handleClick('replace')">替换到parent</button>
    <button @click="getInfo">请求数据</button>
    <button @click="handleLogout">退出登录</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { getUserInfo } from '@/api/user'
import { mapActions } from "vuex";

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  props: {
    food: {
      type: String,
      default: 'apple'
    }
  },
  //组件内钩子
  //页面渲染前,故this对象无用
  beforeRouteEnter(to, from, next) {
    next(vm => {
      // console.log(vm)
    })
  },
  beforeRouteLeave(to, from, next) {
    // const leave = confirm('您确定要离开吗？')
    // if (leave) next()
    // else next(false)
    next()
  },
  methods: {
    ...mapActions([
      'logout'
    ]),
    handleClick(type) {
      if (type === 'back') this.$router.back()
      //push添加一道历史记录可供回退
      else if (type === 'push') {
        this.$router.push({
          name: `argu`,
          params: {
            name: 'lison'
          }
        })
      } else if (type === 'replace') {
        //replace替换一道历史记录不可回退被替换的页面
        this.$router.replace({
          name: 'parent'
        })
      }
    },
    getInfo() {
      getUserInfo({ userId: 21 }).then(res => {
        console.log('res: ', res.data)
      })
    },
    handleLogout() {
      this.logout()
      this.$router.push({
        name:'login'
      })
    }
  }
}
</script>
