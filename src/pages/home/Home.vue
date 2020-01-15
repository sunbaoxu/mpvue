<template>
  <tab-bar :async="true" title="多美" isShowBack="1">
    <section class="home-wrap">
      <section class="banner-box">

      </section>
      <section class="nav-box">
        <dl>
          <dt></dt>
          <dd>
            <h6>试管百科</h6>
            <p>试管知识，全面科普</p>
          </dd>
        </dl>
        <dl>
          <dt></dt>
          <dd>
            <h6>话题广场</h6>
            <p>海量话题，等你来聊</p>
          </dd>
        </dl>
      </section>
      <ul>
        <li v-for="(m,i) in arr" :key="i" class="g-border">
          <navigator :url="m.path" class="list-box">
            <dl>
              <dd class="g-col-fen">
                <h6>{{m.title}}</h6>
                <p>{{m.time}}</p>
              </dd>
              <dt>
                <image class="g-back" :src="m.imgUrl" ></image>
              </dt>
            </dl>
          </navigator>
        </li>
      </ul>
    </section>
  </tab-bar>
</template>

<script>
import TabBar from '$common/tab/TabBar'
export default {
  components:{
    TabBar
  },
  data () {
    return {
      arr:[
        {
          title:'动物园+海洋馆',
          time:'10月1日',
          // imgUrl:'http://tsfile.labifenqi.com/staticFile/public/demo/wx/hyg.jpg',
          path:'/pages/animal/main'
        },
        {
          title:'颐和园+鸟巢+水立方',
          time:'10月2日',
          // imgUrl:'http://tsfile.labifenqi.com/staticFile/public/demo/wx/yhy.jpg'
        },
        {
          title:'恭王府+北海公园+什刹海',
          time:'10月3日',
          // imgUrl:'http://tsfile.labifenqi.com/staticFile/public/demo/wx/gwf.jpg'
        },
        {
          title:'天安门+故宫',
          time:'10月4日',
          // imgUrl:'http://tsfile.labifenqi.com/staticFile/public/demo/wx/tam.jpg'
        },
        {
          title:'长城+十三陵',
          time:'10月5日',
          // imgUrl:'http://tsfile.labifenqi.com/staticFile/public/demo/wx/cc.jpg'
        },
        {
          title:'大鸭梨+电影',
          time:'10月6日',
          // imgUrl:'http://tsfile.labifenqi.com/staticFile/public/demo/wx/dyl.jpg'
        },
        {
          title:'坐飞机回家',
          time:'10月7日',
          // imgUrl:'http://tsfile.labifenqi.com/staticFile/public/demo/wx/fj.jpg'
        }
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
    wx.hideTabBar();
    // this.aaa()
    // console.log('aaa')
  }
}
</script>
<style lang="scss" scoped>
.home-wrap{
  .banner-box{
    height: 100px;
    background: #ececec;
    margin-bottom: 10px;
  }
  .nav-box{
    display: flex;
    dl{
      width: 0;
      flex: 1;
      padding:10px 15px;
      display: flex;
      dt{ 
        width: 40px;
        height: 40px;
        border-radius: 4px;
        background: #ececec;
        margin-right: 10px;
      }
      dd{
        width: 0;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        h6{
          font-size: 14px;
        }
        p{
          color: #999;
          font-size: 12px;
        }
      }
    }
  }
  ul{
    li{
      height: 90px;
      .list-box{
        height: 100%;
      }
      dl{
        height: 100%;
        padding:10px;
        display: flex;
        box-sizing: border-box;
        dt{
          width: 130px;
          overflow: hidden;
          position: relative;
          background: #ececec;
          margin-left: 10px;
        }
        dd{
          width: 0;
          flex: 1;
          padding-left: 15px;
          padding-top:6px;
          padding-bottom: 6px;
          p{
            font-size: 12px;
            color: #999;
          }
        }
      }
    }
  }
}
</style>

