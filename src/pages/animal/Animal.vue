<template>
  <section class="animal-wrap">
    <ul>
      <li v-for="(m,i) in arr" :key="i">
        <image @click="previewImage(m,i)" :src="m"></image>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data () {
    return {
      arr:[
        'http://tsfile.labifenqi.com/staticFile/public/demo/wx/animal/1.png',
        'http://tsfile.labifenqi.com/staticFile/public/demo/wx/animal/2.jpg',
      ]
    }
  },
  methods: {
    previewImage (current){
      wx.previewImage({
        current , // 当前显示图片的http链接
        urls: this.arr// 需要预览的图片http链接列表
      })
    }
  },
  mounted (){
    wx.setNavigationBarTitle({
      title: '动物园+海洋馆'
    })
  }
}
</script>
<style lang="scss" scoped>
.animal-wrap{
  ul{
    li{
      width: 50%;

      float: left;
      image{
        display: block;
        width: 100%;
      }
    }
  }
}
</style>

