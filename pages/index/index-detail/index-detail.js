// pages/index/index-detail/index-detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
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
    detailItem: null,
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var detailId = options.id
    console.log()
    this.setData({
      detailItem: this.data.hotMenus[detailId]
    })
  },
  imageOnLoad(ev) {
    console.log(`图片加载成功，width: ${ev.detail.width}; height: ${ev.detail.height}`)
  },
  imageOnLoadError() {
    console.log('图片加载失败')
  }
})