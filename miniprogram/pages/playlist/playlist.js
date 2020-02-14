// miniprogram/pages/playlist/playlist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperImgUrls: [
      {
      url: 'http://p1.music.126.net/oeH9rlBAj3UNkhOmfog8Hw==/109951164169407335.jpg',
      },
      {
        url: 'http://p1.music.126.net/xhWAaHI-SIYP8ZMzL9NOqg==/109951164167032995.jpg',
      },
      {
        url: 'http://p1.music.126.net/Yo-FjrJTQ9clkDkuUCTtUg==/109951164169441928.jpg',
      }
    ],
    playlist: [
      { "id": 2912915282, "type": 0, "name": "男女对嗓 | 化学反应°你我心中的爱情火花", "copywriter": "编辑推荐：初逢你的一个微笑，就此念念不忘", "picUrl": "https://p2.music.126.net/2N7CVBDAV1ga54ypUplUGg==/109951164639273403.jpg", "canDislike": false, "trackNumberUpdateTime": 1580899354789, "playCount": 184653, "trackCount": 36, "highQuality": false, "alg": "featured" }, { "id": 2664707087, "type": 0, "name": "男女搭配·Rap｜满天星辰光辉敌不过你我凝眸", "copywriter": "编辑推荐：每个日子，都好喜欢你 ", "picUrl": "https://p2.music.126.net/q8ZwV-00XMXwhDPMZx-5dQ==/109951163863591019.jpg", "canDislike": false, "trackNumberUpdateTime": 1550313956337, "playCount": 189922, "trackCount": 36, "highQuality": false, "alg": "featured" }, { "id": 2829844572, "type": 0, "name": "[洗澡时听的歌] 浴室里听歌吹泡泡o○o○o○", "copywriter": "热门推荐", "picUrl": "https://p2.music.126.net/fU9I3oeR-CCaLmCjYfpDkg==/109951164170675848.jpg", "canDislike": true, "trackNumberUpdateTime": 1581631200000, "playCount": 8174056, "trackCount": 20, "highQuality": false, "alg": "cityLevel_A" }, { "id": 607130398, "type": 0, "name": "UyGuR ♬ 维吾尔", "copywriter": "热门推荐", "picUrl": "https://p2.music.126.net/KFnzNyrQsOqe3AMDahQItA==/109951164676708078.jpg", "canDislike": true, "trackNumberUpdateTime": 1581581078082, "playCount": 928908, "trackCount": 692, "highQuality": false, "alg": "cityLevel_A" }, { "id": 2759414040, "type": 0, "name": "寄给2020年未来女朋友甜甜的歌单", "copywriter": "热门推荐", "picUrl": "https://p2.music.126.net/X-oZE9E--kauT2tpUwijzQ==/109951164005968547.jpg", "canDislike": true, "trackNumberUpdateTime": 1581435019017, "playCount": 14249514, "trackCount": 62, "highQuality": false, "alg": "cityLevel_A" }, { "id": 2943012273, "type": 0, "name": "说唱独角兽 | 微甜Lover 半糖情话", "copywriter": "热门推荐", "picUrl": "https://p2.music.126.net/2rIGByTc7VHIvfY7EUtlRg==/109951164303146709.jpg", "canDislike": true, "trackNumberUpdateTime": 1581644336175, "playCount": 3500367, "trackCount": 163, "highQuality": false, "alg": "cityLevel_A" }, { "id": 863744119, "type": 0, "name": "200首好听的翻唱", "copywriter": "热门推荐", "picUrl": "https://p2.music.126.net/p8UsKXA-qjfYuicFEZ_bbw==/109951163822176249.jpg", "canDislike": true, "trackNumberUpdateTime": 1581478184907, "playCount": 104569136, "trackCount": 209, "highQuality": false, "alg": "cityLevel_A" }, { "id": 3136952023, "type": 0, "name": "私人雷达|根据听歌记录为你打造", "copywriter": "热门推荐", "picUrl": "https://p2.music.126.net/BeIc-sv62xZPpVBS4DjE-g==/109951164607988464.jpg", "canDislike": true, "trackNumberUpdateTime": 1581631200000, "playCount": 9808410, "trackCount": 35, "highQuality": false, "alg": "cityLevel_A" }, { "id": 3051358227, "type": 0, "name": "游戏向电音‖快乐只需要一单就已足矣", "copywriter": "热门推荐", "picUrl": "https://p2.music.126.net/cpe-upUu1jy039PSnfNzBA==/109951164487883426.jpg", "canDislike": true, "trackNumberUpdateTime": 1581365411288, "playCount": 7069396, "trackCount": 66, "highQuality": false, "alg": "cityLevel_A" }, { "id": 310970433, "type": 0, "name": "【旋律控】超级好听的欧美良曲", "copywriter": "热门推荐", "picUrl": "https://p2.music.126.net/2MsstS-M9w5-li0aRy3sUQ==/1380986606815861.jpg", "canDislike": true, "trackNumberUpdateTime": 1554649190002, "playCount": 347816992, "trackCount": 363, "highQuality": false, "alg": "cityLevel_A" }, { "id": 2998483698, "type": 0, "name": "压箱私藏 | 那些躲在角落里的小众音乐", "copywriter": "热门推荐", "picUrl": "https://p2.music.126.net/CY-RRAFYrYQ9yotmK7icKg==/109951164384399731.jpg", "canDislike": true, "trackNumberUpdateTime": 1581568202976, "playCount": 5552381, "trackCount": 34, "highQuality": false, "alg": "cityLevel_A" }, { "id": 764203074, "type": 0, "name": "我 殺 了 自 己", "copywriter": "热门推荐", "picUrl": "https://p2.music.126.net/Eft-PN4lnY_3EDVdWDbvrw==/18999560928134747.jpg", "canDislike": true, "trackNumberUpdateTime": 1581600398413, "playCount": 628259, "trackCount": 359, "highQuality": false, "alg": "cityLevel_A" }, { "id": 2815777391, "type": 0, "name": "好听到可以单曲循环鸭", "copywriter": "热门推荐", "picUrl": "https://p2.music.126.net/AgJPVd9Ng489G-G_sY9JRw==/109951164605789897.jpg", "canDislike": true, "trackNumberUpdateTime": 1581644775567, "playCount": 27044094, "trackCount": 137, "highQuality": false, "alg": "cityLevel_A" }, { "id": 3092664364, "type": 0, "name": "战神李信-上单专属节奏战歌", "copywriter": "热门推荐", "picUrl": "https://p2.music.126.net/gciPLrfPiDm6y-xx1sSJuQ==/109951164691494129.jpg", "canDislike": true, "trackNumberUpdateTime": 1580757055824, "playCount": 548375, "trackCount": 68, "highQuality": false, "alg": "cityLevel_A" }, { "id": 2482210411, "type": 0, "name": "那些听一遍就喜欢的歌", "copywriter": "热门推荐", "picUrl": "https://p2.music.126.net/R61ZF0gTfd6fuVc41oo5Lg==/109951164286019220.jpg", "canDislike": true, "trackNumberUpdateTime": 1581355125023, "playCount": 18620866, "trackCount": 164, "highQuality": false, "alg": "cityLevel_A" }, { "id": 979321026, "type": 0, "name": "好听到单曲循环", "copywriter": "热门推荐", "picUrl": "https://p2.music.126.net/1gNcBmzdIaQtU00Dvp_TvQ==/109951163912081772.jpg", "canDislike": true, "trackNumberUpdateTime": 1581223926969, "playCount": 134010264, "trackCount": 183, "highQuality": false, "alg": "cityLevel_A" }, { "id": 2196947449, "type": 0, "name": "『那些评论破万的日文歌』更新中", "copywriter": "热门推荐", "picUrl": "https://p2.music.126.net/wzoTxcviowVd1E252TicCw==/18977570695980021.jpg", "canDislike": true, "trackNumberUpdateTime": 1581498484554, "playCount": 14367407, "trackCount": 484, "highQuality": false, "alg": "cityLevel_A" }, { "id": 2254975900, "type": 0, "name": "宝宝巴士 儿歌", "copywriter": "热门推荐", "picUrl": "https://p2.music.126.net/GlV130UzFe2hEofOpo9k2g==/109951163314358137.jpg", "canDislike": true, "trackNumberUpdateTime": 1528109881644, "playCount": 22040180, "trackCount": 200, "highQuality": false, "alg": "cityLevel_A" }, { "id": 2944881027, "type": 0, "name": "我用尽毕生精力去遇见你（男翻唱）", "copywriter": "热门推荐", "picUrl": "https://p2.music.126.net/hj0fQuuAXJQKPyTJxNBQ5Q==/109951164663988085.jpg", "canDislike": true, "trackNumberUpdateTime": 1581498053507, "playCount": 1735367, "trackCount": 502, "highQuality": false, "alg": "cityLevel_A" }, { "id": 2618915549, "type": 0, "name": "你搜不到的土嗨神曲", "copywriter": "热门推荐", "picUrl": "https://p2.music.126.net/_ldY-Tf5dCIubyyeATSrdA==/109951164322846413.jpg", "canDislike": true, "trackNumberUpdateTime": 1581603718053, "playCount": 16172323, "trackCount": 103, "highQuality": false, "alg": "cityLevel_A" }, { "id": 2207920882, "type": 0, "name": "✨只有特别可爱的人才能看见歌名啊", "copywriter": "热门推荐", "picUrl": "https://p2.music.126.net/L_MoPA4HysDrrKsVpYa-Cw==/19126004765388560.jpg", "canDislike": true, "trackNumberUpdateTime": 1574651291261, "playCount": 4975552, "trackCount": 45, "highQuality": false, "alg": "cityLevel_A" }, { "id": 2033700325, "type": 0, "name": "全球高考/AWM/伪渣/提映/破云/大哥/影帝", "copywriter": "热门推荐", "picUrl": "https://p2.music.126.net/8EU_2-9x6y9kWggnNCpEig==/109951164054786590.jpg", "canDislike": true, "trackNumberUpdateTime": 1580292088729, "playCount": 902398, "trackCount": 61, "highQuality": false, "alg": "cityLevel_A" }, { "id": 2656408838, "type": 0, "name": "精选 翻唱cover", "copywriter": "热门推荐", "picUrl": "https://p2.music.126.net/5V9z4fPvb0dxTr8MyfbO3w==/109951164684303429.jpg", "canDislike": true, "trackNumberUpdateTime": 1581622989224, "playCount": 734347, "trackCount": 350, "highQuality": false, "alg": "cityLevel_A" }, { "id": 813333839, "type": 0, "name": "打游戏必备| 感受这场听觉盛宴!", "copywriter": "热门推荐", "picUrl": "https://p2.music.126.net/jwJ1b4i9SFbQ0NHeV-jkNQ==/109951164597892399.jpg", "canDislike": true, "trackNumberUpdateTime": 1581418617766, "playCount": 8005080, "trackCount": 288, "highQuality": false, "alg": "cityLevel_A" }, { "id": 2849012407, "type": 0, "name": "我猜你一定有个爱而不得的人吧", "copywriter": "热门推荐", "picUrl": "https://p2.music.126.net/R1smUJETJBtBq8Aa0F-5CA==/109951164157065747.jpg", "canDislike": true, "trackNumberUpdateTime": 1579855897364, "playCount": 10756383, "trackCount": 62, "highQuality": false, "alg": "cityLevel_A" }, { "id": 2981177242, "type": 0, "name": "「翻唱」好听的歌永远没有完整版。", "copywriter": "热门推荐", "picUrl": "https://p2.music.126.net/mBfK5c2mkowtfQ7phZjTlQ==/109951164530877064.jpg", "canDislike": true, "trackNumberUpdateTime": 1581641268278, "playCount": 2146452, "trackCount": 135, "highQuality": false, "alg": "cityLevel_A" }, { "id": 2513175120, "type": 0, "name": "〖MuHaBBaT-KuYLiRi〗新疆流行歌曲合集", "copywriter": "热门推荐", "picUrl": "https://p2.music.126.net/8R1wrfyZ23Y0rH8VN_J6Vg==/109951164321666972.jpg", "canDislike": true, "trackNumberUpdateTime": 1578098816166, "playCount": 740143, "trackCount": 18, "highQuality": false, "alg": "cityLevel_A" }, { "id": 456087080, "type": 0, "name": "爱情公寓里好听的BGM", "copywriter": "热门推荐", "picUrl": "https://p2.music.126.net/xUqYAc0q2yHhrGkE0XmMbg==/109951162881340063.jpg", "canDislike": true, "trackNumberUpdateTime": 1580895447624, "playCount": 2807077, "trackCount": 37, "highQuality": false, "alg": "cityLevel_A" }, { "id": 3040466047, "type": 0, "name": "睡前舒心纯音乐哄君入眠", "copywriter": "热门推荐", "picUrl": "https://p2.music.126.net/JEYDQ6MV0C-dPqiqojQibw==/109951164442575315.jpg", "canDislike": true, "trackNumberUpdateTime": 1572927153040, "playCount": 593845, "trackCount": 25, "highQuality": false, "alg": "cityLevel_A" }, { "id": 2553847228, "type": 0, "name": "【治愈向】杜宣达达达的那些歌", "copywriter": "热门推荐", "picUrl": "https://p2.music.126.net/aiyHK45Qzxi59O1PZM2kog==/109951164011576094.jpg", "canDislike": true, "trackNumberUpdateTime": 1581480693164, "playCount": 3980255, "trackCount": 70, "highQuality": false, "alg": "cityLevel_A" }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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