//find.js

Page({
  data: {
    findImgUrls: [
      'http://www.baxian.cn/images/banner/pic06.jpg',
      'http://www.baxian.cn/images/banner/pic01.jpg',
      'http://www.baxian.cn/images/banner/pic02.jpg',
      'http://www.baxian.cn/images/banner/pic04.jpg',
      'http://www.baxian.cn/menghuan/images/banner/pic05.jpg'
    ],
    menusImgs: [
      {
        id:0,
        img: 'http://www.baxian.cn/menghuan/images/banner/pic03.jpg',
        text: '欧乐堡梦幻世界'
      },
      { 
        id: 1,
        img: 'http://www.baxian.cn/images/banner/haiyang/pic03.jpg',
        text: '欧乐堡水上世界'
      },
      {
        id: 2,
        img: 'http://www.baxian.cn/images/banner/haiyang/pic01.jpg',
        text: '欧乐堡极地世界'
      }
    ],
    autoplay: true,
    interval: 2000,
    duration: 1000,
    indicatorDots: true,
    circular: true
  },
  onPostTap: function (event) {
    var findId = event.currentTarget.dataset.findid;
    wx.navigateTo({
      url: "dream/dream?id=" + findId
    })
  },
  onShareAppMessage: function () {
    this.data.autoplay = false
    return {
      title: '微信小程序联盟',
      desc: '最具人气的小程序开发联盟!',
      path: '/page/user?id=123'
    }
  }
})
