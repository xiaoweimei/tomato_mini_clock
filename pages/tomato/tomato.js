// pages/tomato/tomato.js
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
    this.startTimer()
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
    wx.navigateBack({
      to: -1
    })
  },
  confirmFinish(event){
    let content=event.detail
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

  },
  onUnload: function () {

  }
})