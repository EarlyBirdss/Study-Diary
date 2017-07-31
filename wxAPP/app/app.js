//app.js
App({
  onLaunch: function() {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    this.setTestSongsheet();
    this.setTestSongs();
  },

  setTestSongsheet: function() {
    // 配置一些调试用的歌单信息
    var songsheets = [{
      id: 1,
      userName: "猫头罐与六便士",
      userId: 1,
      name: "姑娘，你的酒铺还缺人吗",
      image: "/images/songsheets/1.jpg",
      songs: [1,2]
    },{
      id: 2,
      userName: "Areal肥阳",
      userId: 2,
      name: "日系男声||爽朗是清风，捎走了微笑",
      image: "/images/songsheets/2.jpg",
      songs:[1,2]
    }];
    
    wx.setStorageSync('songsheets', songsheets);
  },

  setTestSongs: function() {
    var songs = [{
      id: 1,
      name: "少年熬至老",
      songer: "少恭/情桑",
      url: "songs/1.mp3"
    }, {
      id: 2,
      name: "爱我就跟我走",
      songer: "王鹤铮",
      url:"songs/2.mp3"
    }];

    wx.setStorageSync('songs', songs);
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
