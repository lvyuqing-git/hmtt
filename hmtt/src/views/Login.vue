<template>
  <div id="app">
    <div class="container">
      <div class="close"><span class="iconfont iconicon-test"></span></div>
      <div class="logo"><span class="iconfont iconnew"></span></div>
      <div class="inputs"><input placeholder="请输入手机号"
               class="input"><input placeholder="密码"
               class="input"
               type="password"></div>
      <p class="tips">
        没有账号？
        <a href="#/register"
           class="">去注册</a></p>
      <hmbutton></hmbutton>
    </div>
  </div>

</template>

<script>
import hmbutton from '../components/hmbutton'
export default {
  components: {
    hmbutton
  }
}
</script>

<style>
</style>