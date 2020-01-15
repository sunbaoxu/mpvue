<template>
  <tab-bar :async="true" title="消息" isShowBack="1">
    <section class="home-wrap">
     xioaxi
    </section>
  </tab-bar>
</template>

<script>
import TabBar from '$common/tab/TabBar'
export default {
  data () {
    return {
    }
  },
  components:{
    TabBar
  },
  methods: {
 
  },
  mounted (){
    wx.hideTabBar();
    // 
    // console.log(this.arr[0].api+this.url)
  }
}
</script>

