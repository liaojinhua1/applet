/* 
  1. 加遮罩
  2. 配置通用的Url
  3. 使用promise 进行改造
 */
// 引入基础地址
import { BASE_URL } from "./urls.js";
// 创建promise对象
export const request = (params)=>{
  // 加遮罩
  wx.showLoading({
    title: '正在加载中',
    mask:true
  })
  return new Promise(function(resolve,reject){
    wx.request({
      //  结构传入的参数
      ...params,
      url: BASE_URL + params.url,
      success:(res)=>{
        resolve(res.data.message);
      },
      fail:(err)=>{
        reject(err);
      },
      // 隐藏遮罩
      // complete 接口调用结束的回调函数
      complete:()=>{
        wx.hideLoading();
      }
    })
  })
}
