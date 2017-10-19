// pages/find/dream/dream.js
// import { Movie } from 'class/Movie.js';
// var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menusImgs: {},
    inx: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var datas = [
      {
        id: 0,
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
    ]
    this.setData({
      menusImgs: datas[options.id]
    })
  }
})