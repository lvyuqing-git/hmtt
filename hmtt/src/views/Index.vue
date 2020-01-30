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
      <van-tabs v-model="active">
        <van-tab :title="item.name"
                 v-for="item in columnList"
                 :key="item.id">内容 1</van-tab>
      </van-tabs>
    </div>
  </div>

</template>

<script>
import { getColumnList,getArticleList } from '../apis/article'
export default {
  data() {
    return {
      active: 0,
      columnList: []
    }
  },
  async mounted() {
    let res = await getColumnList()
    this.columnList = res.data.data.map(value => {
      return {
        ...value,
        pageIndex: 1,
        pageSize: 2,
        postList: []
      }
    })

    let res2 = await getArticleList({
        pageIndex : this.columnList[this.active].pageIndex,
        pageSize : this.columnList[this.active].pageSize,
        category : this.columnList[this.active].id,
    })
    console.log(res2);
    
  
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