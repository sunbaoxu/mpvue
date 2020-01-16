//路径根据自己项目路径修改
import {fetch} from './config'
import {
  host
} from './baseUrl.js';

function aa (){
  console.log(fetch,'aaaa')
  console.log(host,fetch(`${host}repaymentApply`, 'params', 'post'),'aaaaaaaaaa')
}

//根据手机/邮箱密码登录
function getNotValiSend(params){
  // console.log(fetch,'fads')
  return fetch(`${host}sys/userInfo`,params,'get')
}


export {
  getNotValiSend
};


