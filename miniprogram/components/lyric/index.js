// components/lyric/index.js
let lyricHeight = 0
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    show: { //歌词是否显示
      type: Boolean,
      value: false
    },
    lyric: { //歌词
      type: String,
      value: ''
    }
  },

  observers: {
    'lyric': function(lyric) {
      console.log('observers lyric',lyric)
      if (lyric == '') {
        this.setData({
          lrcList: [{
            lyric: '暂无歌词',
            time: 0,
          }],
          nowLyricIndex: -1
        })
      }else{
          this._praseLyric(lyric)
        }
      
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    lrcList: [], //歌词列表
    currentLyricIndex: 0, // 当前选中的歌词的索引
    scrollTop: 0
  },

  lifetimes: {
    ready() {
      // 750rpx
      wx.getSystemInfo({
        success(res) {
          // console.log(res)
          // 求出1rpx的大小
          lyricHeight = res.screenWidth / 750 * 64
        },
      })
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {
    update(currentTime) {
      
      const lrcList =this.data.lrcList 
      console.log('++update+++++',currentTime,lrcList)
      if (lrcList.length == 0) {
        return
      }
      if (currentTime > lrcList[lrcList.length - 1].time) {
        if (this.data.nowLyricIndex != -1) {
          this.setData({
            nowLyricIndex: -1,
            scrollTop: lrcList.length * lyricHeight
          })
        }
      }
      for(let i = 0;i<lrcList.length; i++) {
      
        if(currentTime <= lrcList[i].time) {    
            console.log('++update+++++',i,currentTime,lrcList[i].time)
          this.setData({
            currentLyricIndex: i - 1,
            scrollTop: (i - 1) * lyricHeight
          })
          break
        }
      }
    },

    _praseLyric (slyric) {
      let line = slyric.split('\n')
      console.log('line',line)
      let _lrcList = []
      line.forEach((elem) => {
        let time = elem.match(/\[(\d{2,}):(\d{2})(?:\.(\d{2,3}))?]/g)
        console.log('time',time)
        if(time != null) {
          //把时间转成秒
          let lrc = elem.split(time)[1] //赛选每一项的歌词
          let timeReg = time[0].match(/(\d{2,}):(\d{2})(?:\.(\d{2,3}))?/)
          //把时间转换成秒
          console.log('timeReg',timeReg)
          let time2Seconds = parseInt(timeReg[1]) * 60 + parseInt(timeReg[2]) + parseInt(timeReg[3]) /1000
          console.log('lrc',time2Seconds)
          _lrcList.push({
            lrc,
            time: time2Seconds
          })
        }
        
      })
      this.setData({
        lrcList: _lrcList
      })
    }
  }
})
