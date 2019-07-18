// pages/tomato/tomato.js
const { http } = require('../../libs/http.js')
Page({

  /**
   * 页面的初始数据
   */
  timer: null,
  data: {
    defaultSecond:1500,
    time:"",
    timerStatus:"stop",
    confirmVisible: false,
    againButtonVisible: false,
    finishConfirmVisible: false
  },
  onShow: function () {
    console.log('欢迎来到番茄页面')
    this.startTimer()
    http.post('/tomatoes').then(response=>{
      this.setData({tomato:response.data.resource})
      console.log(this.data.tomato)
    })
  },
  startTimer(){
    this.setData({timerStatus:'start'})
    this.ChangeTime()
    this.timer = setInterval(() => {
      this.data.defaultSecond = this.data.defaultSecond - 1
      this.ChangeTime()
      if(this.data.defaultSecond===0){
        this.setData({againButtonVisible:true})
        this.setData({ finishConfirmVisible: true })
        return this.clearTimer() 
      }
    }, 1000)
  },
  againTimer(){
    this.data.defaultSecond = 1500
    this.setData({ againButtonVisible: false })
    this.startTimer()
  },
  clearTimer(){
    clearInterval(this.timer)
    this.timer=null
    this.setData({timerStatus:'stop'})
  },
  ChangeTime(){
    let m = Math.floor(this.data.defaultSecond/60)
    let s = Math.floor(this.data.defaultSecond%60)
    if(s===0){
      s='00'
    }
    if((s+"").length===1){
      s="0"+s
    }
    if((m+"").length===1){
      m="0"+m
    }
    this.setData({ time: `${m}:${s}`})
  },
  confirmAbandon(event){
    let content=event.detail
    http.put(`/tomatoes/${this.data.tomato.id}`,{
      description:content,
      aborted:true
    })
    .then(response=>{
      wx.navigateBack({ to: -1 })
    })
  },
  confirmFinish(event){
    this.clearTimer()
    let content=event.detail
    this.setData({finishConfirmVisible:false})
    if(content){
      http.put(`/tomatoes/${this.data.tomato.id}`,{
        description:content,
        aborted:false
      })
        .then(response => { 
          // wx.reLaunch({ url: '/pages/home/home', })
          console.log('到底出来了没')
        })
    }else{
      http.put(`/tomatoes/${this.data.tomato.id}`,{
        description:content,
        aborted:true
      })
      .then(response=>{
        wx.reLaunch({ url: '/pages/home/home',})
      })
    }
  },
  confirmCancel(){
    this.setData({finishConfirmVisible: false})
  },
  showConfirm(){
    this.setData({confirmVisible:true})
    this.clearTimer()
  },
  hideConfirm(){
    this.setData({confirmVisible:false})
    this.startTimer()
  },
  onHide: function () {
    this.clearTimer()
    http.put(`/tomato/${this.data.tomato.id}`,{
      description:"退出放弃",
      aborted: true
    })
  },
  // onUnload: function () {
  //   this.clearTimer()
  //   http.put(`/tomatoes/${this.data.tomato.id}`,{
  //     description:"退出放弃",
  //     aborted:true
  //   })
  // }
})