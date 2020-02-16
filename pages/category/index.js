// pages/category/index.js
// 导入request库
import {
  request
} from "../../request/request.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    categoryData: [], //导航数据
    categoryList: [], //右侧的详细列表
    selectIndex: 0, //默认选中第一个分类,当前点击的左侧导航栏的索引
    scroll_top: 0 //滚动条的位置       
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // 调用获取列表数据方法
    this.getCategoryData()
  },

  // 发送请求，获取导航列表数据
  getCategoryData: async function() {
    const categoryData = await request({
      url: "/categories"
    });
    const categoryList = categoryData[0].children
    const selectIndex = 0;
    // 把分类列表数据和时间存入本地
    wx.setStorageSync("cate", {
      time: Date.now(),
      data: categoryData
    })
    this.setData({
      categoryData,
      categoryList,
      selectIndex
    })
    console.log(categoryData);
  },
  // 点击了菜单导航
  handleItemClick: function(e) {
    //获取当前标题所在的行数
    const index = e.currentTarget.dataset.index;
    //设置 右边栏 滚动条的位置 默认是在顶部 值为0
    const scroll_top = 0;
    // 设置当前点击所在的行数以及右边栏的内容
    this.setData({
      selectIndex: index,
      categoryList: this.data.categoryData[index].children,
      scroll_top: scroll_top
    });
    // console.log(this.data.currentIndex)
    // console.log(this.data.categoryList)
    // console.log(this.data.currentId)
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  /* 
  1. 每次拿到数据之后，先把数据存在存在缓存里面 storage
  同时设置一下缓存时间
  2. 当下次进来的时候
    a.如果在有效时间内，我们就不发请求；
    b.如果过了时间，那么就再次请求数据
   */
  /* 
      1. 先从缓存中获取数据
      2. 判断数据是否过期，如果过期重新请求数据
      3. 如果没有过期 直接使用数据
   */
  onShow: function() {
    let cate = wx.getStorageSync("cate")
    if (!cate) {
      this.getCategoryData();
    } else {
      if (Date.now() - cate.data > 1000) {
        this.getCategoryData();
      } else {
        // 没有过期，直接使用本地中现有数据
        let categoryData = cate.data;
        // 设置左边默认选项的下标
        let selectIndex = 0;
        // 设置右边列表的默认内容
        let categoryList = categoryData[0].children;
        // 设置到data中
        this.setData({
          categoryData,
          categoryList,
          selectIndex
        })

      }
    }
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