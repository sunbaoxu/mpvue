<template>
  <section class="home-wrap">
    asdf
    <!-- <web-view  src="https://sunbaoxu.github.io/vipvideo/#/"></web-view>  -->
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
    // console.log(this.arr[0].api+this.url)
  }
}
</script>

