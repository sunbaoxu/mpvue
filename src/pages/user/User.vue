<template>
  <tab-bar :async="true" title="我的" isShowBack="1">
    <section class="user-wrap">
      <header class="user-header">
        <dl class="g-cen-y">
          <dt 
            v-if="userInfo.avatarUrl" 
            class="g-back " 
            :style="'background-image:url('+userInfo.avatarUrl+')'"
          ></dt>
          <dd>
            <h6 class="g-cen-y" @click.prevent="userDetailFn">
              <span class="g-text-ove1">{{userInfo.nickName}}</span>
              <i class="g-cen-y"></i>
            </h6>
            <div class="g-cen-y">
              <span class="g-cen-y">关a注&nbsp;<b>10</b></span>
              <span class="g-cen-y">粉丝&nbsp;<b>15</b></span>
            </div>
            <p>个人主页</p>
          </dd>
        </dl>
        <section class="nav-box g-dis">
          <navigator url="/pages/video/main" class="list g-col-cen-cen-box">
            <i class="tiezi g-back"></i>
            <span>帖子</span>
          </navigator>
          <navigator url="/pages/video/main" class="list g-col-cen-cen-box">
            <i class="riji g-back"></i>
            <span>日记</span>
          </navigator>
          <navigator url="/pages/video/main" class="list g-col-cen-cen-box">
            <i class="toutiao g-back"></i>
            <span>头条</span>
          </navigator>
          <navigator url="/pages/video/main" class="list g-col-cen-cen-box">
            <i class="shoucang g-back"></i>
            <span>收藏</span>
          </navigator>
        </section>
      </header>
      <section class="user-main">
        
      </section>
      <section class="user-list">
        <navigator url="/pages/video/main" class="list">
          <dl class="g-cen-y">
            <dt class="g-back caogao"></dt>
            <dd class="g-fen-cen g-border">
              <span>我的草稿</span>
              <i class="g-back"></i>
            </dd>
          </dl>
        </navigator>
        <navigator url="/pages/video/main" class="list">
          <dl class="g-cen-y">
            <dt class="g-back haoyou"></dt>
            <dd class="g-fen-cen g-border">
              <span>推荐给好友</span>
              <i class="g-back"></i>
            </dd>
          </dl>
        </navigator>
        <navigator url="/pages/video/main" class="list">
          <dl class="g-cen-y">
            <dt class="g-back bangzhu"></dt>
            <dd class="g-fen-cen">
              <span>帮助与反馈</span>
              <i class="g-back"></i>
            </dd>
          </dl>
        </navigator>
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
      userInfo:{
        avatarUrl:'https://tsfile.labifenqi.com/dm_xcx/user/user.png'
      }
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
    },
    //跳转个人主页
    userDetailFn (){
      wx.navigateTo({
        url:'/pages/user/userPage/main'
      })
    }
  },
  mounted() {
    wx.hideTabBar();
    this.userInfo = wx.getStorageSync('dm-user-obj');
  }
};
</script>
<style lang="scss" scoped>
.user-wrap {
  .user-header {
    height: 174px;
    margin-bottom: 11px;
    background-color: $col-f;
    dl {
      padding:8px 0 8px 15px;
      height: 60px;
      overflow: hidden;
      dt {
        width: 60px;
        height: 100%;
        border-radius: 100%;
        margin-right: 15px;
        background-size: 112%;
        overflow: hidden;
      }
      dd {
        height: 100%;
        width: 0;
        flex: 1;
        position: relative;
        padding-right: 100px;
        h6{
          font-size: 21px;
          color: $col-3;
          line-height: 39px;
          span{
            max-width: 160px;
          }
          i{
            flex:1;
            &::after{
              content: "";
              width: 7px;
              height: 12px;
              background: url('https://tsfile.labifenqi.com/dm_xcx/icon/jiao.png') no-repeat center;
              background-size: cover;
              margin-left: 13px;
            }
          }
        }
        div{
          line-height: 23px;
          span{
            font-size: 13px;
            margin-right: 20px;
          }
        }
        p{
          position: absolute;
          right: 0;
          top: 13.5px;
          height: 25px;
          font-size: 13px;
          color: $col-green;
          line-height: 25px;
          padding:0 13.5px 0 11px;
          border-radius: 12.5px 0 0 12.5px;
          background-color: $col-green1;
        }
      }
    }
    .nav-box{
      padding:30px 15px 8px;
      .list{
        width: 0;
        flex: 1;
        i{
          width: 25px;
          height: 25px;
          &.tiezi{
            background-image: url('https://tsfile.labifenqi.com/dm_xcx/user/tiezi.png') ;
          }
          &.riji{
            background-image: url('https://tsfile.labifenqi.com/dm_xcx/user/riji.png') ;
          }
          &.toutiao{
            background-image: url('https://tsfile.labifenqi.com/dm_xcx/user/toutiao.png') ;
          }
          &.shoucang{
            background-image: url('https://tsfile.labifenqi.com/dm_xcx/user/shoucang.png') ;
          }
        }
        span{
          font-size: 14px;
          line-height: 35px;
          color:$col-3;
        }
      }
    }
  }
  .user-list {
    background-color: $col-f;
    li,.list {
      height: 55px;
      padding: 0 15px;
      dl{
        height: 100%;
        width: 100%;
        padding-left: 15px;
        dt{
          width: 25px;
          height: 25px;
          margin-right: 23px;
          &.caogao{
            background-image: url('https://tsfile.labifenqi.com/dm_xcx/user/caogao.png') ;
          }
          &.haoyou{
            background-image: url('https://tsfile.labifenqi.com/dm_xcx/user/haoyou.png') ;
          }
          &.bangzhu{
            background-image: url('https://tsfile.labifenqi.com/dm_xcx/user/bangzhu.png') ;
          }
        }
        dd{
          width: 0;
          flex: 1;
          height: 100%;
          padding-right: 15px;
          i{
            width: 11.2px;
            height: 19px;
            background-image: url('https://tsfile.labifenqi.com/dm_xcx/icon/jiao.png');
          }
        }
      }
    }
  }
}
</style>

