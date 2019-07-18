const {http} = require('../../libs/http.js')
const {app_id,app_secret} = getApp().globalData
Page({
  data:{
  },
  onShow: function () {
    console.log('欢迎来到登录页面')
  },
  login(e){
    console.log(e)
    let encrypted_data=e.detail.encryptedData
    let iv=e.detail.iv
    this.wxLogin(encrypted_data,iv)
    },
  wxLogin(encrypted_data,iv){
    wx.login({
      success:(res)=> {
        console.log(res)
        this.loginMe(res.code, iv, encrypted_data)}
    })
  },
  loginMe(code,iv,encrypted_data){
    http.post('/sign_in/mini_program_user', {
      code,
      iv,
      encrypted_data,
      app_id,
      app_secret
    })
      .then(response => {
        console.log(456)
        console.log(response)
        this.saveMessage(response)
        wx.reLaunch({ url: '/pages/home/home',})
      })
  },
  saveMessage(response){
    console.log(response)
    console.log(789)
    console.log(response.data.resource)
    console.log(response.header['X-token'])
    wx.setStorageSync('me', response.data.resource)
    wx.setStorageSync('X-token', response.header['X-token'])
  }
})
//点击按钮=>调用小程序原生的wx.login=>参数=>http.post=>返回user
//=>保存user=>返回首页