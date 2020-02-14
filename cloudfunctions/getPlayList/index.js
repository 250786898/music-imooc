// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

var rp = require('request-promise')
const db = cloud.database()
const playlistColl = db.collection('playlist')
const MAX_LIMIT = 100 //设置获取音乐列表最大的限制数

// 云函数入口函数
exports.main = async (event, context) => {
  
  //获取音乐列表，每次限制
  const { total } = await playlistColl.count() //获取云数据库有多少条数据
  //计算需要获取的次数
  const batchTimes = Math.ceil(total / 10)
  let task = [] //用于保存获取计划promise
  for (let i = 0; i < batchTimes; i++) {
    let taskPromise = playlistColl.skip(i * MAX_LIMIT).limit(MAX_LIMIT).get()
    console.log(i, taskPromise)
    task.push(taskPromise)
  }


  //合并所有数组的数据
  let taskPromiseList = await Promise.all(task)

  console.log('taskPromiseList', taskPromiseList)

  // let playlist = [] //播放列表

  let list = {
    data: []
  }
  if (taskPromiseList.length) {
    //存在数据才合并
    list = taskPromiseList.reduce((acc, cur) => {
       console.log('++++acc++++', acc)
      //  return acc.data.concat(cur.data)
       return {
         data: acc.data.concat(cur.data)
       }
    })
  }
 
  

  const res = await rp('http://musicapi.xiecheng.live/personalized') //请求获取第三方音乐推荐列表
  const resObjArr = JSON.parse(res).result //字符串json序列化第三方音乐数组
  // const { data: playlist } = await playlistColl.get() //获取云数据音乐列表,限制了一百条

  console.log('调成成功', resObjArr.length)
 
    //去重：只插入集合还没有存在音乐列表的数据
  let addMusicList = [] //定义需要插入的音乐数组
  for (let i = 0; i < resObjArr.length; i++) {
    let isAddflag = true //是否能插入开关
    for (let j = 0; j < list.data.length; j++) {
      if (resObjArr[i].id == list.data[j].id) {
        //如果存在相等不插入该条音乐，退出当前循环
        isAddflag = false
        break
      }
    }
    if (isAddflag) {
      addMusicList.push(resObjArr[i])
    }
    
  }

    //插入数据入库
   try {
     for (let i = 0; i < addMusicList.length;i++) {
       const addRes = await db.collection('playlist').add({
         data: {
           ...addMusicList[i]
         }    
       })
       console.log('addRes', addRes)
     }
    
   }catch (err) {
     console.log('err', err)
   }
  

  return {
    code: 20000,
    addLength: addMusicList.length,
    message: '调用成功'
  }
}