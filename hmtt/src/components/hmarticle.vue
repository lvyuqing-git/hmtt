<template>
  <div class="article">
    <div class="danArticle">
      <div class="conten">{{post.title}}</div>
      <div class="picture">
        <!-- <img :src="item.url=item.url.indexOf('http')==-1?`http://127.0.0.1:3000${itme.url}`:itme.url"
             v-for="item in post.cover"
             :key="item.id"> -->
        <img :src="item.url"
             v-for="item in post.cover"
             :key="item.id">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['post']
}
</script>

<style lang='less' scoped>
.article {
  .danArticle {
    display: flex;
    justify-content: space-around;
  }
}
</style>