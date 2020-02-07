// pages/category/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    categoryData: [], //导航数据
    categoryList: [], //右侧的详细列表
    currentIndex: 0, //当前点击的左侧导航栏的索引
    currentId:'' //右侧导航，当前点击的导航id
  },

  // 点击了菜单导航
  select: function(e) {
    // console.log(e)
    // 设置循环列表  
    this.setData({
      currentIndex: e.currentTarget.dataset.index,
      categoryList: this.data.categoryData[e.currentTarget.dataset.index].children      
    });
    console.log(this.data.currentIndex)
    console.log(this.data.categoryList)
    // console.log(this.data.currentId)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // 调用获取列表数据方法
    this.getCategoryData()
  },
  // 发送请求，获取导航列表数据
  getCategoryData() {
    wx.showLoading({
        title: '数据正在加载',
      }),
      // 发送请求，获取分类
      wx.request({
        url: 'https://api.zbztb.cn/api/public/v1/categories',
        method: 'GET',
        success: (res => {
          this.setData({
            categoryData: res.data.message,
          });
          this.setData({
            categoryList: this.data.categoryData[0].children
          })
          console.log(res);
          wx.hideLoading()
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