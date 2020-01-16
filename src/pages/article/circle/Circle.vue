<template>
  <tab-bar title="圈子" :async="true" isShowBack="1">
    <section class="circle-wrap">
      <section class="circle-main">
        <ul>
          <li 
            class="list-box" 
            v-for="(m,i) in cirArr"
            :key="i"
          >
            <dl class="g-cen-y">
              <dt class="g-back" :style="'background-image:url('+m.headUrl+')'"></dt>
              <dd class="title-box">
                <h6>{{m.name}}</h6>
                <p>{{m.type}}</p>
              </dd>
              <dd class="dian g-cen-y">
                <i class="g-back"></i>
              </dd>
            </dl>
            <div class="content-box">
              <h6 v-if="m.title">{{m.title}}</h6>
              <p>{{m.content}}</p>
              <ol class="img-box">
                <li v-for="(n,ind) in m.imgArr" :key="ind" class="g-back" :style="'background-image:url('+n+')'"></li>
              </ol>
            </div>
          </li>
        </ul>
      </section>
    </section>
  </tab-bar>
</template>

<script>
import TabBar from '$common/tab/TabBar'
export default {
  data () {
    return {
      cirArr:[
        {
          name:'宝贝快来',
          type:'试管婴儿-备孕中',
          headUrl:'https://tsfile.labifenqi.com/dm_xcx/user/user2.png',
          title:'一般情况下对排卵有障碍的女性主要用诱导排卵，对于正常排卵的女性，则用控制性卵巢刺激，对使用促排卵药物的时间上没有限制。如果一直...',
          imgArr:[ 'https://tsfile.labifenqi.com/dm_xcx/home/cr1.png']
        },
        {
          name:'宝贝快来',
          type:'试管婴儿-备孕中',
          headUrl:'https://tsfile.labifenqi.com/dm_xcx/user/user2.png',
          title:'这已经是第五次移植了、终于好孕、大龄妈妈真的是太不容易了',
          content:'先接一下健康得胎心胎芽，通过保胎，第一次与小猪仔见面，没出息得在医院哭了2遍，不知孕妈能不能懂...',
          imgArr:[ 'https://tsfile.labifenqi.com/dm_xcx/home/cr1.png']
        },
        {
          name:'宝贝快来',
          type:'试管婴儿-备孕中',
          headUrl:'https://tsfile.labifenqi.com/dm_xcx/user/user2.png',
          title:'这已经是第五次移植了、终于好孕、大龄妈妈真的是太不容易了',
          imgArr:[ 'https://tsfile.labifenqi.com/dm_xcx/home/cr1.png']
        }
      ]
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
<style lang="scss" scoped>
.circle-wrap{
  .circle-main{
    .list-box{
      background-color: $col-f;
      padding:4px 15px 15px;
      margin-bottom: 5px;
      dl{
        height: 46px;
        dt{
          width: 30px;
          height: 30px;
          margin-right: 7.5px;
        }
        .title-box{
          width: 0;
          flex: 1;
          h6{
            font-size: 14px;
            color: $col-1a;
            line-height: 18px;
          }
          p{
            font-size: 11px;
            line-height: 15px;
            color: $col-9;
          }
        }
        .dian{
          height: 100%;
          i{
            width: 19px;
            height: 5px;
            background-image: url('https://tsfile.labifenqi.com/dm_xcx/icon/dian.png')
          }
        }
      }
      .content-box{
        h6{
          font-size: 15px;
          color: $col-1a;
          line-height: 22px;
        }
        p{
          font-size: 14px;
          line-height: 23px;
          color: $col-6;
        }
        ol{
          padding-top: 8px;
          li{
            width: 112px;
            height: 112px;
          }
        }
      }
    }
  }
}
</style>

