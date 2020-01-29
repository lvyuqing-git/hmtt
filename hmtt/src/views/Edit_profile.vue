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
import {alterHead_img} from '../apis/apiUser'
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
    // console.log(this.user);
    
  },
  methods: {
    async afterRead(file) {
      // 此时可以自行将文件上传至服务器
      let upload = new FormData()
      upload.append('file', file.file)
      let res = await uploadFile(upload)
      if(res.data.message == "文件上传成功"){
          let id = this.user.id
           if(res.data.data.url.indexOf('http') == -1){
                  res.data.data.url = 'http://127.0.0.1:3000' + res.data.data.url
              }
          let res2 = await alterHead_img(id,{head_img:res.data.data.url})
          
          if(res2.data.message == "修改成功"){
              localStorage.setItem('user',JSON.stringify(res2.data.data))
              this.user.head_img = res2.data.data.head_img
          }
          
      }
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
.van-uploader{
    opacity: 0;
}
</style>