//index.js
Page({
  data:{
    usersList: [{ name: "天行机器人", src:"https://www.tianapi.com/static/img/getheadimg.jpg",time:"12:00"}]
  },
  chat:function(){
      wx.navigateTo({url:"../chat/chat"})
  }
})
