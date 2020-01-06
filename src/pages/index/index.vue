<template>
  <section class="home-wrap">
    <ul>
      <li v-for="(m,i) in arr" :key="i" class="g-border">
        <navigator :url="m.path" class="list-box">
          <dl class="g-dis">
            <dt>
              <image class="g-back" :src="m.imgUrl" ></image>
            </dt>
            <dd class="g-col-fen">
              <h6>{{m.title}}</h6>
              <p>{{m.time}}</p>
            </dd>
          </dl>
        </navigator>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
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
    this.aaa()
    // console.log('aaa')
  }
}
</script>
<style lang="scss" scoped>
.home-wrap{
  ul{
    li{
      height: 90px;
      .list-box{
        height: 100%;
      }
      dl{
        height: 100%;
        dt{
          width: 130px;
          height: 100%;
          overflow: hidden;
          position: relative;
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

