// pages/pop/pop.js
Page({
  data: {
    sex:true
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
        var popbooks = res.data.posts
        // console.log(popbooks)
        that.setData({
          popbooks: popbooks
        })
      }
    })
    wx.request({
      url: 'http://caiwei.yuedu.163.com/bookUpdateInterface.do?from=original&subject=book&gender=female&count=12',
      method: 'get',
      header: {
        'content-type': 'json'
      },
      success: function (res) {
        var girlbooks = res.data.list
        console.log(girlbooks)
        that.setData({
          girlbooks: girlbooks
        })
      }
    })
    wx.request({
      url: 'http://caiwei.yuedu.163.com/bookUpdateInterface.do?from=original&subject=book&gender=male&count=12',
      method: 'get',
      header: {
        'content-type': 'json'
      },
      success: function (res) {
        var boybooks = res.data.list
        console.log(boybooks)
        that.setData({
          boybooks: boybooks
        })
      }
    })
    wx.request({
      url: 'http://caiwei.yuedu.163.com/topTenTicket.do?gender=female&count=10',
      method: 'get',
      header: {
        'content-type': 'json'
      },
      success: function (res) {
        var topbooks = res.data.list
        that.setData({
          topbooks: topbooks
        })
      }
    })  
    wx.request({
      url: 'http://caiwei.yuedu.163.com/bookRankInterface.do?from=original&sortType=monthSub&gender=male',
      method: 'get',
      header: {
        'content-type': 'json'
      },
      success: function (res) {
        var highbooks = res.data.list
        that.setData({
          highbooks: highbooks
        })
      }
    })  
    wx.request({
      url: 'http://yuedu.163.com/bookRankInterface.do?from=original&sortType=yearSell&gender=male&count=3',
      method: 'get',
      header: {
        'content-type': 'json'
      },
      success: function (res) {
        var greatbooks = res.data.list
        that.setData({
          greatbooks: greatbooks
        })
      }
    })  
  },
  changeSex: function () {
    this.setData({
      sex: false,
      boy:true
    })
    },
  changeBoy: function () {
    this.setData({
      sex: true,
      boy: false
    })
  },
  showMore:function(){
    wx.navigateTo({
      url: '/pages/more/more',
    })
  }
 
})