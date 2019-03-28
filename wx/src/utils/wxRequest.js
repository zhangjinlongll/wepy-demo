import wepy from 'wepy';
import util from './util';
import md5 from './md5';
import tip from './tip';

import {
  USER_SPECICAL_INFO,
  USER_INFO,
  SYSTEM_INFO,
  ADDRESS_ID,
  USER_CITY,
  SEL_CLASS_CODE,
  USER_PHONE
} from "./constant";

const API_SECRET_KEY = 'www.mall.cycle.com'
const TIMESTAMP = util.getCurrentTime()
const SIGN = md5.hex_md5((TIMESTAMP + API_SECRET_KEY).toLowerCase())

// 封装api.znSetStorageSync
const znSetStorageSync = (key,value)=>{
  try {
    wx.setStorageSync(key, value);
  }catch (e) {
    try {
      wx.setStorageSync(key,value);
    }catch (e) {
      wx.showModal({
        content: '本地存储异常',
        success: res=>{
          if (res.confirm) {

          }
        }
      })
    }
  }
};

// 封装api.znSetStorageSync
const znGetStorageSync = (key)=>{
  try {
    return wx.getStorageSync(key);
  }catch (e) {
    try {
      return wx.getStorageSync(key);
    }catch (e) {
      wx.showModal({
        content: '获取本地存储异常',
        success: res=>{
          if (res.confirm) {

          }
        }
      })
    }
  }
};

// 封装 请求接口方法
const wxRequest = async(params = {}, url) => {
    let {showLoading} = params;
    if (showLoading) {
      tip.loading();
    }
    let data = params.query || {};
		let userSpecicalInfo = await znGetStorageSync(USER_SPECICAL_INFO);
		let cityInfo = await znGetStorageSync(USER_CITY);
    let showError = params.showError == false?params.showError:true;
		data.cityCode = data.cityCode || cityInfo.cityCode||'';
		data.source = "1";
		data.extId = userSpecicalInfo.userInfo ? userSpecicalInfo.userInfo.openId : ""; // openid
		if(userSpecicalInfo && userSpecicalInfo.userInfo){
	    let res = await wepy.request({
	      url: url,
	      method: params.method || 'GET',
	      data: data,
	      header:{
	      	"REQUEST-SOURCE":"1",
	        "X-Auth-Token":userSpecicalInfo.userInfo.tokenId
	      }
	    });

	    if (showLoading) {
        tip.loaded();
      }

      console.log('请求地址:'+url,'\n请求参数:\n',data,'\n返回结果:\n',res.data);

	    if(res.data.errCode == 0){
          return res;
        }else if(res.data.errCode == 1000 || res.data.errCode == 1001 || res.data.errCode == 1004 || res.data.errCode == 1005 || res.data.errCode == 10001 ){
          tip.loaded();
          wx.showModal({
            content: `${res.data.message}` || `服务异常，请稍后再试`,
            showCancel: false,
            confirmColor: '#FF8000',
            success: res=>{if (res.confirm) {
              //token 过期
              znSetStorageSync(USER_INFO,"");
              znSetStorageSync(USER_SPECICAL_INFO,"");
              znSetStorageSync(USER_CITY,"");
              wx.navigateTo({
                url: '/pages/main/authorization'
              });
            }}
          });

	    }else{
	    	tip.loaded();
	    	if(showError){
          wx.showModal({
            // content: `反馈给客户经理，我们会第一时间帮您解决！错误码：${res.data.status?res.data.status:res.data.errCode} ${res.data.path?res.data.path:(res.data.exception?res.data.exception:'')} ${res.data.message}` || '加载超时,请稍后再试',
            content: `${res.data.message}` || '服务异常，请稍后再试',
            showCancel: false,
            confirmColor: '#FF8000',
            success: res=>{if (res.confirm) {

            }}
          });
        }
	    	return res;
	    }
		}
};


// 封装 请求接口方法
const wxUploadFile = async(params = {}, url) => {
  let userSpecicalInfo = await znGetStorageSync(USER_SPECICAL_INFO);
  let wxFilePath = params.filePath;
  const res = await  wepy.uploadFile({
    url: url, // 仅为示例，非真实的接口地址
    filePath: wxFilePath,
    name: 'file',
    header: {
      // 'content-type':'multipart/form-data'
      "REQUEST-SOURCE": "1",
      "X-Auth-Token": userSpecicalInfo.userInfo.tokenId
    }

  });

  const data = JSON.parse(res.data);
  if(data.errCode == 0){
    return data;
  }else{
    wx.showModal({
      content: `${data.message}` || '服务异常，请稍后再试',
      showCancel: false,
      confirmColor: '#FF8000'
    });
    return data;
  }


  // uploadTask.onProgressUpdate((res) => {
  //   console.log('上传进度', res.progress)
  //   console.log('已经上传的数据长度', res.totalBytesSent)
  //   console.log('预期需要上传的数据总长度', res.totalBytesExpectedToSend)
  // })
  //
  // //uploadTask.abort() // 取消上传任务

};

module.exports = {
    wxRequest,
    wxUploadFile,
    znSetStorageSync,
    znGetStorageSync
}
