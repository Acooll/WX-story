// pages/carlist/carlist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nonebook: false
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.request({
      url: 'http://localhost:3000/users/getCarLists',
      method: 'get',
      header: {
        'content-type': 'json'
      },
      success: function (res) {
        if(!res){
        that.setData({
          nonebook:false
        })
      }else{
          that.setData({
            carBooks:res.data.msg
          })
          console.log(res.data)
      }
      }

    })
    
  },
  delete:function(options){
     console.log(options.currentTarget.id) 
    wx.request({
      url: 'http://localhost:3000/users/deleteCarLists',
      method: 'post',
      header: {
        'content-type': 'application/x-www-form-urlencoded' 
      },
      data:{
        data:options.currentTarget.id
      },
      success: function (res) {
        if(res){
          
        }
      }
    })

  }

  
})