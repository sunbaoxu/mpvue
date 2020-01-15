<template>
  <tab-bar :async="true" title="多美" isShowBack="2">
    <section class="home-wrap">
     搜索
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

