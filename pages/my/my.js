Page({
  data: {
    gender: '',
    loginIn: false,
    greyAvatar: true,
    greyLogin: true,
    signWords: '签到',
    coin: 0,
    score: 0,
    money: 0

  },
  onLoad: function() {
    var that = this
    var value = wx.getStorageSync('score')
    if (value) {
      this.setData({
         score: value 
      })
    }
      
      
    
    this.setData({
      money: that.data.money.toFixed(2)
    })
  },
  getCarList: function() {
    if(this.data.userInfo){
    wx.navigateTo({
      url: '/pages/carlist/carlist',
    })
    }else{
      wx.showToast({
        title: '请先登录！',
      })
    }

  },
  clickTap: function() {
    Page.onShareAppMessage
  },
  getScan: function() {
    var that = this
    wx.navigateTo({
      url: '/pages/out/out',
    })

  },

  phoneCall: function(e) {
    wx.makePhoneCall({
      phoneNumber: '18279124451'
    })

  },
  signTap: function() {
    var that = this
    if (this.data.signWords === '签到') {
      wx.showToast({
        title: '签到，积分+10',
        icon: 'success',
        duration: 2000
      })
      this.setData({
        signWords: '充值',
        score: (that.data.score + 10)
      })
      wx.setStorageSync('score', this.data.score)
    }
  },
  getUserInfo: function() {
    var that = this
    _getUserInfo();

    function _getUserInfo() {
      wx.getUserInfo({
        success: function(res) {
          that.setData({
            userInfo: res.userInfo,
            loginIn: true,
            greyAvatar: false,
            greyLogin: false
          })
          console.log(res)
          if (res.userInfo.gender === 1) {
            that.setData({
              gender: '男'
            })
          } else {
            that.setData({
              gender: '女'

            })
          }
        }
      })

    }
  }
})