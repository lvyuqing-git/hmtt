<template>
  <input type="text"
         @input="handleInput"
         :class="{success : status,error : !status}">
</template>

<script>
export default {
  props: ['rule'],
  data() {
    return {
      status: true
    }
  },
  methods: {
    handleInput(event) {
      let value = event.target.value
      if (this.rule && this.rule.test(value)) {
        this.status = true
      } else {
        this.status = false
      }
      this.$emit('input', value)
    }
  }
}
</script>

<style scoped lang='less'>
input {
  width: 318 * 100vw/360;
  height: 30px;
  border: none;
  border-bottom: 3px solid black;
  outline: none;
  font-size: 20px;
}
.success {
  border-bottom: 3px solid green;
}
.error {
  border-bottom: 3px solid red;
}
</style>