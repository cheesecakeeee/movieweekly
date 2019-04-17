// pages/weeklycard/weeklycard.js
Page({

  /**
   * Page initial data
   */
  data: {
    weeklyMovieList: [{
        name: '爱不可及',
      comment: '爱不可及爱不可及爱不可及爱不可及爱不可及爱不可及爱不可及',
        imagePath: '/images/jf.png',
        isHighlyRecommonded: true,
      id: 260048
      },
      {
        name: '权利的游戏',
        comment: '权利的游戏权利的游戏权利的游戏权利的游戏',
        imagePath: '/images/movieImg1.png',
        isHighlyRecommonded: true,
        id: 111754
      },
      {
        name: '毒液：致命守护者',
        comment: '毒液：致命守护者毒液：致命守护者毒液：致命守护者',
        imagePath: '/images/moiveImg2.png',
        isHighlyRecommonded: true,
        id: 103937
      }
    ],
    currentIndex: 0
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function(options) {
    this.setData({
      currentIndex: this.data.weeklyMovieList.length - 1
    })
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
    
  },

  f0: function(event) {
    this.setData({
      currentIndex: this.data.weeklyMovieList.length - 1
    })
  },

  f1: function(event) {
    var movieId = event.currentTarget.dataset.movieId
    console.log(event.currentTarget)
    wx.navigateTo({
      url: '../moviedetails/moviedetails?id=' + movieId
    })
  }
})