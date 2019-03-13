var util = require('../../utils/util.js')
Page({
  data:{
    message:[],
    inputMsg:"",
    scrollTop:0
  },
  onLoad:function(options){
    var message = wx.getStorageSync('message');
    var top = message.length * 100;
    this.setData({
      message:message || [],
      scrollTop:top
    })
    
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onUnload:function(){
    wx.setStorageSync('message',this.data.message);
  },
  inputMsg:function(e){
   this.setData({
     inputMsg:e.detail.value
   })
  },
  sendMessage:function(e){
    this.setData({
     inputMsg:e.detail.value.input
   })
    var that = this;
    if(this.data.inputMsg != ""){
      var msg = { type: 0, src:"https://user.tianapi.com/weixin/debug/images/touxiang.jpg",content:this.data.inputMsg};
      //发送信息
      this.setMessage(msg);
      //回复
      wx.request({
        url: util.TXAPI_BASE_URL + "/txapi/robot/",
        data: {
          key:util.TXAPI_KEY,
          question:msg.content
          },
        success:function(res){
          if (res.data.code == 200 && res.data.datatype == 'text'){
            var reply = { type: 1, src: "https://user.tianapi.com/static/img/getheadimg.jpg", content: res.data.newslist[0].reply};
          } else {
            var reply = { type: 1, src: "https://user.tianapi.com/static/img/getheadimg.jpg", content: res.data.msg};           
          }
          that.setMessage(reply);
          that.setData({
            scrollTop:that.data.scrollTop+300
          })
        }
      })
    }
  },
  setMessage:function(msg){
    var msgList = this.data.message;
    msgList.push(msg);
    this.setData({
      message:msgList,
      inputMsg:"",
    })
  }
})
