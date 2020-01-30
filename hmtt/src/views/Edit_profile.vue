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
              :desc='user.nickname' @click="userAlter.nicknameAlter=true"></hmcell>

      <van-dialog v-model="userAlter.nicknameAlter" 
                  title="修改昵称"
                  show-cancel-button
                  @confirm='nicknameAlter'>
        <van-field  placeholder="请输入昵称" :value='user.nickname' ref="nick"/>
      </van-dialog>

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
import { alterInfo ,userInfo} from '../apis/apiUser'
export default {
  data() {
    return {
      user: {},
      userAlter: {
        nicknameAlter: false,
        passwordAlter: false,
        genderAlter: false
      },
      userInfo : {
          nickname : ''
      },
      id :''
    }
  },
  components: {
    hmheader,
    hmcell
  },
  async mounted() {
    let res = await userInfo(this.$route.params.id)
    this.user = res.data.data
  },
  methods: {
    async afterRead(file) {
      // 此时可以自行将文件上传至服务器
      let upload = new FormData()
      upload.append('file', file.file)
      let res = await uploadFile(upload)
      if (res.data.message == '文件上传成功') {
        if (res.data.data.url.indexOf('http') == -1) {
          res.data.data.url = 'http://127.0.0.1:3000' + res.data.data.url
        }
        let res2 = await alterInfo(this.user.id, { head_img: res.data.data.url })
        if (res2.data.message == '修改成功') {
          this.user.head_img = res2.data.data.head_img
        }
      }
    },
    async nicknameAlter(){
        let value = this.$refs.nick.$refs.input.value
        let res = await alterInfo(this.user.id,{nickname : value})
        this.user.nickname = res.data.data.nickname
        
    }
  }
}
</script>

<style lang='less' scoped>
.photo {
  position: relative;
  margin-top: 10px;
  height: 150px;
  .tx {
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }
}
.van-uploader {
  opacity: 0;
}
</style>