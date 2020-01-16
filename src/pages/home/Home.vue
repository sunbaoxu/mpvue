<template>
  <tab-bar :async="true" title="多美" isShowBack="1">
    <section class="home-wrap">
      <section class="banner-box">
        <swiper class="swiper" indicator-dots="true" autoplay="true" interval="5000" duration="1000">
          <block v-for="(item, i) in bannerArr" :index="index" :key="i">
            <swiper-item>
              <image :src="item.url" class="slide-image" mode="aspectFill"/>
            </swiper-item>
          </block>
        </swiper>
      </section>
      <section class="nav-box g-cen-y">
        <dl @click="navigateToFn('/pages/books/main')">
          <dt class="g-back baike"></dt>
          <dd>
            <h6>试管百科</h6>
            <p>试管知识，全面科普</p>
          </dd>
        </dl>
        <i class="xian"></i>
        <dl>
          <dt class="g-back huati"></dt>
          <dd>
            <h6>话题广场</h6>
            <p>海量话题，等你来聊</p>
          </dd>
        </dl>
      </section>
      <section class="head-text-box">
        <ul>
          <li v-for="(m,i) in headArr" :key="i">
            <navigator hover-class="none" url="/pages/article/detail/main" class="list-box">
              <dl class="g-dis">
                <dd class="g-text-ove2">{{m.title}}</dd>
                <dt>
                  <image class="g-back" :src="m.imgUrl" ></image>
                </dt>
              </dl>
            </navigator>
            <section class="share-box g-fen-cen-box">
              <div class="left-box g-cen-y">
                <span :class="{'g-cen-y':m.async}">{{m.label}}</span>
                <span>{{m.num}}</span>
                <span>{{m.time}}</span>
              </div>
              <div class="right-box g-cen-y">
                <i class="g-back"></i>
              </div>
            </section>
          </li>
        </ul>
      </section>
    </section>
  </tab-bar>
</template>

<script>
import TabBar from '$common/tab/TabBar'
import {getNotValiSend} from '../../api/index'
export default {
  components:{
    TabBar
  },
  data () {
    return {
      headArr:[
        {
          title:'63岁张晨光近照，两个儿子都是试管婴儿，如今还在拍戏养家',
          path:'/',
          time:'5个小时前',
          num:"1.2k浏览",
          label:'多美生命官方',
          async:true,
          imgUrl:'https://tsfile.labifenqi.com/dm_xcx/home/head1.png'
        },
        {title:'你了解试管婴儿吗？试管前期的促排卵，备孕未怀的妈妈该看看',path:'/',time:'2343-443-34',imgUrl:'https://tsfile.labifenqi.com/dm_xcx/home/head2.png',
          time:'1232-32-32',
          num:"1.5k浏览",
          label:'多美生命官方',
        }
      ],
      bannerArr:[
        {url:'https://tsfile.labifenqi.com/dm_xcx/home/banner.png'},
        {url:'https://tsfile.labifenqi.com/dm_xcx/home/banner1.jpg'},
        {url:'https://tsfile.labifenqi.com/dm_xcx/home/banner2.jpg'},
        {url:'https://tsfile.labifenqi.com/dm_xcx/home/banner3.jpg'}
      ]
    }
  },
  methods: {
    navigateToFn(url){
      wx.navigateTo({url})
    },
    //获取数据
    getNotValiSendFn (){
      getNotValiSend().then((res)=>{
        console.log(res,'返回值')
      })
    }
  },
  mounted (){
    wx.hideTabBar();
  }
}
</script>
<style lang="scss" scoped>
.home-wrap{
  .banner-box{
    background-color: $col-f;
    padding:12px 15px 17px;
    .swiper{
      height: 106px;
      border-radius: 5px;
      overflow: hidden;
    }
    image{
      width: 100%;
      height: 100%;
    }
  }
  .nav-box{
    height: 63px;
    background: $col-f;
    margin-bottom: 1px;
    .xian{
      height: 31px;
      width: 0.5px;
      background-color: $col-dc;
    }
    dl{
      width: 0;
      flex: 1;
      display: flex;
      padding-left: 14px;
      dt{ 
        width: 31.5px;
        height: 31.5px;
        margin-right: 10px;
        &.baike{
          background-image: url('https://tsfile.labifenqi.com/dm_xcx/home/baike.png');
        }
        &.huati{
          background-image: url('https://tsfile.labifenqi.com/dm_xcx/home/huati.png');
        }
      }
      dd{
        width: 0;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        h6{
          font-size: 16px;
          line-height: 20px;
          color: $col-3;
        }
        p{
          color: #999;
          font-size: 12px;
          line-height: 17px;
        }
      }
    }
  }
  .head-text-box{
    ul{
      li{
        padding:14px 14px 10px;
        margin-bottom: 5.5px;
        background: $col-f;
        &:last-child{
          margin-bottom: 0;
        }
        dl{
          height: 100%;
          margin-bottom: 10px;
          dt{
            width: 112px;
            height: 73px;
            margin-left: 15px;
            border-radius: 4px;
            image{
              height: 100%;
              width: 100%;
            }
          }
          dd{
            width: 0;
            flex: 1;
            font-size: 17px;
            line-height: 24px;
            color: $col-1a;
            -webkit-line-clamp: 3;
          }
        }
        .share-box{
          height: 30px;
          &>div{
            height: 100%;
          }
          .left-box{
            line-height: 30px;
            color: $col-9;
            font-size: 12px;
            width: 0;
            flex: 1;
            span{
              margin-right: 15px;
              &.g-cen-y{
                &::before{
                  content: "热";
                  height: 19px;
                  border:1px solid $col-red1;
                  border-radius: 3px;
                  line-height: 19px;
                  width: 25px;
                  text-align: center;
                  color: $col-red1;
                  margin-right: 7.5px;
                }
              }
            }
          }
          .right-box{
            i{
              width: 19px;
              height: 5px;
              background-image: url('https://tsfile.labifenqi.com/dm_xcx/icon/dian.png')
            }
          }
        }
      }
    }
  }
  
}
</style>

