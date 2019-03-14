<template>
  <div>
    <!-- <ul @click="handleClick">
      <li @click.stop="handleClick" v-for="(item,index) in list" :key="`list_item_${index}`">{{ item.name}}</li>
    </ul>-->
    <list :list="list" :render="renderFunc"></list>
  </div>
</template>
<script>
import List from '_c/list'
export default {
  data() {
    return {
      list: [{ name: '?' }, { name: '!' }]
    }
  },
  components: {
    List
  },
  methods: {
    /* handleClick(event) {
      console.log(event)
    } */
    //自定义渲染~
    renderFunc(h,name) {
      return h('i',{
        style:{
          color:'pink'
        }
      },name)
    }
  }
}
</script>
