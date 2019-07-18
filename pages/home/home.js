// pages/home/home.js
const {http} = require('../../libs/http.js')
Page({
  updateId:'',
  updateIndex:'',
  data: {
    lists:[],
    visible: false,
    visibleUpdateConfirm:false,
    updateContent:''
  },
  onShow:function (){
    console.log('欢迎来到个人主页')
    http.get('/todos?completed=false').then(response=>{
      console.log(response)
      this.setData({lists:response.data.resources})
    })
  },
  confirm(event){
    console.log(event.detail)
  },
  confirmCreate(event){
    console.log(event)
    let content = event.detail
    console.log(content)
    if (content) {
      http.post('/todos', {
        completed: false, description: content
     })
    .then(response =>{
      console.log('成功传入数据')
      let todo = [response.data.resource]
      this.data.lists = todo.concat(this.data.lists)
      this.setData({ lists: this.data.lists })
      this.hideConfirm()
      })
    }
  },
  changeText(event){
    let {content,id,index} = event.currentTarget.dataset
    this.updateId = id
    this.updateIndex=index
    this.setData({ visibleUpdateConfirm:true,updateContent:content})
  },
  confirmUpdate(event){
    let content=event.detail
    console.log(content)
    http.put(`/todos/${this.updateId}`, {
      description: content
    }).then(response => {
      let todo = response.data.resource
      this.data.lists[this.updateIndex] = todo
      this.setData({ lists: this.data.lists })
      this.hideUpdateConfirm()
    })
  },
  destroyTodo(event){
    let index = event.currentTarget.dataset.index
    let id=event.currentTarget.dataset.id
    http.put(`/todos/${id}`,{
      completed:true
    }).then(response=>{
      let todo = response.data.resource
      this.data.lists[index] = todo
      this.setData({ lists: this.data.lists })
    })
  },
  hideConfirm(){
    this.setData({visible:false})
  },
  hideUpdateConfirm(){
    this.setData({ visibleUpdateConfirm: false })
  },
  showConfirm(){
    this.setData({visible:true})
  },
})