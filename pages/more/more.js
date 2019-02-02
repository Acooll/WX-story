// pages/more/more.js
Page({
  data: {
    bookOn: '加入书架',
    booktalks: '',
    starShow: ''
  },
  onLoad: function(options) {
    var msg = options.page
    var id = options.page
      this.setData({
        msg:msg,
        id:id

      })
 
    var bookOn = wx.getStorageSync('bookOn'+this.data.id)
 if(bookOn){
    this.setData({
     
      bookOn:bookOn
    })
 }
    console.log(msg)
    wx.request({
      url: 'http://localhost:3000/users/novelDetail',
      method:'POST',
      header:{
         'content-type': 'application/x-www-form-urlencoded' 
      },
      data:{data:msg},
      success:function(res){
        that.setData({
          novelDetail:res.data.msg
        })
        // console.log(res)
      }
    })


    var star = []
    var that = this
    wx.request({
      url: 'http://caiwei.yuedu.163.com/snsComment.do?operation=get&type=2&id=cf72a85452ca4103adac97c5ab4191ea_4&page=1&_=1535135191823',
      method: 'get',
      header: {
        'content-type': 'json'
      },
      success: function(res) {
        var stars = []
        var starShow = []
        var booktalks = res.data.data
        console.log(booktalks[7].stars)
        
        // for (var i = 0; i < booktalks.length; i++) {
        //   for (var j = 1; j < 6; j++) {
        //     var star = booktalks[i].stars
        //     if (star - j >= 0) {
        //       stars.push('/pages/images/star.png')
        //     } else {
        //       stars.push('/pages/images/none-star.png')
        //     }
        //   }
        // }
  
     
        that.setData({
          booktalks: booktalks,
   
        })
      }
    })


  },
  onShop: function(e) {
    var that = this
    if (this.data.bookOn === '加入书架')
    wx.request({
      url: 'http://localhost:3000/users/carLists',
      method: 'post',
      header: {
        'content-type': 'application/x-www-form-urlencoded' 
      },
      data:{
        data:that.data.msg
        },
      success: function (res) {
        console.log(res.data)
      }
    })

    console.log(e.changedTouches[0].identifier)
    var shopbook = e.changedTouches[0].identifier
    if (this.data.bookOn === '加入书架')
      wx.showToast({
        title: '成功加入书架！',
        icon: 'success',
        duration: 2000
      })
    this.setData({
      bookOn: '已在书架'
    })
    wx.setStorageSync('bookOn'+this.data.id,'已在书架')
  },
  goRead: function() {
    wx.navigateTo({
      url: '/pages/read/read',
    })
  }

})