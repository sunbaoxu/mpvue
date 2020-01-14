<script>
// import './custom-tab-bar'
export default {
  created () {
    wx.hideTabBar();
    // 调用API从本地缓存中获取数据
    /*
     * 平台 api 差异的处理方式:  api 方法统一挂载到 mpvue 名称空间, 平台判断通过 mpvuePlatform 特征字符串
     * 微信：mpvue === wx, mpvuePlatform === 'wx'
     * 头条：mpvue === tt, mpvuePlatform === 'tt'
     * 百度：mpvue === swan, mpvuePlatform === 'swan'
     * 支付宝(蚂蚁)：mpvue === my, mpvuePlatform === 'my'
     */

    // let logs
    // if (mpvuePlatform === 'my') {
    //   logs = mpvue.getStorageSync({key: 'logs'}).data || []
    //   logs.unshift(Date.now())
    //   mpvue.setStorageSync({
    //     key: 'logs',
    //     data: logs
    //   })
    // } else {
    //   logs = mpvue.getStorageSync('logs') || []
    //   logs.unshift(Date.now())
    //   mpvue.setStorageSync('logs', logs)
    // }

    // 主要是为了获取code
    // wx.login({
    //   success (res) {
    //     if (res.code) {
    //       // 封装的缓存方法
    //       console.log('登录成功')
    //       // that.$wxhttp.cache('code', res.code)
    //     } else {
    //       console.log('登录失败！' + res.errMsg)
    //     }
    //   }
    // })
    // wx.openSetting({
    //   success (res) {
    //     console.log(res,'aaa')
    //     if (res.authSetting['scope.userInfo']) {
    //       // wx.getUserInfo({
    //       //   success: function (res) {
    //       //   // 如果用户已经授权则会调用该方法
    //       //   console.log('用户已授权')
    //       //     // that.$wxhttp.authSuccessReq(res)
    //       //   }
    //       // })
    //     } else {
    //       console.error('用户没有授权')
    //     }
    //   }
    // })
    // 获取用户的当前设置。本项目里判断用户是否已授权登录
    wx.getSetting({
      success (res) {
        console.log(res,'aaa')
        if (res.authSetting['scope.userInfo']) {
          console.log('用户已授权，去首页')
          // wx.switchTab({
          //   url: '/pages/home/main'
          // })
        } else {
          console.error('用户没有授权')
          wx.reLaunch({
            url: '/pages/login/main'
          })
        }
      }
    })

    // 从后台获取openid等参数信息
    // function authSuccessReq (data) {
    //   return new Promise((resolve, reject) => {
    //     if (!wx.getStorageSync('userInfo').openid) {
    //       wx.request({
    //         url:'',
    //         method: 'POST',
    //         data: {
    //           encryptedData: data.encryptedData,
    //           code: wx.getStorageSync('code'),
    //           iv: data.iv,
    //         },
    //         success: function (info) {
    //           let userInfo = data.userInfo
    //           resolve(userInfo)
    //         },
    //         fail (res) {
    //           reject(res)
    //         }
    //       })
    //     } else {
    //       resolve(wx.getStorageSync('userInfo'))
    //     }
    //   })
    // }


  }
}
</script>

<style>
/* .container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 200rpx 0;
  box-sizing: border-box;
} */
/* this rule will be remove */
/* * {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
html,body{
  background: #F6F7F8;
} */
html,body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,form,fieldset,input,textarea,p,blockquote,th,td {
	margin:0;
	padding:0;
}
a{
	color: #333;
}
body{
	font-family:"PingFang SC",PingFang-SC,"Microsoft YaHei","微软雅黑",Arial,sans-serif;
  font-size: 14px;
	color:$col-3;
	background: $col-f4;
}
*{   
	-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
	-webkit-tap-highlight-color:transparent;
}
*,*:after,*:before{
	box-sizing:border-box;
	margin: 0;
	padding:0;
}
table {
	border-collapse:collapse;
	border-spacing:0;
}
fieldset,img {
	border:0;
}
address,caption,cite,code,dfn,th,var {
	font-style:normal;
	font-weight:normal;
}
ol,ul {
	list-style:none;
}
caption,th {
	text-align:left;
}
h1,h2,h3,h4,h5,h6 {
	font-size:14px;
	font-weight:normal;
}
abbr,acronym { border:0;
}
a{
	text-decoration:none;
}

/* 解决兼容而加的样式 */
a, img {
    -webkit-touch-callout: none; /*禁止长按链接与图片弹出菜单*/}
a,button,input{-webkit-tap-highlight-color:rgba(255,0,0,0);}

button,input,optgroup,select,textarea {
	outline:none;
	background: transparent;
	border:0;
    /*-webkit-appearance:none; /*去掉webkit默认的表单样式*/}

a,button,input,optgroup,select,textarea {
	-webkit-tap-highlight-color:rgba(0,0,0,0); /*去掉a、input和button点击时的蓝色外边框和灰色半透明背景*/
}
html,body{
  background: #F6F7F8;
}
</style>
