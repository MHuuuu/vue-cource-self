<template>
  <div>
    <!-- <ul @click="handleClick">
      <li @click.stop="handleClick" v-for="(item,index) in list" :key="`list_item_${index}`">{{ item.name}}</li>
    </ul>-->
    <list :list="list" :render="renderFunc">
      <!-- slot-scope代表List组件中的slot的所有属性空间 -->
      <!-- <count-to slot="slotA" slot-scope="count" :end-val="count.number"></count-to> -->
    </list>
  </div>
</template>
<script>
//在render和component
import List from '_c/list'
import CountTo from '_c/count-to'
export default {
  data() {
    return {
      list: [{ number: 666 }, { number: 233 }]
    }
  },
  //如果导入组件不在template中使用，不需要在components中加入
  components: {
    List,
    //CountTo
  },
  methods: {
    // 自定义渲染~
    // jsx写法第一个参数必须是h！
    // 不需要冒号
    // on- 后接相应名
    // nativeOn- 接
    renderFunc(h, number) {
      return (
        <CountTo
          nativeOn-click={this.handleClick}
          on-on-animation-end={this.handleEnd}
          endVal={number}
          style={{ color: 'pink' }}
        />
      )
    },
    handleClick(event) {
      // console.log(event)
    },
    handleEnd() {
      // console.log('end!')
    }
  }
}
</script>
