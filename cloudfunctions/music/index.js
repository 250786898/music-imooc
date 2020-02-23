// 云函数入口文件
const cloud = require('wx-server-sdk')
const TcbRouter = require('tcb-router')
const rp = require('request-promise')
cloud.init()

const db = cloud.database()
const BASE_URL = 'http://musicapi.xiecheng.live'


// 云函数入口函数

exports.main = async (event, context) => {
  const app = new TcbRouter({event})

  //用于获取推荐音乐列表
  app.router('playlist',async (ctx,next) => {
    try {
      const res = await db.collection('playlist').skip(event.start).limit(event.count).orderBy('createTime', 'desc').get()
      console.log('res',res)
      ctx.body = res 
    } catch (err) {
      console.err(err)
    }
  })

  //根据推荐歌单id用于获取歌曲列表
  app.router('musicList', async (ctx, next) => {   
    try{
      const res = await rp(`${BASE_URL}/playlist/detail?id=${event.musicListId}`)
      console.log('res', res)
      ctx.body = JSON.parse(res)
    }catch (err) {
      console.log(err)
    }   
  })


  //获取音乐详情
  app.router('musicDetail', async (ctx, next) => {
    try {
      const res = await rp(`${BASE_URL}/song/detail?ids=${event.musicId}`)
      ctx.body = JSON.parse(res)
    } catch (error) {
      console.log(err)
    }
  })

  //获取音乐播放地址
  app.router('getMusicUrl', async (ctx, next) => {
    try {
      const res = await rp(`${BASE_URL}/song/url?id=${event.musicId}`)
      ctx.body = JSON.parse(res)
    } catch (error) {
      console.log(err)
    }
  })

  //获取音乐播放的歌词
  app.router('getMusicLyric', async (ctx, next) => {
    try {
      const res = await rp(`${BASE_URL}/lyric?id=${event.musicId}`)
      ctx.body = JSON.parse(res)
    } catch (error) {
      console.log(err)
    }
  })

  return app.serve()  
 

}