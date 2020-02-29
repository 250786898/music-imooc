// components/music-progress/index.js
// properties(Read only)(duration,currentTime,paused,buffered)
// properties(src(m4a, aac, mp3, wav),startTime,title,epname,singer,coverImgUrl,webUrl,protocol)
const backAudioManager = wx.getBackgroundAudioManager()  
let currentPlayTime = -1 //当前音乐播放处于的秒数
let movalieWidth = 0 //进度条可移动总宽度
let movalieXDistance = 0 //拖拽的X位置
let movalieLock = false //拖拽音乐锁： 防止推拽过程同时被监听进度修改，造成抖动感觉
Component({
  /**
   * 组件的属性列表
   */
  properties: {
  },

  /**
   * 组件的初始数据
   */
  data: {
    time: { //音乐播放时间
      start: '00:00', //开始播放时间
      end: '00:00'  //结束播放得时间
    },
    musicProgress: 0 ,//当前音乐进度:百分比0~100
    movableDistance: 0 //当前移动view的位置
  },

  lifetimes: {
    ready() {
      // this.setMusicTime()
      this._setMovableWidth()
      this._bindBGMEvent()
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * @description 设置移动设备宽度
     */
    _setMovableWidth () {
        const query = wx.createSelectorQuery().in(this)
        query.select('.movable-area').boundingClientRect()
        query.select('.movable-view').boundingClientRect()
        query.exec((res) =>{
         console.log('_setMovableWidth',res)
         if(res) {
          let movableAreaWidth = res[0].width
          let movableViewWidth = res[1].width
          movalieWidth = movableAreaWidth - movableViewWidth 
         }     
        })
     

    },

    /**
     * @description 绑定背景音频管理器时间
     */
    _bindBGMEvent() {
      //监听背景音频进入可播放状态事件。 但不保证后面可以流畅播放
      backAudioManager.onCanplay(() =>{
        console.log('onCanplay')
      })

      //监听音频加载中事件。当音频因为数据不足，需要停下来加载时会触发
      backAudioManager.onWaiting(() =>{
        console.log('onWaiting')
      })

      //监听背景音频播放错误事件
      backAudioManager.onError(() =>{
        console.log('onError')
      })

      //监听背景音频播放事件
      backAudioManager.onPlay(() => {
        console.log('onPlay')
        this.triggerEvent('onPlayState')
        this.setMusicTime()
      })

      //监听背景音频暂停事件
      backAudioManager.onPause(() =>{
        this.triggerEvent('onPauseState')
        console.log('onPause1')
      })

      //监听背景音频开始跳转操作事件
      backAudioManager.onSeeking(() =>{
        console.log('onSeeking')
      })

      //监听背景音频完成跳转操作事件
      backAudioManager.onSeeked(() =>{
        console.log('onSeeked')
      })

      // 监听背景音频自然播放结束事件
      backAudioManager.onEnded(() =>{
        console.log('onEnded')
        //结束之后自动播放下一首歌曲
        this.triggerEvent('onMusicEnd')
      })

      // 监听背景音频停止事件
      backAudioManager.onStop(() =>{
        console.log('onStop')
      })

      // 监听背景音频播放进度更新事件，只有小程序在前台时会回调。
      backAudioManager.onTimeUpdate(() =>{
        this._updateCurrentTimeAndProgress()
      })

      // 监听用户在系统音乐播放面板点击下一曲事件（仅iOS）
      backAudioManager.onNext(() =>{
        console.log('onNext')
      })

      //监听用户在系统音乐播放面板点击上一曲事件（仅iOS）
      backAudioManager.onPrev(() =>{
        console.log('onPrev')
      })
    },

    changeMovaleView (e) {
      // console.log('changeMovaleView',e)
      if(e.detail.source == 'touch') { //source 表示产生移动的原因
        movalieLock = true //移动开始先上锁   
        movalieXDistance = e.detail.x //当前拖拽的位置
      }
    
      
    },

    movalieMoveEnd () {
      //手机拖拽移动结束赋值
      
      let duration = backAudioManager.duration
      const movaliePercent =  movalieXDistance / movalieWidth 
      let seekSecond = movaliePercent * duration //跳转到指定位置秒数 = 当前处于的（X值 / 总移动距离） * 总时长
      const musicProgress = movaliePercent * 100 //修改进度进度
      const startTimeObj = this.formatTime(seekSecond)
      backAudioManager.seek(seekSecond)  //播放跳转到拖拽的时间
      
    
      this.setData({
        movableDistance: movalieXDistance,
        ['time.start']: `${startTimeObj.min}:${startTimeObj.sec}`,
        musicProgress
      })
      
     
      movalieLock = false //移动结束解锁
      console.log('movalieMoveEnd',movalieLock)
    },


    /**
     * @description 更新当前时间和进度条
     */
    _updateCurrentTimeAndProgress () {
      // console.log('movalieLock',movalieLock)

      if (!movalieLock) { //只有没有拖拽进度的时候会跟更新
        let currentTime = backAudioManager.currentTime
        let duration = backAudioManager.duration
        let showTime = this.formatTime(currentTime)
        let currentManagerTime = parseInt(currentTime)
        let cuttrntProgress = ( currentTime / duration ) * 100
        const movableDistance =  movalieWidth * (currentTime / duration) //拖拽球移动的距离 = 进度条总长度 * （当前播放时间 / 音乐总时长）
        if(currentPlayTime != currentManagerTime ) {
          //当前时间未设置更新渲染，优化一秒只渲染一次的问题
          // console.log('onTimeUpdate',currentTime)
          currentPlayTime = currentManagerTime
          
          this.setData({
            ['time.start']:`${showTime.min}:${showTime.sec}`,
            musicProgress: cuttrntProgress,
            movableDistance
          })
          this.triggerEvent('timeUpdate',{
            currentTime
          })
        }
      } 
      
    },

    /**
     * @description 设置音乐得时长
     */
    setMusicTime() {
      let time = backAudioManager.duration
      if (typeof time != 'undefined') {
        console.log('time', time, backAudioManager)
        const showTime = this.formatTime(time)
        this.setData({
          ['time.end']:`${showTime.min}:${showTime.sec}`
        })
        console.log('showTime',showTime)
      }
    },

    /**
     * 
     * @param {number} secondTime 播放时长秒数 130.66
     */
    formatTime (secondTime) {
      // 返回00：00格式
      const min = parseInt(secondTime / 60) 
      const sec = parseInt(secondTime % 60) 
      return {
        min: this.parse0(min),
        sec: this.parse0(sec)
      }
    },

    /**
     * @description 格式化填0
     */
    parse0 (num) {
      return num < 10 ? `0${num}` : num
    }
    
  }
})
