
var txapi_base_url = "https://api.tianapi.com";  //天行数据接口域名
var txapi_key  = "";  //请填写你在天行数据www.tianapi.com获得apikey

function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime,
  txapi_base_url: txapi_base_url,
  txapi_key: txapi_key
}
