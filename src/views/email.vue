<template>
  <dir class="email">
    <button @click="handleClick">press ME!!</button>
  </dir>
</template>
<script>
export default {
  methods:{
    handleClick(){
      this.$bus.$emit('on-click','hello')
    }
  },
  mounted(){
    console.log(this.$bus)
  }
}
</script>
<style lang="less">
  .email{
    border: 1px solid green
  }
</style>
