<template>
  <div class="cell">
      <div class="left">{{title}}</div>
      <div class="right">{{desc}}<van-icon name="arrow" /></div>
      </div>
</template>

<script>
export default {
    props: ['title','desc']
}
</script>

<style>
.cell{
    display: flex;
    justify-content: space-between;
    margin: 0 15px;
    border-bottom: 1px solid #dbdbdb;
    line-height: 50px;
}
.right{
    font-size: 14px;
    color: #a1a1a1
}
.van-icon{
    font-size: 20px;
    vertical-align: middle
}
</style>