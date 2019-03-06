<template>
  <div>
    <!-- $route为当前路由对象，params.name字段里的参数 -->
    {{ name }}
  </div>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      default: "zx"
    }
  },
  //路由改变，而这个组件被复用
  //可用this对象
  beforeUpdate(to,from,next){
    console.log(to.name+","+from.name)
  }
};
</script>
