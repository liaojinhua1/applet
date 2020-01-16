// pages/category/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    categoryData: [] //导航数据
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // 发送请求，获取分类
    wx.request({
      url: 'https://api.zbztb.cn/api/public/v1/categories',
      method: 'GET',
      success: (res => {
        this.setData({
          categoryData: res.data.message
        })
        console.log(res)
      }),
      fail: (err => {
        console.log(err)
      })
      // complete: function(res) {},
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