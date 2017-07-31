Page({
  data: {
    songsheets:[] 
  },
  linkToSongSheet: function(event) {
    var id = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../songsheet/songsheet?id=' + id,
    });
  },
  onLoad: function () {
    this.setData({
      songsheets: (wx.getStorageSync('songsheets') || [])
    })
  }
})