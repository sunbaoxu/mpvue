<template>
  <section class="tab-bar-wrap">
    <!-- 头部 -->
    <header
      class="c-header-wrap"
      :style="'padding-top:'+data.statusBarHeight+data.titleBarHeight+'px'"
    >
      <section class="hh-header">
        <section class="status-bar" :style="{height:data.statusBarHeight+'px'}"></section>
        <section class="title-bar" :style="'height:'+data.titleBarHeight+'px'">
          <view v-if="isShowBack == '1' && userImg" class="hh-nav-back" @click="userInfoFn">
            <!-- <text class="hh-nav-img" style="background-image:url({{userImg}})"></text> -->
          </view>
          <view v-else-if="isShowBack == '2'" class="hh-nav-back" @click="navback">
            <text
              class="hh-nav-icon"
            ></text>
            <!-- 
              style="background-image:url({{imgUrl+'chating/arrowblack.png'}})"

             -->
          </view>
          <view wx:else class="hh-nav-back"></view>
          <view class="hh-title">{{title}}</view>
          <div class="hh-nav-right"></div>
        </section>
      </section>
    </header>
    <slot></slot>
    <!-- 页脚 -->
    <footer class="c-tabar-warp" v-if="async">
      <section
        v-for="(m,i) in arr"
        :key="i"
        :class="['list', pageUrl == m.pageUrl ? 'aa' : 'bb']"
        @click="tabBarFn(m)"
      >
        <image class="icon" :src="pageUrl == m.pageUrl ? m.selectedIconPath : m.iconPath" />
        <span class="text">{{m.text}}</span>
      </section>
    </footer>
  </section>
</template>

<script>
export default {
  props: {
    async: {
      type: Boolean,
      default: false
    },
    pageUrl: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      userImg:"",
      isShowBack:'1',
      title:"大师傅",
      data: {},
      arr: [
        {
          text: "首页",
          pagePath: "/pages/home/main",
          iconPath: "/static/tabs/home.png",
          selectedIconPath: "/static/tabs/home1.png"
        },
        {
          text: "圈子",
          pagePath: "/pages/update/main",
          iconPath: "/static/tabs/update.png",
          selectedIconPath: "/static/tabs/update1.png"
        },
        {
          pagePath: "/pages/add/main",
          iconPath: "/static/tabs/add.png",
          selectedIconPath: "/static/tabs/add6.png"
        },
        {
          text: "消息",
          pagePath: "/pages/news/main",
          iconPath: "/static/tabs/news.png",
          selectedIconPath: "/static/tabs/news1.png"
        },
        {
          text: "我的",
          pagePath: "/pages/user/main",
          iconPath: "/static/tabs/user.png",
          selectedIconPath: "/static/tabs/user1.png"
        }
      ]
    };
  },
  methods: {
    tabBarFn(obj) {
      wx.redirectTo({
        url: obj.pagePath
      });
    },
    userInfoFn (){

    },
    navback (){

    }
  },
  mounted() {
    let _this = this;
    wx.getSystemInfo({
      success(res) {
        let totalTopHeight = 68;
        if (res.model.indexOf("iPhone X") !== -1) {
          totalTopHeight = 88;
        } else if (res.model.indexOf("iPhone") !== -1) {
          totalTopHeight = 64;
        }
        _this.data = {
          platform: res.platform,
          statusBarHeight: res.statusBarHeight,
          titleBarHeight: totalTopHeight - res.statusBarHeight
        };
      },
      failure() {
        _this.globalData.statusBarHeight = 0;
        _this.globalData.titleBarHeight = 0;
      }
    });
  }
};
</script>
<style lang="scss" scoped>
// .tab-bar-wrap{
//   position: fixed;
//   top: 0;
//   left: 0;
// }
.c-tabar-warp {
  height: 48px;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  border-top: 1px solid #ccc;
  background-color: #fff;
  z-index: 99;
  background: red;
}
.c-tabar-warp .list {
  width: 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.list .icon {
  width: 20px;
  height: 20px;
  margin-bottom: 2px;
}
.list .text {
  font-size: 12px;
  color: #8f8f8f;
}

.ico-back {
  width: 18px;
  height: 18px;
}


.hh-header {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #fff;
  z-index: 99;
  left: 0;
  background: red;
}

.hh-title {
  font-size: 18px;
  text-align: center;
  color: #000;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.title-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.hh-nav-right {
  width: 58px;
}
.hh-nav-back {
  width: 58px;
}
.hh-nav-img {
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  display: block;
  margin-left: 10px;
}
.hh-nav-icon {
  width: 10.5px;
  height: 18px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  margin-left: 17px;
  display: block;
}
</style>

