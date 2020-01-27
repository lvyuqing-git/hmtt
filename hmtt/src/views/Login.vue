<template>
  <div id="app">
    <div class="container">
      <div class="close"><span class="iconfont iconicon-test"></span></div>
      <div class="logo"><span class="iconfont iconnew"></span></div>
      <div class="inputs">
     
          <van-field v-model="username"
                     error
                     required
                     label="用户名"
                     placeholder="请输入用户名" />
          <van-field v-model="password"
                     required
                     label="密码"
                     placeholder="请输入密码"
                     error-message="密码错误" />
     
      </div>
      <p class="tips">
        没有账号？
        <a href="#/register"
           class="">去注册</a></p>
      <div class="button">登录按钮</div>
    </div>
  </div>

</template>

<script>
export default {
    data () {
        return {
            username : '',
            password : ''

        }
    }
}
</script>

<style lang='less' scoped>
.container {
  padding: 20px;
}

.close {
  span {
    font-size: 27 / 360 * 100vw;
  }
}

.logo {
  display: flex;
  justify-content: center;

  span {
    display: block;
    font-size: 126 / 360 * 100vw;
    color: #d81e06;
  }
}

.inputs {
  input {
    margin-bottom: 20px;
  }
}

.tips {
  text-align: right;
  margin-bottom: 20px;

  a {
    color: #3385ff;
  }
}
</style>