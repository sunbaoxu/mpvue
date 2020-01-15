function formatNumber (n) {
  const str = n.toString()
  return str[1] ? str : `0${str}`
}

export function formatTime (date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  const t1 = [year, month, day].map(formatNumber).join('/')
  const t2 = [hour, minute, second].map(formatNumber).join(':')

  return `${t1} ${t2}`
}

function getFormateDate (res){
  let date1 = res.newDate ? new Date(res.newDate) :new Date(),
      date = res.num ? new Date(date1.getTime() - 24*60*60*1000*res.num) : date1,
      year = date.getFullYear(),
      month = (date.getMonth()+1)<10?'0'+(date.getMonth()+1):(date.getMonth()+1),
      day = date.getDate()<10?'0'+date.getDate():date.getDate(),
      hours = date.getHours()<10?'0'+date.getHours():date.getHours(),
      min = date.getMinutes()<10?'0'+date.getMinutes():date.getMinutes(),
      sec = date.getSeconds()<10?'0'+date.getSeconds():date.getSeconds(),
      symbol=res.symbol || '-';


    if(res.type =='1'){
      return year+symbol+month+symbol+day+' '+hours+':'+min+':'+sec;
    } else if(res.type =='2'){
      return year+symbol+month+symbol+day;
    } else{
      return [year,month,day]
    }
}
export default {
  formatNumber,
  formatTime,
  getFormateDate
}
