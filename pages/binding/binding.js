// pages/binding/binding.js
const { http } = require('../../libs/http.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    account:'',
    password:'',
    password_digest:''
  },
  watchAccount(event){
    this.setData({account:event.detail.value})
    console.log(this.data.account)
  },
  watchPassword(event){
    this.setData({password_digest:event.detail.value})
    console.log(this.data.password_digest)
  },
  submit(){
    http.post('/bindings',{
      account:this.data.account,
      password_digest:this.data.password_digest
    })
    .then(response=>{
      wx.setStorageSync('me', response.data.resource)
      wx.reLaunch({ url: '/pages/home/home',})
    })
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