// pages/home/home.js
Page({
  data: {
    lists:[
      {id:1,text:"今天你吃饭了么",finished:true},
      { id: 2, text: "今天你吃饭了么", finished: true },
      { id: 3, text: "今天你吃饭了么", finished: true },
      { id: 4, text: "今天你吃饭了么", finished: false },
      { id: 5, text: "今天你吃饭了么", finished: true },
      { id: 6, text: "今天你吃饭了么", finished: false },
      { id: 7, text: "今天你吃饭了么", finished: true },
    ],
    visible: false
  },
  confirm(event){
    console.log(event.detail)
  },
  confirmCreate(event){
    console.log(event)
    let content = event.detail
    if(content){
      let todo = [{ id: this.data.lists.length + 1, text: content, finished: false }]
      this.data.lists=todo.concat(this.data.lists)
      console.log(12345)
      this.setData({lists:this.data.lists})
      this.hideConfirm()
    }
  },
  destroyTodo(event){
    console.log(event)
    let index = event.currentTarget.dataset.index
    this.data.lists[index].finished = true
    this.setData({lists: this.data.lists})
  },
  hideConfirm(){
    this.setData({visible:false})
  },
  showConfirm(){
    this.setData({visible:true})
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