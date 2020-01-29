<template>
  <div class="header">
      <div class="left">
          <van-icon name="arrow-left" @click="$router.back()"/>
      </div>
      <div class="center">{{title}}</div>
  </div>
</template>

<script>

export default {
props: ['title'],
}
</script>

<style scoped>
.header{
    display: flex;
    height: 50px;
    line-height: 50px;
    margin: 0 15px;
    color: #131313
}
.center {
    margin: 0 auto
}



</style>