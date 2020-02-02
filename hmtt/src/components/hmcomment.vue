<template>
  <div class="comment">
      <hmcomment v-if="parent.parent" :parent='parent.parent'></hmcomment>
      <div class="top">
          <span>{{parent.user.nickname}} <i>2小时前</i></span>
          <span>回复</span>
      </div>
      <div class="bottom">
          {{parent.content}}
      </div>
  </div>
</template>

<script>
export default {
    name : 'hmcomment',
    props: ['parent']
}
</script>

<style lang='less' scoped>
    .comment{
        border: 1px solid black;
        margin-top: 10px;
        padding: 0 10px;
        .top{
            display: flex;
            justify-content: space-between;
            padding: 10px 0;
            >span{
                font-size: 14px;
            >i{
                margin-left: 10px;
                font-size: 12px;
            }
            }
            
        }
        .bottom{
            padding: 15px 0;
        }
    }
</style>