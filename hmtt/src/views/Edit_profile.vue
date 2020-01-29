<template>
  <div id="app">
    <hmheader title="编辑资料"></hmheader>
    <div class="photo">
      <img :src="user.head_img"
           class="tx">
    </div>
    <div>
        <hmcell title="昵称" :desc='user.nickname'></hmcell>
        <hmcell title="密码" desc='******'></hmcell>
        <hmcell title="性别" :desc="user.gender?'男':'女'"></hmcell>
    </div>
  </div>

</template>

<script>
import hmheader from '../components/hmheader'
import hmcell from '../components/hmcell'
export default {
  data() {
    return {
      user: {}
    }
  },
  components: {
    hmheader,hmcell
  },
  mounted() {
    this.user = JSON.parse(localStorage.getItem('user'))
    console.log(this.user)
  }
}
</script>

<style lang='less' scoped>
.photo {
  position: relative;
  margin-top: 30px;
  height: 150px;
  > .tx {
   position: absolute;
   left: 50%;
   transform: translate(-50%);
   border-radius: 50%;
  }
}
</style>