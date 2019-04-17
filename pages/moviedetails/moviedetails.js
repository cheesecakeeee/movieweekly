// pages/moviedetails/moviedetails.js
Page({

  /**
   * Page initial data
   */
  data: {

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function(options) {
    console.log(options.id)
    this.setData({
      mid: options.id
    })
    var that = this
    wx.request({
      url: 'https://ticket-api-m.mtime.cn/movie/detail.api?locationId=290&movieId=' + options.id,
      success: function(res) {
        console.log(res.data.data.basic)
        if (res.statusCode === 200) {
          that.setData({
            movie: res.data.data.basic
          })
          wx.setNavigationBarTitle({
            title: res.data.data.basic.name + ' 电影详情'
          })
          wx.hideNavigationBarLoading()
        }
      }
    })
    wx.showNavigationBarLoading()
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function() {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function() {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function() {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function() {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function() {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function() {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function() {
    return {
      title: '向你推荐' + this.data.movie.name
    }
  },


})