<template>
  <div id="app">
    <hmheader title="编辑资料"></hmheader>
    <div class="photo">
      <van-uploader :after-read="afterRead"
                    id="upload" />
      <label for="upload">
        <img :src="user.head_img"
             class="tx">
      </label>
    </div>
    <div>
      <hmcell title="昵称"
              :desc='user.nickname'></hmcell>
      <hmcell title="密码"
              desc='******'></hmcell>
      <hmcell title="性别"
              :desc="user.gender?'男':'女'"></hmcell>
    </div>
  </div>

</template>

<script>
import hmheader from '../components/hmheader'
import hmcell from '../components/hmcell'
import { uploadFile } from '../apis/apiupload'
export default {
  data() {
    return {
      user: {}
    }
  },
  components: {
    hmheader,
    hmcell
  },
  mounted() {
    this.user = JSON.parse(localStorage.getItem('user'))
  },
  methods: {
    async afterRead(file) {
      // 此时可以自行将文件上传至服务器
      let upload = new FormData()
      upload.append('file', file.file)
      let res = await uploadFile(upload)
      console.log(res)
    }
  }
}
</script>

<style lang='less' scoped>
.photo {
  position: relative;
  margin-top: 30px;
  height: 150px;
  .tx {
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    border-radius: 50%;
  }
}
</style>