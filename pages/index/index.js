//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imageArr: [], //照片数组
    navData: [], // 导航列表
    floorData: [], //楼层数据
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function() {
    // 轮播图
    wx.request({
        url: 'https://api.zbztb.cn/api/public/v1/home/swiperdata',
        method: 'GET',
        success: (res => {
          this.setData({
            imageArr: res.data.message
          })
        }),
        fail: function(err) {
          console.log(err)
        }
      }),
      // 导航菜单
      wx.request({
        url: 'https://api.zbztb.cn/api/public/v1/home/catitems',
        method: 'GET',
        success: (res => {
          this.setData({
            navData: res.data.message
          })         
          console.log(this.data.navData)
        }),
        fail: (err => {
          console.log(err)
        })
      }),
      // 楼层
      wx.request({
        url: 'https://api.zbztb.cn/api/public/v1/home/floordata',
        method: 'GET',
        success: (res => {
          this.setData({
            floorData: res.data.message
          })
          console.log(this.data.floorData)
        }),
        fail: (err => {

        })
        // complete: function(res) {},
      })
  }
})