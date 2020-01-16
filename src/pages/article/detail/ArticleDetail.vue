<template>
  <tab-bar title="帖子详情">
    <section class="article-detail-wrap g-border1">
     <header class="head-box">
       <h4>我的保胎之路—接健康胎心胎芽啦!!!撒打发斯蒂芬撒旦法</h4>
      <dl class="g-cen-y">
        <dt class="g-back" style="background-image:url(https://tsfile.labifenqi.com/dm_xcx/user/user.png)"></dt>
        <dd class="user-box">
          <h6>樱桃大丸子</h6>
          <p>试管婴儿-备孕中</p>
        </dd>
        <dd class="btn">关注</dd>
      </dl>
     </header>
     <section class="detail-main">
       <p class="text">先接一下健康得胎心胎芽，通过保胎，第一次与小猪见面，没出息得在医院哭了2遍，不知孕妈能不能懂我！ </p>
       <p class="text">末次月经2.17，排卵3.9号左右。查个血，hcg6.9，医生说。大于5就有可能怀孕。不过值太低，也可能是其他激素引起。结果，牙齿就不敢拔了，因为特别怕胎停，所以每隔2.3天我就要去查一次血，今天本来只是来查血的，瞬间有点想B超，又特别害怕，医生说可以查，应该能看到，我就说好吧，那就查一个。结果，B超的全程紧张到发抖。</p>
       <p class="text"> 当结果出来的那一刻，不知道说什么了。眼泪一哈就飙出来了。</p>
       <image src="https://tsfile.labifenqi.com/dm_xcx/home/detail.png"></image>
       <div class="footer g-fen-cen">
         <p><span>6小时</span><span>2323浏览</span></p>
         <p>举报</p>
       </div>
     </section>
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
<style lang="scss" scoped>
.article-detail-wrap{
  .head-box{
    padding:15px 14px 0;
    background-color: $col-f;
    h4{
      line-height: 30px;
      font-size: 20px;
      color: $col-3;
      font-weight: bold;
    }
    dl{
      height: 70px;
      dt{
        width: 30px;
        height: 30px;
        margin-right: 8.5px;
      }
      .user-box{
        width: 0;
        flex: 1;
        h6{
          font-size: 14px;
          color: $col-1a;
          line-height: 18px;
        }
        p{
          font-size: 11px;
          color: $col-9;
          line-height: 15px;
        }
      }
      .btn{
        height: 25px;
        width: 48px;
        border-radius: 3px;
        background-color: $col-green;
        color: $col-f;
        text-align: center;
        line-height: 25px;
      }
    }
  }
  .detail-main{
    background-color: $col-f;
    padding:0 14px;
    margin-bottom: 5.5px;
    .text{
      font-size: 16px;
      color:$col-3;
      line-height: 26px;
      margin-bottom: 20px;
      word-break:break-all;
    }
    image{
      height: 205px;
      width: 100%;
    }
    .footer{
      padding-top: 5px;
      height: 42px;
      color: $col-9;
      font-size: 12px;
      span{
        margin-right: 11px;
      }
    }
  }
}
</style>
