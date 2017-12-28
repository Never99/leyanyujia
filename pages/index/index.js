// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '../../images/banner/banner1.jpg',
      '../../images/banner/banner2.jpg',
      '../../images/banner/banner3.jpg'
    ],
    iconType: [
      {
        id: 0, 
        sta: "success",
        texts: "旅游攻略"
      },
      {
        id: 1,
        sta: "info",
        texts: "客栈预订"
      },
      {
        id: 2,
        sta: "warn",
        texts: "推荐行程"
      },
      {
        id: 3,
        sta: "waiting",
        texts: "门店导航"
      }
    ],
    hotMenus: [
      {
        id: 0,
        img: "http://www.baxian.cn/images/banner/pic01.jpg",
        titles: "蓬莱阁"
      },
      {
        id: 1,
        img: "http://www.baxian.cn/images/banner/pic02.jpg",
        titles: "三仙山"
      },
      {
        id: 2,
        img: "http://www.baxian.cn/menghuan/images/banner/pic03.jpg",
        titles: "欧乐堡梦幻世界"
      },
      {
        id: 3,
        img: "http://www.baxian.cn/images/banner/haiyang/pic01.jpg",
        titles: "欧乐堡水上世界"
      },
      {
        id: 4,
        img: "http://www.baxian.cn/images/banner/haiyang/pic03.jpg",
        titles: "蓬莱海洋极地世界"
      },
      {
        id: 5,
        img: "http://www.baxian.cn/images/banner/pic01.jpg",
        titles: "八仙过海景区"
      }
    ],
    autoplay: true,
    interval: 2000,
    duration: 1000,
    indicatorDots: true,
    circular: true
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  onShareAppMessage: function () {
    return {
      title: '微信小程序开发联盟',
      desc: '最具人气的小程序开发联盟!',
      path: '/page/user?id=123'
    }
  },
  onSwiperTap: function (event) {
    console.log(event)
    // target 和currentTarget
    // target指的是当前点击的组件 和currentTarget 指的是事件捕获的组件
    // target这里指的是image，而currentTarget指的是swiper
    // var postId = event.target.dataset.postid;
    // wx.navigateTo({
    //   url: "index/index?id=" + postId
    // })
  },
  onListTap: function (event) {
    var indexId = event.currentTarget.dataset.indexid;
    var lists = ['travelStrategy/travelStrategy', 'innReservation/innReservation', 'itinerary/itinerary','storeNavigation/storeNavigation']
    // if (indexId == 2) {
    //   wx.switchTab({
    //     url: '../trip/trip'
    //   })
    // } else {
      wx.navigateTo({
        url: lists[indexId]
      })
    // }s
    
  },
  onDetalTap: function (event) {
    var detailId = event.currentTarget.dataset.detailid;
    wx.navigateTo({
      url: "index-detail/index-detail?id=" + detailId
    })
    
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log(1)
  }
})