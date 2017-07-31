// pages/songsheet/songsheet.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    songsheet: null,
    songs: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var id = Number(options.id);
    console.log(id);
    this.getSongsheet(id);
  },

  getSongsheet: function (songsheetid) {
    var songsheets = wx.getStorageSync("songsheets") || [],
       res = null,
       i = 0, 
       len = songsheets.length;
       
    for(i; i < len; i++) {
      if(songsheets[i].id === songsheetid) {
        res = songsheets[i];
        break;
      }
    }
    
    this.setData({
      songsheet: res
    });

    if(res !== null) {
      this.getSongs(res);
    }
    return res;
  },

  getSongs: function(songsheet) {
    var allsongs = wx.getStorageSync("songs") || [],
      songids = songsheet.songs,
      res = [],
      i = 0,
      len = allsongs.length;
      
    for(i; i < len; i++) {
      if(songids.indexOf(allsongs[i].id) >  -1) {
        res.push(allsongs[i]);
      }
    }
    
    this.setData({
      songs: res
    });
    return res;
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})