<template>
  <div class="addcomment"
       v-if="isShow">
    <input type="text"
           placeholder="写跟帖"
           @click="isShow=!isShow">
    <span class="comment"
          @click="$router.push({path : `/goodComments/${article.id}`})">
      <i class="iconfont iconpinglun-"></i>
      <em>1111</em>
    </span>
    <i class="iconfont iconshoucang"></i>
    <i class="iconfont iconfenxiang"></i>
  </div>
  <div v-else-if="!isShow"
       class="text">
    <textarea cols="30"
              rows="3"
              placeholder="回复:@火星网友1"></textarea>
    <div class="btn">
      <button @click="isShow=!isShow">取消</button>

      <button>发送</button>
    </div>
  </div>

</template>

<script>
export default {
  props: ['article'],
  data() {
    return {
      isShow: true
    }
  },
  methods: {
    onClick() {
      this.isShow = !this.isShow
    }
  }
}
</script>

<style scoped lang='less'>
.addcomment {
  display: flex;
  padding: 20px;
  input {
    border-radius: 20px;
    border: none;
    text-indent: 1em;
    flex: 4;
  }
  i {
    font-size: 20px;
  }
  .comment {
    position: relative;
    margin-left: 20px;

    em {
      position: absolute;
      left: 14px;
      border-radius: 20px;
      height: 10px;
      text-align: center;
      line-height: 10px;
      font-size: 10px;
      background-color: red;
      padding: 2px 4px;
      color: #fff;
    }
  }
  .iconfont {
    margin: 0 10px;
  }
}

.text {
  display: flex;
  textarea {
    resize: none;
    border-radius: 18px;
    text-indent: 1em;
    background-color: #d7d7d7;
  }
  .btn {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    button {
      width: 60/360*100vw;
      height: 25/360*100vw;
      font-size: 14px;
      background: red;
      color: #fff;
      border: none;
      border-radius: 20px;
      line-height: 25px;
      margin-left: 20px;
    }
  }
}
</style>