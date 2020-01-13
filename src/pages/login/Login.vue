<template>
  <section class="login-wrap">
    <image src="/static/img/login.jpg"></image>
    <button open-type="getUserInfo" @getuserinfo="bindGetUserInfo" @click="getUserInfoClick">获取权限</button>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    getUserInfoClick() {
      console.log("click事件首先触发");
    },
    bindGetUserInfo(e) {
      if (e.mp.detail.userInfo) {
        console.log("用户按了允许授权按钮");
        console.log(e.mp.detail)
        let { encryptedData, userInfo, iv } = e.mp.detail;
        wx.switchTab({
          url: '/pages/home/main'
        })
      } else {
        //用户按了拒绝按钮
        console.log("用户按了拒绝按钮");
      }
    }
  },
  mounted() {
    // this.aaa()
    // console.log('aaa')
  }
};
</script>
<style lang="scss" scoped>
.login-wrap {
  image{
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  button{
    height: 100%;
    opacity: 0;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
  }
}
</style>

