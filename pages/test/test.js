// pages/test/test.js
Page({
  data: {
    messenge:"我是一条信息",
    number:1,
    condition:true,
    arr:[
      { id: 1, test: 1 }, { id: 2, test: 2 }, { id: 3, test: 3 },
    ],
    propValue:1,
    str:'我是一条信息',
    arr:[1,2,3,4],
    obj:{id:1,text:'我是信息一'},
    xx:true,
  },
  onLoad: function (options) {
    console.log(options)

  },
  changeColor(){
    this.setData({xx:!this.data.xx})
  },
  changeText(){
    this.setData({"obj.text":"我是信息二"})
  },
  pushItem(){
    let last=this.data.arr[this.data.arr.length-1]+1
    let newArr=[last]
    this.data.arr =newArr.concat(this.data.arr)
    this.setData({arr:this.data.arr})
  },
  reverseStr(){
    this.setData({str:this.data.str.split('').reverse().join('')})
  },
  onReady: function () {

  },
  onShow: function () {
    // this.setData({str:123123})
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
