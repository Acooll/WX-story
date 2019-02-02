// pages/search/search.js
Page({
  data: {
    originWords: '极品小农民',
    searchWords: '',
    showPop: true,
    searches: '',
    sumUrl: '',
  },
  showPop: function(e) {
    var that = this
  // console.log(e)
    var index = e.currentTarget.id
    var popwords = this.data.popwords
    console.log(popwords)
    this.setData({
      originWords: popwords[index].title
    })
     if(this.data.originWords != '')
    wx.request({
      url: 'https://caiwei.yuedu.163.com/search.do?key=' + this.data.originWords + '&type=20&docType=json',
      method: 'get',
      header: {
        'content-type': 'json'
      },
      success: function (res) {
        // console.log(res.data)
        that.setData({
          searches: res.data.data,
          showPop: false
        })
      }
    })
  },
  onFocus: function(e) {
    console.log(e)


    this.setData({
      originWords: '',
      showPop: false,
    })


  },

  onLoad: function(options) {
    var that = this
    wx.request({
      url: 'http://yuedu.163.com/bookRankInterface.do?from=original&sortType=yearSell&gender=male&count=7',
      method: 'get',
      header: {
        'content-type': 'json'
      },
      success: function(res) {
        var popwords = res.data.list
        //console.log(res.data)
        that.setData({
          popwords: popwords,

        })
      }
    })
  },
  showDetail: function(e) {
    // console.log(e)

    var that = this
    var searches = this.data.searches
    console.log(searches)
    this.setData({
      detailId: e.currentTarget.id,
      sumUrl: searches[e.currentTarget.id].sumUrl
    })
    var url = this.data.sumUrl.substring(29)
    // console.log(url)

    if (this.data.talks) {
      wx.request({
        url: 'https://yuedu.163.com/newBookReader.do?operation=info&sourceUuid=' + url + '&catalogOnly=true',
        method: 'get',
        header: {
          'content-type': 'json'
        },
        success: function(res) {
          // console.log(res.data)
          that.setData({
            detail: res.data.catalog
          })
          var detail = that.data.detail
          // console.log(detail)
          var detailId = that.data.detailId
          wx.navigateTo({
            url: '/pages/search/detail/detail?id=' + detailId + '&dataDetail=' + JSON.stringify(detail) + '&talks=' + JSON.stringify(that.data.talks),
          })
        }
      })
    }

    if (url) {
      wx.request({
        url: 'https://yuedu.163.com/snsComment.do?operation=get&type=2&id=' + url + '&page=1',
        method: 'get',
        header: {
          'content-type': 'json'
        },
        success: function(res) {
          //  console.log(res.data)
          that.setData({
            talks: res.data.data
          })
          // console.log(detail)

        }
      })
    }

  },

  onSearch: function(e) {
    // console.log(e)
    var that = this
    var searchWords = e.detail.value
    this.setData({
      searchWords: searchWords
    })
    console.log(searchWords)
    wx.request({
      url: 'https://caiwei.yuedu.163.com/search.do?key=' + searchWords + '&type=20&docType=json',
      method: 'get',
      header: {
        'content-type': 'json'
      },
      success: function(res) {
        // console.log(res.data)
        that.setData({
          searches: res.data.data,
        })
      }
    })
    if (searchWords == '') {
      this.setData({
        showPop: true
      })
    }
  }

})