
Page({
  data: {
  },
  onLoad: function (options) {
    var details = []
    var detailId = options.id
    var detail = JSON.parse(options.dataDetail)
    var talks = JSON.parse(options.talks)
     console.log(talks)
    if(detail.length>10){
    for(var i=0;i<11;i++){
       details.push(detail[i])
    }
  }else{
    details = detail
  }
    // console.log(details)
    if(talks){
    this.setData({
      bookDetail: details,
      talks : talks
    })
    }
    // console.log(this.data.bookDetail)
  },


})