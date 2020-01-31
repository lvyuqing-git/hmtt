<template>
  <div>
    <div class="header">
      <div class="logo">
        <span class="iconfont iconnew"></span>
      </div>
      <div class="search">
        搜索
      </div>
      <div class="user">
        <van-icon name="contact" />
      </div>
    </div>
    <div>
      <van-tabs v-model="active"
                @click="onClick"
                swipeable>
        <van-tab :title="item.name"
                 v-for="item in columnList"
                 :key="item.id">

          <van-list v-model="loading"
                    :finished="finished"
                    finished-text="没有更多了"
                    @load="onLoad">
            <hmarticle v-for="(item,index) in columnList[active].postList"
                       :key="index"
                       :post='item'></hmarticle>
          </van-list>

        </van-tab>
      </van-tabs>
    </div>
  </div>

</template>

<script>
import { getColumnList, getArticleList } from '../apis/article'
import hmarticle from '../components/hmarticle'
export default {
  data() {
    return {
      active: localStorage.getItem('token') ? 1 : 0,
      columnList: [],
      loading: false,
      finished: false
    }
  },
  components: {
    hmarticle
  },
  async mounted() {
    let res = await getColumnList()
    this.columnList = res.data.data.map(value => {
      return {
        ...value,
        pageIndex: 1,
        pageSize: 5,
        postList: []
      }
    })
    this.init()
  },
  methods: {
    onClick() {
      this.init()
    },
    async init() {
      let res2 = await getArticleList({
        pageIndex: this.columnList[this.active].pageIndex,
        pageSize: this.columnList[this.active].pageSize,
        category: this.columnList[this.active].id
      })
      if(this.columnList[this.active].postList.length >= res2.data.total){
          this.finished = true
      }

      this.columnList[this.active].postList = this.columnList[
        this.active
      ].postList.concat(res2.data.data)
      for (let i = 0; i < this.columnList[this.active].postList.length; i++) {
        for (
          let j = 0;
          j < this.columnList[this.active].postList[i].cover.length;
          j++
        ) {
          if (
            this.columnList[this.active].postList[i].cover[j].url.indexOf(
              'http'
            ) == -1
          ) {
            this.columnList[this.active].postList[i].cover[j].url =
              'http://127.0.0.1:3000' +
              this.columnList[this.active].postList[i].cover[j].url
          }
        }
      }
    },

    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      this.columnList[this.active].pageIndex += 1
      this.init()
      this.loading = false
    }
  }
}
</script>

<style scoped lang='less'>
.header {
  display: flex;
  justify-content: space-between;
  background-color: #ff0000;
  height: 50px;
  line-height: 50px;
  padding: 0 10px;
  .logo {
    span {
      font-size: 70px;
      color: #fff;
    }
  }
  .search {
    flex: 1;
    border-radius: 25px;
    height: 35px;
    background: #f97979;
    text-align: center;
    line-height: 35px;
    margin: auto 20px;
  }
  .user {
    i {
      font-size: 32px;
      color: #fff;
    }
  }
}
</style>