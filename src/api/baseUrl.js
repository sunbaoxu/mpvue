// module.exports = {
//   GATEWAYSERVER    : 'gateway2server/',
//   //微信
//   GATEWAYVX        : `gateway2server/vx/`,
//   //我的资料
//   //微信---订单
//   VXORDER          : 'gateway2server/vx/order/',
//   //新的--存管
//   USERBACKCARDLLER : 'gateway2server/userBackCardController/',
//   //存管--支付
//   DEPOSITPAYNLLER  : 'gateway2server/depositPayController/',
//   //订单
//   NEWGATEWAYORDER  : 'gateway/orderController/',
//   //支付
//   NEWGATEWAYPAY    : 'gateway/payController/',
//   //contract
//   NEWGATEWAYNLLER  : 'gateway/contractController/',
//   APIPATH : `https://${process.env.API_PATH}.labifenqi.com/`
// }

//mock 
// const str = 'mock';
/**
 * 研发
 */
// const str = '研发';
/**
 * 测试
 */
// const str = '测试';
/**
 * 生产
 */
// const str = '生产';

// let obj = {},
//     base = {};

// if(str == 'mock'){
//   obj = {
//     imgUrl      : 'https://tsfile.labifenqi.com/staticFile/public/card/',
//     apiUrl      : 'https://www.easy-mock.com/mock/5c2d8ec9bc52c5436b856143/kk/'
//   }
// } else if(str == '研发'){
//   obj = {
//     imgUrl      : 'https://tsfile.labifenqi.com/staticFile/public/card/',
//     apiUrl      : 'https://box.labifenqi.com/'
//   }
// } else if(str == '测试'){
//   obj = {
//     imgUrl      : 'https://tsfile.labifenqi.com/staticFile/public/card/',
//     apiUrl      : 'https://boxtest.labifenqi.com/'
//   }
// } else if(str == '生产'){

// } 


// base = {
//   CLC      : `${obj.apiUrl}uloginc/clc/`,
//   CLCWE    : `${obj.apiUrl}uloginc/clc/wechat/`,
//   KKUSER   : `${obj.apiUrl}kkcapi/user/`
// }

// Object.assign(obj, base);

// let host = ' https://easy-mock.com/mock/5e1ec66fe1c2cf1d346e0c5a/dm';
 let    host ='https://txuedai.labifenqi.com/jyfq-mapi/'

module.exports = {
  host
  
};
