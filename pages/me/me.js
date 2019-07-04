// pages/me/me.js
Page({
  data: {
    tab:"tomato",
    lists:{
      "本周四":[
        {time:"14:00",text:"项目文件编辑器",id:1},
        { time: "14:00", text: "项目文件编辑器", id: 4 }
        ],
      "本周五": [
        { time: "14:00" ,  text: "项目文件编辑器啦啦啦啦啦啦啦啦啦啦德玛西亚" , id: 2 },
        { time: "14:00", text: "项目文件编辑器啦啦啦啦啦啦啦啦啦啦德玛西亚德玛西亚皇子", id: 2 }
        ],
      "本周六": [{ time: "14:00" , text: "项目文件编辑器" ,  id: 3 }],
      "本周一": [{ time: "14:00" , text: "项目文件编辑器" ,  id: 33 }],
      "本周二": [{ time: "14:00", text: "项目文件编辑器", id: 23 }],
      "本周三": [{ time: "14:00", text: "项目文件编辑器", id: 13 }],
    }
  },
  changeTab(event){
    let name = event.currentTarget.dataset.name
    this.setData({tab:name})
    console.log(event)
  },
  onLoad: function (options) {
  },
  onReady: function () {
  },
  onShow: function () {
  },
  onHide: function () {
  },
  onUnload: function () {
  },
  onPullDownRefresh: function () {
  },
  onReachBottom: function () {
  },
  onShareAppMessage: function () {
  }
})