<template>
  <section class="home-wrap">
    <header class="home-header">
      <dl>
        <dt></dt>
        <dd>
          <h6>1412312312123</h6>
          <p>普通用dfsad户dfdsfadf</p>
        </dd>
      </dl>
    </header>
    <section class="home-main">
      <ul>
        <li>
          <span>23</span>
          <span>累计分享</span>
        </li>
        <li>
          <span>23</span>
          <span>累计分享</span>
        </li>
        <li>
          <span>23</span>
          <span>累计分享</span>
        </li>
        <li>
          <span>23</span>
          <span>累计分享</span>
        </li>
      </ul>
    </section>
    <ul class="home-list">
      <li>修改密码</li>
      <li>常见问题</li>
      <li>专属客服</li>
      <li>设置</li>
      <navigator url="/pages/video/main" class="list">看视频</navigator>
      <!-- <web-view  :src="url+arr[0]"></web-view> -->
    </ul>
  </section>
</template>

<script>
export default {
  data () {
    return {
      url:'https://www.iqiyi.com/v_19rsho7kz8.html?src=focustext_1_20130410_1',
      arr : [
        {'id': '1' , 'value': '线路1',api:'http://www.vipjiexi.com/yun.php?url='},
        {'id': '2' , 'value': '线路2',api:'http://vip.jlsprh.com/index.php?url='},
        {'id':'3','value':'线路3',api:'http://jiexi.071811.cc/jx.php?url='},
        {'id':'4','value':'线路4',api:'http://www.82190555.com/index/qqvod.php?url='},
        {'id':'5','value':'线路5',api:'http://jx.api.163ren.com/vod.php?url='}
      ]
    }
  },
  methods: {
    showToast () {
    },
    aaa (){
      wx.request({  // 获取ip
        url: 'http://ip-api.com/json',
        success: function (e) {
          console.log(e,'aaa')
          // that.setData({
          //   motto: e.data
          // })
        }
      })
    }
  },
  mounted (){
    // this.aaa()
    // console.log('aaa')
  }
}
</script>
<style lang="scss" scoped>
.home-wrap{
  .home-header{
    padding:0 15px;
    dl{
      display: flex;
      align-items: center;
      height: 100px;
      dt{
        height: 60px;
        width: 60px;
        background-color: red;
        border-radius: 100%;
        margin-right: 15px;
      }
      dd{
        p{
          font-size: 14px;
        }
      }
    }
  }
  .home-main{
    margin-bottom: 20px;
  }
  .home-list{
    li,.list{
      height: 46px;
      margin-bottom: 10px;
      border-bottom: 1px solid #eaeaea;
      padding:0 15px;
    }
  }
}
</style>

