<template>
  <div class="index">
    <img src="./../assets/img/header.png" class="header" alt="">
    <div class="nickname" v-if="userinfo" v-text="userinfo.nickname"></div>
    <div class="btn-group">
      <button class="btn btn-primary">充值</button>
      <button class="btn">分享</button>
    </div>
  </div>
</template>
<script>
import API from './../api/index'
export default {
  name: 'index',
  data() {
    return {
      userinfo:''
    }
  },
  mounted() {
    if(this.$cookie.get('openId')){
      this.getUserInfo() // 获取用户信息
    }
  },
  methods:{
    getUserInfo(){
      this.$http.get(API.getUserInfo).then((response) => {
        let res = response.data
        this.userinfo = res.data
      })
    }
  }
}
</script>
<style>
  .index {
    background-Color: #ffc93a;
    height: 100vh;
  }
  .btn-group {
    text-align: center
  }
  .nickname{
    position: absolute;
    left:50%;
    transform: translateX(-50%);
    top: 6rem;
    font-size: 18px
  }
</style>


