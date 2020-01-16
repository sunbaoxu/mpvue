// const app  = getApp();
// const rjxSession = require('./sign.js');
/**
 * 拼接header
 */ 
// function setHeader (obj) {
//   let token = wx.getStorageSync('kanToken'),
//       rjxObj= rjxSession.setReHeader(obj),
//       header= {
//         "content-type": "application/json;charset=UTF-8"
//       };

//     if(token){
//       header = {
//         'rjx-session' : token
//       }
//     }
//     Object.assign(header,rjxObj);
//     return header;
// }

function fetch(url, params,type,loadingAsync) {
  //有请求类型，显示loading
  if(!loadingAsync){
      wx.showLoading({
        title: '加载中' 
      })
  }


  return new Promise((resolve, reject) => {
    if(type=='post'){
      wx.request({
        url,
        // header : setHeader({
        //   url,
        //   method : 'POST',
        //   data
        // }),
        data:params,
        method: 'POST',
        success (res) {
          console.log('请求正常')
          wx.hideLoading();
          resolve(res);
        },
        fail: function (err) {
          console.log('请求异常')
          wx.hideLoading();
          reject(err);
        },
      })
    } else if(type == 'get'){
      wx.request({
        url,
        // header : setHeader({
        //   url,
        //   method : 'POST',
        //   data
        // }),
        data:params,
        method: 'GET',
        success (res) {
          console.log('请求正常')
          wx.hideLoading();
          resolve(res.data);
        },
        fail: function (err) {
          console.log('请求异常')
          wx.hideLoading();
          reject(err);
        },
      })
    }else if(type == 'date'){
      // axios.post(url,params,config)
      // .then(response => {
      //   resolve(response.data);
      // }, err => {
      //   reject(err);
      // })
      // .catch((error) => {
      //   reject(error)
      // })
    }else {
      // resolve(url)
      // resolve(axios.defaults.baseURL + url);
    }  
  })
}

export {fetch}
