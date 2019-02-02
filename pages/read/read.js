// pages/read/read.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },


  onLoad: function(options) {
    var that = this
    wx.request({
      url: 'http://m.tadu.com/_book_part/40e463aa8889ebffbe85b9842020f12a?callback=callback',
      method: 'get',
      header: {
        'content-type': 'json'
      },
      success: function(res) {
        var novel = res.data
        var storys = []
        var reg = /[\u4e00-\u9fa5\u3002|\uff1f|\uff01|\uff0c|\u3001|\uff1b|\uff1a|\u201c|\u201d|\u2018|\u2019|\uff08|\uff09|\u300a|\u300b|\u3008|\u3009|\u3010|\u3011|\u300e|\u300f|\u300c|\u300d|\ufe43|\ufe44|\u3014|\u3015|\u2026|\u2014|\uff5e|\ufe4f|\uffe5]/g
        var novels = novel.match(reg)
        novel = novels.join('')
        novel = novel.substring(0)
        // console.log(novel)
        //var story = novel.split('。')
        // for(var i=0;i<story.length;i++){
        //console.log(story[i])
        //  storys.push(story[i]+'。')
        //  }
        // console.log(story)
        that.setData({
          novel: novel
        })

      }

    })
  }
})