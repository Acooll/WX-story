Page({
  data: {},

  openBook: function(e) {
    wx.stopBackgroundAudio()
    wx.switchTab({
      url: '/pages/firstbook/firstbook'
    })

  },
  onLoad: function() {
    wx.playBackgroundAudio({
      dataUrl: 'http://117.21.183.13/amobile.music.tc.qq.com/C400003ddoUL1PoUUs.m4a?guid=5860642466&vkey=D4A19BF8D7B70F48012E50E7FC85C293D3004F61475B1DE0E9D8233971910F978F279220A2221C9A5956DCE9CFB3B9A5D5DA825D2053D6B1&uin=741&fromtag=66',
      title: 'Everglow',
      coverImgUrl:'https://y.gtimg.cn/music/photo_new/T002R300x300M000000NQNPC09SpPS.jpg?max_age=2592000'

    })
  }

})