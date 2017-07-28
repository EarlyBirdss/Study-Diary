//app.js
App({
  onLaunch: function() {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    this.setTestSongsheet();
  },

  setTestSongsheet: function() {
    // 配置一些调试用的歌单信息
    var songsheets = [{
      id: 1,
      userName: "猫头罐与六便士",
      userId: 1,
      name: "姑娘，你的酒铺还缺人吗",
      image: "/images/songsheets/1.jpg"
    },{
      id: 2,
      userName: "Areal肥阳",
      userId: 2,
      name: "日系男声||爽朗是清风，捎走了微笑",
      image: "/images/songsheets/2.jpg"
    }];
    
    wx.setStorageSync('songsheets', songsheets);
  },

  getUserInfo: function(cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.getUserInfo({
        withCredentials: false,
        success: function(res) {
          that.globalData.userInfo = res.userInfo
          typeof cb == "function" && cb(that.globalData.userInfo)
        }
      })
    }
  },

  globalData: {
    userInfo: null
  }
})
