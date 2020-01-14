<template>
  <tab-bar title="个人主页">
    <section class="user-page-wrap">
      <ul>
        <li>
          <span></span>
          <span></span>
        </li>
      </ul>
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

