// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const db = cloud.database()

// 云函数入口函数
//用于获取推荐音乐列表
exports.main = async (event, context) => {
  
  try {
    const res = await db.collection('playlist').skip(event.start).limit(event.count).orderBy('createTime', 'desc').get()
    return res
  } catch (err) {
    console.err(err)
  }

}