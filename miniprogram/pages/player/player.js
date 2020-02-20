// miniprogram/pages/player/player.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    picUrl: '' //背景图片
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('options', options)
    this.loadDetailInfoByMusicId(options.musicId)
  },

  async loadDetailInfoByMusicId (musicId) {
    const res = await wx.cloud.callFunction({
      name: "music",
      data: {
        musicId,
        $url: 'musicDetail'
      }
    })

    const al = res.result.songs[0].al
    this.setData({
      picUrl: al.picUrl
    })
    console.log('loadDetailInfoByMusicId',res)
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