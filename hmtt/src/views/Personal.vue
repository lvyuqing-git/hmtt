<template>
  <div class="personal">
    <router-link :to="`/edit_profile/${this.user.id}`">
      <div class="profile">
        <!-- $axios.defaults.baseURL读取axios的服务器路径 -->
        <img :src="user.head_img" />
        <div class="profile-center">
          <div class="name">
            <span class="iconfont iconxingbienan"></span>{{user.nickname}}
          </div>
          <div class="time">{{user.create_date | dateFormat}}</div>
        </div>
        <span class="iconfont iconjiantou1"></span>
      </div>
    </router-link>
    <div class="body">
      <cell title='我的关注'
            desc='关注的用户'>
      </cell>
      <cell title='我的跟帖'
            desc='跟帖/回复'>
      </cell>
      <cell title='我的收藏'
            desc='文章/视频'>
      </cell>
      <cell title='设置'>
      </cell>
    </div>
  </div>
</template>

<script>
import cell from '../components/hmcell'
import {dateFormat} from '../utils/myfilters'
export default {
  data() {
    return {
      user: {}
    }
  },
  filters: {
    dateFormat
  },
  components: {
    cell
  },
  mounted() {
    this.user = JSON.parse(localStorage.getItem('user'))
  }
}
</script>

<style lang='less' scoped>
.personal {
  width: 100vw;
  height: 100vh;
  background-color: #eee;
}
a {
  color: #666;
}
.profile {
  display: flex;
  padding: 20px 10px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 5px #ddd solid;

  img {
    width: 70 / 360 * 100vw;
    height: 70 / 360 * 100vw;
    border-radius: 50%;
  }

  .profile-center {
    flex: 1;
    padding: 0 10px;
  }

  .name {
    span {
      color: #75b9eb;
    }
  }

  .time {
    color: #666;
    font-size: 14px;
    margin-top: 5px;
  }
}
</style>
