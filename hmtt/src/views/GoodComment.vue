<template>
  <div>
    <hmheader title="精彩跟帖"></hmheader>
    <div v-for="item in list"
         :key="item.id"
         class="gentie">
      <div class="list">
        <div class="left"><img :src="item.user.head_img"
               alt=""></div>
        <div class="center">
          <span>{{item.user.nickname}}</span>
          <i>{{item.user.create_date | dateFormat}}</i>
        </div>
        <div>
          回复
        </div>
      </div>
      <div class="content">{{item.content}}</div>
    </div>
  </div>
</template>

<script>
import hmheader from '../components/hmheader'
import { post_comment } from '../apis/article'
import { dateFormat } from '../utils/myfilters'
export default {
  components: {
    hmheader
  },
  filters: {
    dateFormat
  },
  async mounted() {
    let res = await post_comment(this.$route.params.id)
    console.log(res)
    this.list = res.data.data
    this.list.map(item => {
      if (item.user.head_img) {
        if (item.user.head_img.indexOf('http') == -1) {
          item.user.head_img = 'http://127.0.0.1:3000' + item.user.head_img
        }
      } else {
        item.user.head_img = 'http://127.0.0.1:3000/uploads/image/default.jpeg'
      }
    })
  },
  data() {
    return {
      list: []
    }
  }
}
</script>

<style lang='less' scoped>
.gentie{
    border-bottom: 1px solid black;
    padding: 10px 0;
}
.content{
    margin-left: 20px;
}
.list {
  display: flex;
  justify-content: space-around;
  padding: 10px;
  .left {
    img {
      width: 50/360 * 100vw;
      height: 50/360 * 100vw;
      border-radius: 50%;
    }
  }
  .center {
    flex: 1;
    display: flex;
    flex-direction: column;
    margin: auto 0;
    margin-left: 10px;
  }
}
</style>