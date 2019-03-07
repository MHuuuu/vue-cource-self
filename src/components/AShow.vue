<template>
  <div>
    <p>A Show:{{content}}</p>
  </div>
</template>
<script>
export default {
  props:{
    content:{
      type:[String,Number],
      default:''
    }
  }
}
</script>
