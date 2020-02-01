<template>
  <div class="news">
    <div class="header">
      <div class="left">
        <van-icon name="arrow-left back"
                  @click="$router.back()" />
        <span class="iconfont iconnew new"></span>
      </div>
      <div class="right">已关注</div>
    </div>
    <div class="title"
         v-html="data.title">
    </div>
    <div class="newsDate">
      <p><span></span><i>{{data.create_date | dateFormat}}</i></p>
    </div>
    <div class="conten"
         v-html="data.content" v-if="data.type == 1">
      
    </div>
    <div class="conten" v-if="data.type == 2" >
     <video :src="data.content" controls></video>
    </div>
    <div class="footer">
      <span>112</span><span>微信</span>
    </div>
  </div>
</template>

<script>
import { getArticleInfo } from '../apis/article'
import { dateFormat } from '../utils/myfilters'
export default {
  data() {
    return {
      data: {}
    }
  },
  filters: {
    dateFormat
  },
  async mounted() {
    let res = await getArticleInfo(this.$route.params.id)
    this.data = res.data.data
    console.log(this.data)
  }
}
</script>

<style lang='less' scoped>
.news {
  background-color: #f2f2f2;
  padding: 0 10px;
  line-height: 30px;
  .header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    height: 50px;
    .left {
      position: relative;
      .van-icon {
        position: absolute;
        top: 15px;
        font-size: 30px;
      }
      .new {
        font-size: 60px;
        margin-left: 30px;
        position: absolute;
        top: 15px;
      }
    }
    .right {
      height: 20px;
      border: 1px solid black;
      border-radius: 26px;
      padding: 5px 10px;
      margin-top: 10px;
      line-height: 20px;
    }
  }
  .title {
    font-size: 20px;
    font-weight: bold;
  }
  .newsDate {
    margin-bottom: 10px;
    i {
      margin-left: 20px;
    }
  }
  .footer {
    padding: 30px 0;
    display: flex;
    justify-content: space-around;

    span {
      border: 1px solid black;
      padding: 3px 15px;
      border-radius: 25px;
    }
  }
}
/deep/.photo {
  img {
    width: 100%;
    display: block;
  }
}
video{
    width: 100%;
}
</style>