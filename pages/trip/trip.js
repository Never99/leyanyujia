// pages/trip/trip.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listsMenus: [
      {
        img: '../../images/trip/pic08.jpg',
        text: '蓬莱有仙境 醉美三仙山'
      },
      {
        img: '../../images/trip/pic07.jpg',
        text: '醉美三仙山'
      },
      {
        img: '../../images/trip/pic09.jpg',
        text: '八仙过海 各显神通'
      }
    ]
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: '微信小程序联盟',
      desc: '最具人气的小程序开发联盟!',
      path: '/page/user?id=123'
    }
  }
})