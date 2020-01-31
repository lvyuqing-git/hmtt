<template>
 <div @click="onClick">
      <div class="article"
       v-if="post.type==1 && post.cover.length == 1">
    <div class="danArticle">
      <div class="conten">{{post.title}}
        <div class="base">
          <span>火星时报<i>52跟贴</i></span>
        </div>
      </div>
      <div class="picture">
        <img :src="item.url"
             v-for="item in post.cover"
             :key="item.id">
      </div>
    </div>
  </div>
  <div class="article"
       v-else-if="post.type==1 && post.cover.length > 1">
    <div class="danArticle2">
      <div>
        {{post.title}}
      </div>
      <div class="imgs">
        <img :src="item.url"
             v-for="item in post.cover"
             :key="item.id">
      </div>
      <div class="base">
        <span>火星时报<i>52跟贴</i></span>
      </div>
    </div>
  </div>
  <div class="article"
       v-else-if="post.type==2">
    <div class="danArticle3">
      <div>
        {{post.title}}
      </div>
      <div class="video">
        <img :src="post.cover[0].url">
        <div class="play">
          <div class="triangle">

          </div>
        </div>
      </div>
      <div class="base">
        <span>火星时报<i>52跟贴</i></span>
      </div>
    </div>
  </div>
 </div>
</template>

<script>
export default {
  props: ['post'],
  methods: {
      onClick(event){
          this.$emit('click',event)
      }
  }
}
</script>

<style lang='less' scoped>
.article {
  border-bottom: 1px solid #ccc;
  padding: 15px;
  .danArticle {
    display: flex;
    justify-content: space-between;
    .conten {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .picture {
    margin: 0 5px;
      img {
        width: 120/360 * 100vw;
        height: 70/360 * 100vw;
        object-fit: cover;
        padding-right: 5px;
      }
    }
  }
}
.danArticle2 {
  .imgs {
    margin: 10px 0;
    img {
      width: 32%;
      height: 68px;
      margin: 0 2px;
    }
  }
}
.base {
  font-size: 14px;
  color: #868686;
  margin-top: 10px 0;
  i {
    margin-left: 10px;
  }
}

.danArticle3 {
  position: relative;
  .video {
    margin: 10px 0;
    img {
      width: 100%;
    }
  }
  .play {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 80px;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    height: 80px;
    background: rgba(0, 0, 0, 0.3);
    .triangle {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-10%, -50%);
      width: 0;
      height: 0;
      border: 20px solid transparent;
      border-left-color: #fff;
    }
  }
}
</style>