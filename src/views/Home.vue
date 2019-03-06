<template>
  <div class="home">
    <img alt="Vue logo" src="@/assets/img/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button @click="handleClick('back')">返回上一层</button>
    <button @click="handleClick('push')">parent</button>
    <button @click="handleClick('replace')">replace</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "_c/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  methods: {
    handleClick(type) {
      if (type === "back") this.$router.back();
      //push添加一道历史记录可供回退
      else if (type === "push") {
        this.$router.push({
          // const name = "zx";
          //path: '/argu/${name}'

          //name配合params可行，但path和params不行
          name: "argu",
          params: {
            name: "zx"
          }
          /* query:{
          name:'zz'
        } */
        });
      } else if (type === "replace")
        //push替换一道历史记录不可回退被替换的页面
        this.$router.replace({
          name: "parent"
        });
    }
  }
};
</script>
