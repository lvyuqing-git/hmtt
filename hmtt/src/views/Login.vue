<template>
  <div id="app">
    <div class="container">
      <div class="close"><span class="iconfont iconicon-test"></span></div>
      <div class="logo"><span class="iconfont iconnew"></span></div>
      <div class="inputs">
        <hminout placeholder="请输入账号"
                 :value='user.username'
                 @input='inputUser'
                 msg='账号输入错误'
                 :rule='/^\d{6}$/'></hminout>
        <hminout placeholder="请输入密码"
                 v-model='user.password'
                 msg='密码输入错误'
                 :rule='/^\d{3}$/'></hminout>

      </div>
      <p class="tips">
        没有账号？
        <a href="#/register"
           class="">去注册</a></p>
      <hmbutton @click="btnClick"
                type='primary'>登录</hmbutton>
    </div>
  </div>

</template>

<script>
import hmbutton from '../components/hmbutton'
import hminout from '../components/hminput'
import { login } from '../apis/apiUser'
export default {
  components: {
    hmbutton,
    hminout
  },
  data() {
    return {
      user: {
        username: '10086',
        password: '123'
      }
    }
  },
  methods: {
    async btnClick() {
      let res = await login(this.user)
      if (res.data.message != '登录成功') {
          this.$toast.fail('用户名或密码错误')
      } else {
        localStorage.setItem('token', res.data.data.token)
        if (res.data.data.user.head_img.indexOf('http') == -1) {
          res.data.data.user.head_img =
            'http://127.0.0.1:3000' + res.data.data.user.head_img
        }
        localStorage.setItem('user', JSON.stringify(res.data.data.user))
        if (res.data.message == '登录成功') {
          this.$router.push({ name: 'Personal' })
        } else {
          this.$toast.fail(res.data.message)
        }
      }
    },
    inputUser(data) {
      this.user.username = data
    }
  }
}
</script>

<style lang='less' scpoed>
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