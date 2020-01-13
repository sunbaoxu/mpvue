<template>
  <tab-bar :async="true">
    <section class="user-wrap">
      <header class="user-header">
        <dl>
          <dt class="g-back-box">
            <image src="https://tsfile.labifenqi.com/dm_xcx/user/user.png"></image>
          </dt>
          <dd>
            <h6>1412312312123</h6>
            <p>普通用dfsad户dfdsfadf</p>
          </dd>
        </dl>
      </header>
      <section class="user-main">
        <section class="user-main-box g-dis">
          <navigator url="/pages/video/main" class="list g-col-cen-cen-box">
            <i></i>
            <span>帖子</span>
          </navigator>
          <navigator url="/pages/video/main" class="list g-col-cen-cen-box">
            <i></i>
            <span>日记</span>
          </navigator>
          <navigator url="/pages/video/main" class="list g-col-cen-cen-box">
            <i></i>
            <span>头条</span>
          </navigator>
          <navigator url="/pages/video/main" class="list g-col-cen-cen-box">
            <i></i>
            <span>收藏</span>
          </navigator>
        </section>
      </section>
      <section class="user-list">
        <navigator url="/pages/video/main" class="list">我的草稿</navigator>
        <navigator url="/pages/video/main" class="list">推荐给好友</navigator>
        <navigator url="/pages/video/main" class="list">帮助与反馈</navigator>
      </section>
    </section>
  </tab-bar>
</template>

<script>
import TabBar from '$common/tab/TabBar'
export default {
  components:{
    TabBar
  },
  data() {
    return {
      url: "https://www.iqiyi.com/v_19rsho7kz8.html?src=focustext_1_20130410_1",
      arr: [
        {
          id: "1",
          value: "线路1",
          api: "http://www.vipjiexi.com/yun.php?url="
        },
        {
          id: "2",
          value: "线路2",
          api: "http://vip.jlsprh.com/index.php?url="
        },
        { id: "3", value: "线路3", api: "http://jiexi.071811.cc/jx.php?url=" },
        {
          id: "4",
          value: "线路4",
          api: "http://www.82190555.com/index/qqvod.php?url="
        },
        {
          id: "5",
          value: "线路5",
          api: "http://jx.api.163ren.com/vod.php?url="
        }
      ]
    };
  },
  methods: {
    showToast() {},
    aaa() {
      wx.request({
        // 获取ip
        url: "http://ip-api.com/json",
        success: function(e) {
          console.log(e, "aaa");
          // that.setData({
          //   motto: e.data
          // })
        }
      });
    }
  },
  mounted() {
    // this.aaa()
    // console.log('aaa')
  }
};
</script>
<style lang="scss" scoped>
.user-wrap {
  .user-header {
    padding: 0 15px;
    dl {
      display: flex;
      align-items: center;
      height: 140px;
      dt {
        height: 60px;
        width: 60px;
        border-radius: 100%;
        margin-right: 15px;
      }
      dd {
        p {
          font-size: 14px;
        }
      }
    }
  }
  .user-main {
    margin-bottom: 20px;
    padding: 0 10px;
    .user-main-box{
      background: #ececec;
      border-radius: 4px;
      height: 60px;
      .list {
        width: 0;
        flex: 1;
        span{
          font-size: 14px;
        }
      }
    }
  }
  .user-list {
    li,
    .list {
      height: 46px;
      margin-bottom: 10px;
      border-bottom: 1px solid #eaeaea;
      padding: 0 15px;
    }
  }
}
</style>

