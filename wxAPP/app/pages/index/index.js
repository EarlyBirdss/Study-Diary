Page({
  data: {
    songsheets:[] 
  },
  onLoad: function () {
    this.setData({
      songsheets: (wx.getStorageSync('songsheets') || [])
    })
  }
})