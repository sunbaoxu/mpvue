
// import globalFn from '@/assets/javascripts/globalFn'
const CryptoJS = require('crypto-js');  //引用CryptoJS加密库 使用前项目要先下载 npm install crypto-js

// 账号密码加密部分

const key = CryptoJS.enc.Utf8.parse("d#so6Gz5BvM^yijl");  //密钥后端提供
const iv = CryptoJS.enc.Utf8.parse('d#so6Gz5BvM^yijl');   //密钥偏移量后端提供

//AES加密方法 账号密码使用
function Encrypt(word) {
  let srcs = CryptoJS.enc.Utf8.parse(word);
  let encrypted = CryptoJS.AES.encrypt(srcs, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.ZeroPadding });
  return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Hex.parse(encrypted.ciphertext.toString()));
}

// 签名部分

//秘钥混合  后端提供秘钥按照一定规则打乱混合（规则后端提供）
function mixKey() {
  let key = 'O4NPUu8yaNIpSGEsR6zGUwmbz6Cr4Iks8efhaF'
  for(let i=1;i<6;i++){
    key = key.substring(i)+key.substring(0,i)
  }
  for(let i=1;i<9;i++){
    key = key.substring(0,key.length-i)+key.substring(key.length-i)
  }
  key = key.substring(0,key.length-5)
  return key
}

//请求参数排序ToString  请求参数排序并且按照拍好的顺序取 key1value1key2value2。。。 排列字符串
function sortObjToString(objParm) {
  let arr = [];
  for (let i in objParm) {
    arr.push(i);
  };
  arr.sort()
  /*arr.sort(function (a,b) {
    return a.localeCompare(b);
  });*/
  let len = arr.length,
    obj = {};
  for (let i = 0; i < len; i++) {
    obj[arr[i]] = objParm[arr[i]];
  }
  let str = '';
  for (let i in obj) {
    if((typeof(obj[i]) === 'string') || (typeof(obj[i]) === 'number') || (typeof(obj[i]) === 'boolean')){
      if ((obj[i].toString().length <= 500) && obj[i].toString().length > 0) {
        str+=i;
        str+=obj[i];
      }
    }
  }

  return str;
}
 


module.exports = {
  Encrypt,
  //设置请求头
  setReHeader (config) {
    let lbTstamp = new Date().getTime()  //时间戳
    let lbrnum = Math.random().toString().slice(2,8) //六位随机数
    let sortParam = null ;  //调用上面的函数处理排序请求参数
    let headers = {};
    let token = wx.getStorageSync('kanToken');

    if (config.method === 'GET') {   //如果为get请求支取请求url uri部分
      sortParam = config.url;
      console.log('get请求',config.data)
        sortParam = sortParam+'?'
        for (let key in config.data) {
          sortParam = sortParam + key + '=' + config.data[key] + '&'
        }
        sortParam = sortParam.slice(0,-1);
    } else {
      sortParam =sortObjToString(config.data)
    }
  
    if(token){  //有token正常拼接 无token不拼
      headers['rjx-session']= token;
      let lbSign = sortParam+"lbtoken"+token+"lbtstamp"+lbTstamp+"lbrnum"+lbrnum+mixKey();
      lbSign = CryptoJS.SHA256(lbSign).toString()
      headers['rjx-sign']= lbSign;
    }else {
      let lbSign = sortParam+"lbtoken"+"lbtstamp"+lbTstamp+"lbrnum"+lbrnum+mixKey();
      lbSign = CryptoJS.SHA256(lbSign).toString()
      headers['rjx-sign']= lbSign;
    }
    headers['rjx-tstamp']= lbTstamp;
    headers['rjx-rnum']= lbrnum;

    return headers;
  }
}




