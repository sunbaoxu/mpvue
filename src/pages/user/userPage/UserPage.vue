<template>
  <tab-bar title="个人主页">
    <section class="user-page-wrap">
      <ul>
        <li class="g-border g-fen-cen">
          <span v-if="userInfo.avatarUrl" class="label icon g-back" :style="{'backgroundImage':'url('+userInfo.avatarUrl+')'}"></span>
          <span class="value on">{{userInfo.nickName}}</span>
        </li>
        <li class="g-border g-fen-cen" @click="typeFn('stage')">
          <span class="label">试管阶段</span>
          <span :class="['value g-cen-y',{'on':obj.stageObj.label}]">{{obj.stageObj.label || '待完善'}}</span>
        </li>
        <li class="g-border g-fen-cen" @click="typeFn('gender')">
          <span class="label">性别</span>
          <span :class="['value g-cen-y',{'on':obj.genderObj.label}]">{{obj.genderObj.label || '待完善'}}</span>
        </li>
        <li class="g-border g-fen-cen" @click="typeFn('birthday')">
          <span class="label">生日</span>
          <span :class="['value g-cen-y',{'on':obj.birthdayObj.label}]">{{obj.birthdayObj.date || '待完善' }}</span>
        </li>
        <li class="g-fen-cen" @click="typeFn('city')">
          <span class="label">所在地区</span>
          <span :class="['value g-cen-y',{'on':obj.cityObj.label}]">{{obj.cityObj.label || '待完善'}}</span>
        </li>
        
      </ul>
      <ul>
        <li class="g-fen-cen">
          <span class="label">手机号</span>
          <span class="value g-cen-y">待完善</span>
          <button open-type="getPhoneNumber" bindgetphonenumber="getPhoneNumber">sdfasd</button>
        </li>
      </ul>
    </section>
    <!-- 试管阶段 -->
    <mp-picker 
      ref="stageId" 
      :pickerValueDefault="indexArr"
      :pickerValueArray="arr"
      @onConfirm="onConfirm" 
    ></mp-picker>
    <!-- 性别 -->
    <mp-picker 
      ref="genderId" 
      :pickerValueDefault="indexArr"
      :pickerValueArray="arr"
      @onConfirm="onConfirm" 
    ></mp-picker>
    <!-- 时间 -->
    <mp-datepicker 
      ref="birthdayId" 
      @onConfirm="onConfirm" 
    ></mp-datepicker>
    <!-- 城市 -->
    <mp-citypicker 
      ref="cityId" :pickerValueDefault="pickerValueDefault" 
      @onConfirm="onConfirm"
    ></mp-citypicker>
  </tab-bar>
</template>

<script>
import TabBar from '$common/tab/TabBar'
import mpActionsheet from 'mpvue-weui/src/actionsheet';
import mpPicker from 'mpvue-weui/src/picker';
import mpDatepicker from 'mpvue-weui/src/date-picker';
import mpCitypicker from 'mpvue-weui/src/city-picker';
import util from '@/utils'
export default {
  components:{
    TabBar,
    mpActionsheet,
    mpPicker,
    mpDatepicker,
    mpCitypicker
  },
  data () {
    return {
      genderArr:[
        {label:"男",value:'0'},
        {label:"女",value:'1'}
      ],
      stageArr :[
        {label:'未进入试管周期',value:"0"},
        {label:'体检建档',value:"1"},
        {label:'试管方案',value:"2"},
        {label:'促排',value:"3"},
        {label:'取卵移植',value:"4"},
        {label:'保胎',value:"5"},
        {label:'试管毕业',value:"6"},
        {label:'其他',value:"7"}
      ],
      arr:[],
      type:'',
      obj:{
        genderObj:{},
        birthdayObj:{},
        stageObj:{},
        cityObj:{}
      },
      indexArr:[],
      userInfo:{}
    }
  },
  methods: {
    typeFn (type){
      if(type !='birthday'){
        this.arr = this[type+'Arr'];
      } 

      this.indexArr = this.obj[type+'Obj'].index || [];

      this.type = type;

      setTimeout(()=>{
        this.$refs[type+'Id'].show();
      },100)

    },
    //确定按钮
    onConfirm(res) {
      this.obj[this.type+'Obj'] = res;

      if(this.type =='birthday'){
        this.obj[this.type+'Obj'].date = util.getFormateDate({
          type:'2',
          newDate:res.value[0]+'-'+res.value[1]+'-'+res.value[2]
        })
      }
      console.log(res,'aaaa');
    },
    //获取手机号
    getPhoneNumber (e) {
      console.log(e.detail.errMsg)
      console.log(e.detail.iv)
      console.log(e.detail.encryptedData)
    }
  },
  mounted (){
    this.userInfo = wx.getStorageSync('dm-user-obj');
    console.log(this.userInfo)
  }
}
</script>
<style lang="scss" scoped>
.user-page-wrap{
  ul{
    background-color: $col-f;
    padding-left: 14.5px;
    margin-bottom: 10.5px;
    li{
      height: 50.5px;
      padding-right: 15px;
      position: relative;
      button{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        opacity: 0;
      }
    }
    .label{
      font-size: 16px;
      color: $col-3;
      &.icon{
        width: 30px;
        height: 30px;
      }
    }
    .value{
      color: $col-green;
      font-size: 16px;
      &.on{
        color: $col-9;
      }
      &::after{
        content: "";
        width: 6px;
        height: 10px;
        background: url('https://tsfile.labifenqi.com/dm_xcx/icon/jiao.png') no-repeat center;
        background-size: cover;
        margin-left: 11px;
      }
    }
  }
}
</style>

