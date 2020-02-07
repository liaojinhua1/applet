//index.js
//获取应用实例
const app = getApp()
// 导入封装的通用请求
import {
  request
} from "../../request/request.js"
Page({
  /**
   * 页面的初始数据
   */
  data: {
    swiperList: [], //轮播图数组
    navData: [], // 导航列表
    floorData: [], //楼层数据
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function() {
    this.getSwiperList();
    this.getNavData();
    this.getFloorData();
  },
  // 获取轮播图图片列表
  // 配合使用async和await
  getSwiperList: async function(e) {
    // wx.request({
    //   url: 'https://api.zbztb.cn/api/public/v1/home/swiperdata',
    //   method: 'GET',
    //   success: (res => {
    //     this.setData({
    //       swiperList: res.data.message
    //     })
    //   }),
    //   fail: function (err) {
    //     console.log(err)
    //   }
    // })
    // }
    const swiperList = await request({
      url: "/home/swiperdata"
    });
    this.setData({
      swiperList
    })
  },
  // 获取导航列表
  getNavData: async function(e) {
    const navData = await request({
      url: "/home/catitems"
    });
    this.setData({
      navData
    })
  },
  // 获取楼层数据
  getFloorData: async function(e) {
    const floorData = await request({
      url: "/home/floordata"
    });
    this.setData({
      floorData
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})