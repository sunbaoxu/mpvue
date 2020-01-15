<template>
  <tab-bar :async="true">
    <section class="home-wrap">
     圈子
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
    // console.log(this.arr[0].api+this.url)
  }
}
</script>

