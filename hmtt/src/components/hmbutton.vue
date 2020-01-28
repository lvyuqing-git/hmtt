<template>
  <div class="button"
       @click="btnClick"
       :class="{primary : type == 'primary' , info:type == 'info'}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ['type'],
  methods: {
    btnClick(event) {
      this.$emit('click', event)
    }
  }
}
</script>

<style lang='less' scoped>
.button {
  width: 318 * 100vw/360;
  height: 50px;
  text-align: center;
  line-height: 50px;
  border-radius: 25px;
  font-size: 20px;
  color: #fff;
}
.primary {
  background-color: green;
}
.info {
  background-color: red;
}
</style>