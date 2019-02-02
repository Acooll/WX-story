// pages/firstbook/firstbook.js
Page({
  data: {
  },
  onLoad: function (options) {
    var that = this
    wx.request({
      url: 'https://caiwei.yuedu.163.com/special/002163ED/editorrecommend_ycmm.js',
      method: 'get',
      header: {
        'content-type': 'json'
      },
      success: function (res) {
      var firstbooks = res.data.posts
        // console.log(firstbooks)
        that.setData({
          firstbooks: firstbooks
        })
      }
       
    })
    wx.request({
      url: 'http://caiwei.yuedu.163.com/bookRankInterface.do?from=original&sortType=daySell&gender=female',
      method: 'get',
      header: {
        'content-type': 'json'
      },
      success: function (res) {
        var guessbooks = res.data.list
       
        that.setData({
          guessbooks: guessbooks
        })
      }

    })
    //banner
    wx.request({
      url: 'http://localhost:3000/users/novel',
      method: 'get',
      header: {
        'content-type': 'json'
      },
      success: function (res) {
        
        console.log(res.data)
        that.setData({
          bannerNovels: res.data.msg
        })
      }

    })
    //
    wx.request({
      url: 'http://caiwei.yuedu.163.com/bookRankInterface.do?from=original&sortType=weekPv&gender=female',
      method: 'get',
      header: {
        'content-type': 'json'
      },
      success: function (res) {
        var goodbooks = res.data.list
        // console.log(goodbooks)
        that.setData({
          goodbooks: goodbooks
        })
      }

    })
  },
    showMore:function(e){
        console.log(e.currentTarget)
        var page = e.currentTarget.id
      wx.navigateTo({
        url: '/pages/more/more?page='+page,
      })
    }

  
})