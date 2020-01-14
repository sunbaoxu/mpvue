<template>
  <section class="tab-bar-wrap">
    <!-- 头部 -->
    <header
      class="c-header-wrap"
      :style="'padding-top:'+(data.statusBarHeight+data.titleBarHeight)+'px'"
    >
      <section class="hh-header">
        <section class="status-bar" :style="{height:data.statusBarHeight+'px'}"></section>
        <section class="title-bar" :style="'height:'+data.titleBarHeight+'px'">
          <section v-if="isShowBack == '1'" class="hh-nav-back" @click="userInfoFn">
            <i
              class="hh-nav-img"
              style="background-image:url(https://tsfile.labifenqi.com/dm_xcx/tab/home.png)"
            ></i>
          </section>
          <section v-else-if="isShowBack == '2'" class="hh-nav-back" @click="navback">
            <i class="hh-nav-icon"></i>
          </section>
          <div v-else class="hh-nav-back"></div>
          <div class="hh-title">{{title}}</div>
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
        :class="['list',{'on':pagePath == m.pagePath},{'icon-box':!!m.iconAsync}]"
        @click="tabBarFn(m)"
      >
        <image class="icon" :src="pagePath == m.pagePath ? m.selectedIconPath : m.iconPath" />
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
    }
  },
  data() {
    return {
      userImg: "",
      isShowBack: "1",
      pagePath:"",
      title: "大师傅",
      data: {},
      arr: [
        {
          text: "首页",
          pagePath: "pages/home/main",
          iconPath: "/static/tabs/home.png",
          selectedIconPath: "/static/tabs/home1.png"
        },
        {
          text: "圈子",
          pagePath: "pages/update/main",
          iconPath: "/static/tabs/update.png",
          selectedIconPath: "/static/tabs/update1.png"
        },
        {
          pagePath: "pages/add/main",
          iconPath: "/static/tabs/add.png",
          selectedIconPath: "/static/tabs/add6.png",
          iconAsync:true
        },
        {
          text: "消息",
          pagePath: "pages/news/main",
          iconPath: "/static/tabs/news.png",
          selectedIconPath: "/static/tabs/news1.png"
        },
        {
          text: "我的",
          pagePath: "pages/user/main",
          iconPath: "/static/tabs/user.png",
          selectedIconPath: "/static/tabs/user1.png"
        }
      ]
    };
  },
  methods: {
    init (){
      this.getCurrentPageUrl();
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
    },
    tabBarFn(obj) {
      wx.switchTab({
        url:'/'+ obj.pagePath
      });
    },
    userInfoFn() {},
    navback() {},
    //获取当前页
    getCurrentPageUrl(){
      var pages = getCurrentPages()    //获取加载的页面
      var currentPage = pages[pages.length-1]    //获取当前页面的对象
      this.pagePath = currentPage.route    //当前页面url
    }
  },
  mounted() {
    this.init();
    
  }
};
</script>
<style lang="scss" scoped>
.tab-bar-wrap {
  .c-tabar-warp {
    height: 53px;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    border-top: 1px solid #ccc;
    background-color: #FCFCFC;
    z-index: 99;
    .list {
      width: 0;
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding-top: 8px;
      &.on{
        .text{
          color: #68B273;
        }
      }
      .icon {
        width: 20px;
        height: 20px;
        line-height: 18px;
      }
      .text {
        font-size: 11px;
        color: #444;
      }
      &.icon-box{
        padding-top:5.5px;
        .icon{
          height: 48px;
          width: 50px;
        }
      }
    }
  }
  .ico-back {
    width: 18px;
    height: 18px;
  }
  .c-header-wrap{
    .hh-header {
      position: fixed;
      top: 0;
      width: 100%;
      background-color: #fff;
      z-index: 99;
      left: 0;
      .title-bar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .hh-nav-back {
          width: 58px;
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
        }
        .hh-title {
          font-size: 18px;
          text-align: center;
          color: #000;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .hh-nav-right {
          width: 58px;
        }
      }
    }
  }
}
</style>

