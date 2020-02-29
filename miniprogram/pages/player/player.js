// miniprogram/pages/player/player.js
// properties(Read only)(duration,currentTime,pauletsed,buffered)
// properties(src(m4a, aac, mp3, wav),startTime,title,epname,singer,coverImgUrl,webUrl,protocol)
const backAudioManager = wx.getBackgroundAudioManager() //全局音频管理器
let currentPlayIndex = -1 //当前播放索引
Page({

  /**
   * 页面的初始数据
   */
  data: {
    picUrl: '', //背景图片
    isplaying: false, //是否处于播放状态
    isShowLyric: false, //是否显示歌词
    lyric: '' //歌词
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('options', options)
    this.setPlayMusic(options.index)
    this.loadDetailInfoByMusicId(options.musicId)
  },

  /**
   * @description 切换歌词显示状态
   */
  toggleShowLyric () {
    this.setData({
      isShowLyric: !this.data.isShowLyric
    })
  },

  /**
   * 
   * @param {number} musicId 音乐Id
   */
  async loadDetailInfoByMusicId(musicId) {
    wx.showLoading({
      title: '加载中'
    })
    const res = await wx.cloud.callFunction({
      name: "music",
      data: {
        musicId,
        $url: 'musicDetail'
      }
    })
    wx.hideLoading()

    const al = res.result.songs[0].al
    const ar = res.result.songs[0].ar
    this.setData({
      picUrl: al.picUrl
    })
    console.log('loadDetailInfoByMusicId', res)
    this.loadAndSetMusicInfo(musicId,al,ar)
    this.loadLyric(musicId)
  },

  /**
   * 
   * @param {number} index 当前歌单播放索引
   */
  setPlayMusic(index) {
    currentPlayIndex = index
  },

  timeUpdate (event) {
    this.selectComponent('.lyric').update(event.detail.currentTime)
  },

  /**
   * 
   * @param {number} musicId 音乐Id
   * @description 获取加载歌词 
   */
  async loadLyric (musicId) {
    try {
      const res = await wx.cloud.callFunction({
        name: 'music',
        data: {
          $url: 'getMusicLyric',
          musicId
        }
      })
      if(res.result.code == 200) {
        this.setData({
          lyric: res.result.lrc.lyric
        })
      }
      console.log('loadLyric',this.data.lyric)
    } catch (error) {
      
    }
  },

  /**
   * @param {number} musicId 音乐Id
   * @param {object} al 音乐相关资料
   * @param {object} al 作者相关资料
   * @description 加载并且设置音乐信息
   */
  async loadAndSetMusicInfo(musicId,al, ar) {
    try {
      const { result: { data: [{ url }] } } = await wx.cloud.callFunction({
        name: 'music',
        data: {
          $url: 'getMusicUrl',
          musicId
        }
      })
      console.log('loadAndSetMusicUrl2', url)
      //设置音乐地址
      backAudioManager.src = url
      backAudioManager.title = al.name
      backAudioManager.coverImgUrl = al.picUrl
      backAudioManager.singer = ar[0].name

      this.setData({
        isplaying: true //加载完成设置成播放状态
      })
    } catch (error) {
      console.error(error)
    }
  },
  
  /**
   * @description 播放上一首
   */
  onPrev () {
    currentPlayIndex--
    if(currentPlayIndex < 0) {
      //已经是第一手的情况，返回最后一首
      const musicList = this.getPlayMusicFromStorage()
      currentPlayIndex = musicList.length - 1
    }
    this.loadDetailInfoByMusicId(this.getPlayMusicIdByIndex(currentPlayIndex))
  },

  /**
   * @description 播放下一首
   */
  onNext () {
    currentPlayIndex++
    const musicList = this.getPlayMusicFromStorage()
    if(currentPlayIndex == musicList.length) {
      //如果是第一首，返回第一首
      currentPlayIndex = 0
    }
    console.log('currentPlayIndex',currentPlayIndex)
    this.loadDetailInfoByMusicId(this.getPlayMusicIdByIndex(currentPlayIndex))
    console.log(currentPlayIndex)
  },

  /**
   * @description 获取播放的歌单列表
   */
  getPlayMusicFromStorage() {
   return wx.getStorageSync('musicList')
  },
  
  /**
   * 
   * @param {number} index 当前播放的索引
   */
  getPlayMusicIdByIndex(index) {
    const musicList = this.getPlayMusicFromStorage()
    console.log('musicList',index,musicList[0])
    if(musicList.length) {
      return musicList[index].id
    }
  },

  onPlayState () {
    this.setData({
      isplaying: true
    })
  },

  /**
   * @description 切换为暂停状态
   */
  onPauseState () {
    this.setData({
      isplaying: false
    })
  },

  /**
   * @description 切换播放状态
   */
  togglePlayState () {
    this.data.isplaying ? backAudioManager.pause() : backAudioManager.play()  
    this.setData({
      isplaying: !this.data.isplaying
    })
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